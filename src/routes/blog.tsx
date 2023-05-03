/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import {
  Bold,
  Italic,
  Underline,
  A,
  Paragraph,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  UL,
  OL,
  LI,
  HR,
  Quote,
  InlineCode,
} from '../components/Typography';

const query = `
 query postCollectionQuery {
  postCollection {
    items {
      sys {
        id
      }
      title
      thumbnail { url }
      description
      date
      category
      content { json }
      slug
    }
  }
}
`;

interface IPost {
  sys: {
    id: string;
  };
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  thumbnail: {
    url: string;
  };
  content: {
    json: any;
  };
}

interface IPostProps {
  post: IPost;
}

export default function Blog() {
  const [posts, setPosts] = useState<IPost[] | []>([]);
  const { state } = useLocation();

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/8603pmeru1h9/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Authenticate the request
          Authorization: 'Bearer 2YAZtROiHVlUxISi-rFc_jz0JvU9LGzJ2_SXYUqi1EM',
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setPosts([...data.postCollection.items]);
        // console.log(posts);
      });
  }, []);

  if (!posts) return <div>Loading...</div>;

  if (!state) {
    return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {posts.map((post) => {
              return <BlogSample key={post.sys.id} post={post} />;
            })}
          </div>
        </div>
      </section>
    );
  }

  return <Post post={state.post} />;
}

function BlogSample({ post }: IPostProps) {
  const postDate = new Date(post.date);
  return (
    <div className="p-4 lg:w-1/3">
      <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          {post.category}
        </h2>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
          {post.title}
        </h1>
        <p className="leading-relaxed mb-3">{post.description}</p>
        <Link
          className="text-blue-500 inline-flex items-center cursor-pointer"
          to={`${post.slug}`}
          state={{ post: post }}
        >
          Read
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
        <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            {postDate.toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <Bold>{text}</Bold>,
    [MARKS.ITALIC]: (text: any) => <Italic>{text}</Italic>,
    [MARKS.UNDERLINE]: (text: any) => <Underline>{text}</Underline>,
    [MARKS.CODE]: (text: any) => <InlineCode>{text}</InlineCode>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (children: any) => <Paragraph>{children}</Paragraph>,
    [BLOCKS.HEADING_1]: (children: any) => <H1>{children}</H1>,
    [BLOCKS.HEADING_2]: (children: any) => <H2>{children}</H2>,
    [BLOCKS.HEADING_3]: (children: any) => <H3>{children}</H3>,
    [BLOCKS.HEADING_4]: (children: any) => <H4>{children}</H4>,
    [BLOCKS.HEADING_5]: (children: any) => <H5>{children}</H5>,
    [BLOCKS.HEADING_6]: (children: any) => <H6>{children}</H6>,
    [BLOCKS.UL_LIST]: (children: any) => <UL>{children}</UL>,
    [BLOCKS.OL_LIST]: (children: any) => <OL>{children}</OL>,
    [BLOCKS.LIST_ITEM]: (children: any) => <LI>{children}</LI>,
    [BLOCKS.QUOTE]: (children: any) => <Quote>{children}</Quote>,
    [BLOCKS.HR]: (children: any) => <HR>{children}</HR>,
    [INLINES.HYPERLINK]: (node: any, children: any) => <A href={node.data.uri}>{children}</A>,
  },
};

function Post({ post }: IPostProps) {
  const postDate = new Date(post.date);
  return (
    <section className="text-gray-600 body-font dark:text-gray-400 ">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={post.thumbnail.url}
            />
          </div>
          <article className="flex mt-10">
            <div className=" border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left text-gray-900 dark:text-white">
              <H1>{post.title}</H1>
              <p className="mb-6">
                Published{' '}
                <time dateTime={postDate.toLocaleDateString()}>
                  {postDate.toLocaleDateString()}
                </time>
              </p>
              {documentToReactComponents(post.content.json, options)}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

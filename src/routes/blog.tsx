/* eslint-disable jsx-a11y/anchor-is-valid */

import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document, INLINES, MARKS } from '@contentful/rich-text-types';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  A,
  Bold,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  HR,
  InlineCode,
  Italic,
  LI,
  OL,
  Paragraph,
  Quote,
  UL,
  Underline,
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
      body { json }
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
  body: {
    json: Document;
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
          Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_DELIVERY_KEY}`,
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
      <section className="text-gray-600 body-font relative sm:min-h-screen">
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
      <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-10 pb-20 rounded-lg overflow-hidden text-center relative dark:bg-gray-700 dark:bg-opacity-40">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 dark:text-gray-200">
          {post.category}
        </h2>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 dark:text-white">
          {post.title}
        </h1>
        <p className="leading-relaxed mb-3 dark:text-gray-300">{post.description}</p>
        <Link
          className="text-blue-500 inline-flex items-center cursor-pointer font-medium"
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
          <span className="text-gray-400 inline-flex items-center leading-none text-sm dark:text-gray-400 dark:border-gray-700 dark:border-opacity-50">
            {postDate.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <Bold>{text}</Bold>,
    [MARKS.ITALIC]: (text: React.ReactNode) => <Italic>{text}</Italic>,
    [MARKS.UNDERLINE]: (text: React.ReactNode) => <Underline>{text}</Underline>,
    [MARKS.CODE]: (text: React.ReactNode) => <InlineCode>{text}</InlineCode>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children: React.ReactNode) => <Paragraph>{children}</Paragraph>,
    [BLOCKS.HEADING_1]: (node, children: React.ReactNode) => <H1>{children}</H1>,
    [BLOCKS.HEADING_2]: (node, children: React.ReactNode) => <H2>{children}</H2>,
    [BLOCKS.HEADING_3]: (node, children: React.ReactNode) => <H3>{children}</H3>,
    [BLOCKS.HEADING_4]: (node, children: React.ReactNode) => <H4>{children}</H4>,
    [BLOCKS.HEADING_5]: (node, children: React.ReactNode) => <H5>{children}</H5>,
    [BLOCKS.HEADING_6]: (node, children: React.ReactNode) => <H6>{children}</H6>,
    [BLOCKS.UL_LIST]: (node, children: React.ReactNode) => <UL>{children}</UL>,
    [BLOCKS.OL_LIST]: (node, children: React.ReactNode) => <OL>{children}</OL>,
    [BLOCKS.LIST_ITEM]: (node, children: React.ReactNode) => <LI>{children}</LI>,
    [BLOCKS.QUOTE]: (node, children: React.ReactNode) => <Quote>{children}</Quote>,
    [BLOCKS.HR]: () => <HR />,
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <A href={node.data.uri}>{children}</A>
    ),
  },
};

function Post({ post }: IPostProps) {
  const postDate = new Date(post.date);
  return (
    <main className="relative text-gray-600 body-font dark:text-gray-400 ">
      <div className="container px-5 lg:py-16 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          {post.thumbnail && (
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={post.thumbnail.url}
              />
            </div>
          )}
          <div className="flex mt-10">
            <article className=" border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-left text-gray-900 dark:text-white">
              <h1 className="text-5xl font-extrabold mb-2">{post.title}</h1>
              <p className="mb-6 italic">
                <time dateTime={postDate.toLocaleDateString()}>
                  {postDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </p>
              <HR />
              {documentToReactComponents(post.body.json, options)}
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

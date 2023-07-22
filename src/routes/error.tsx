import { useRouteError, useNavigate } from 'react-router-dom';
import { ReactComponent as Error } from 'assets/error.svg';

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <section className="text-gray-600 dark:bg-gray-900 dark:text-gray-400 body-font h-screen  ">
      <div className="container mx-auto flex px-5 py-10 md:py-24 items-center justify-center flex-col ">
        <Error height={300} width={300} className="text-blue-500" />

        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
            Darn
          </h1>
          <p className="mb-8 leading-relaxed">
            Sorry, not too sure what you&apos;re looking for. Let&apos;s get you back to where you
            need to be.
          </p>
          <div className="flex justify-center">
            <button
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              onClick={goBack}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

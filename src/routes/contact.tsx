/* eslint-disable jsx-a11y/anchor-is-valid */

export default function Contact() {
  return (
    <section className="body-font  sm:min-h-screen">
      <div className="container px-5 py-16 mx-auto ">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
            Contact Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Want to get in touch?</p>
        </div>
        <div className="p-2 w-full">
          <a
            className="flex w-fit mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg cursor-pointer"
            target={'_blank'}
            rel="noreferrer"
            href="mailto:carsonsaundersalt@gmail.com"
          >
            Send me an email
          </a>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-800">
              or
            </span>
          </div>
          <a
            className="flex w-fit mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg cursor-pointer"
            target={'_blank'}
            rel="noreferrer"
            href="https://www.linkedin.com/in/carson-saunders-649a1a1b2/"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5 mr-2 mt-0.5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
            Connect with me on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

import Headshot from 'assets/me.jpg';

export default function About() {
  return (
    <section className="body-font ">
      <div className="container px-5 py-10 md:py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div>
                <img
                  className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
                  src={Headshot}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 dark:text-white text-lg">
                  Carson Saunders
                </h2>
                <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                <p className="text-base">Husband, Software Engineer, Gamer</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                {
                  "My name's Carson. I'm from Utah, and I'm a software engineer. I'm currently working at Ancestry.com, and I'm loving it. I'm married to my beautiful wife, Danielle. I love to play video games, and I'm a huge fan of the Legend of Zelda series. I also love to watch sports (my favorites are American Football and the NBA). I'm a huge nerd, and I love to learn new things. I'm always looking for new opportunities to grow and learn."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

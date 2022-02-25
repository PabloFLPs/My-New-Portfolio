/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
export default function AboutMe() {
    return (
        <>
            <section id="About" className="py-6 bg-dark text-white overflow-hidden md:py-12 lg:pt-24">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <h2 className="text-center text-3xl font-bold">
                        Front-End <span className="text-light-brown">Developer</span>
                    </h2>
                    <blockquote className="mt-10">
                    <div className="max-w-3xl mx-auto text-center text-lg leading-7 font-medium text-gray-900">
                        <p>
                            I'm a front-end Developer and I am on the way to specialize myself in Web Development, which is an area that I am loving a lot.
                            I have also some experience with back-end tools, like NodeJS, Express, Sequelize and TypeORM. My front-end skills englobe React,
                            NextJS, Sass and Tailwind.
                            <p className="pt-6">
                                Check my <a href="https://drive.google.com/file/d/185LM0OAUKOe1c2b2eCE9613QH37Pt_gb/view?usp=sharing" className="text-light-brown hover:opacity-80">Resume</a>
                            </p>
                        </p>
                    </div>
                    </blockquote>
                </div>
                </div>
            </section>
        
            <div className="bg-dark pt-16 lg:py-24">
                <div className="pb-16 bg-dark-gray lg:pb-0 lg:z-10 lg:relative">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className="relative lg:-my-8">
                    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-dark lg:hidden" />
                    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                        <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                        <img
                            className="object-cover lg:h-full lg:w-full"
                            src="https://avatars.githubusercontent.com/u/58035837?v=4"
                            alt=""
                        />
                        </div>
                    </div>
                    </div>
                    <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                        <blockquote>
                        <div>
                            <p className="mt-6 text-2xl font-medium text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet
                            feugiat est integer dolor auctor adipiscing nunc urna, sit.
                            </p>
                        </div>
                        <footer className="mt-6">
                            <p className="text-base font-medium text-light-brown">Pablo Felipe</p>
                            <p className="text-base font-medium text-white">Web Developer at <a href="https://lecode.dev/" className="text-light-brown hover:opacity-80">LeCode</a></p>
                        </footer>
                        </blockquote>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
  }
  
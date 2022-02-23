/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import homeImage from "../assets/home-dev.jpg"

export default function Hero() {
  return (
    <div className="relative bg-dark text-white">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Hi there! I'm</span>{' '}
              <p/>
              <span className="block text-clear-brown xl:inline">Pablo Felipe</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-6 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-dark-gray bg-clear-brown hover:bg-dark-gray md:py-4 md:text-lg md:px-10"
                >
                  Know Me
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-40 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <div aria-hidden="true" className="absolute bg-gradient-to-b from-dark to-transparent z-10  lg:h-full lg:w-72 lg:bg-gradient-to-r"></div>
          <img
            className="absolute opacity-60 inset-0 w-full h-full object-cover"
            src={homeImage}
            alt=""
          />
        </div>
      </main>
    </div>
  )
}

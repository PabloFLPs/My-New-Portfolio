/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { MdOutlineComputer, MdOutlineMenu, MdClose } from "react-icons/md";

export default function NavigationBar() {
  interface IDisclosure {
    open: boolean,
  }

  return (
    <Disclosure as="nav" className="bg-dark-gray shadow text-white sticky top-0 z-50">
      {({ open } : IDisclosure) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-clear-brown">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <MdClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MdOutlineMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <MdOutlineComputer
                    className="block lg:hidden h-8 w-auto text-gray-700"
                  />
                  <MdOutlineComputer
                    className="hidden lg:block h-8 w-auto text-gray-700"
                  />
                  <h1 className="text-gray-700 inline-flex items-center px-6 text-xl font-semibold">
                      Pablo Felipe
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="#"
                    className="border-transparent hover:border-clear-brown hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-500"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="border-transparent hover:border-clear-brown hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-500"
                  >
                    Portfolio
                  </a>
                  <a
                    href="#"
                    className="border-transparent hover:border-clear-brown hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-500"
                  >
                    Resume
                  </a>
                  <a
                    href="#"
                    className="border-transparent hover:border-clear-brown hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-500"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="border-transparent hover:border-clear-brown hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-500"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="bg-dark-gray border-clear-brown text-clear-brown block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Portfolio
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Resume
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Contact Me
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

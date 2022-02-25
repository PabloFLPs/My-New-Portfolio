/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import React from "react";
import { RiPhoneFill, RiMailFill } from "react-icons/ri";

export default function Example() {
  return (
    <div id="Contact" className="relative bg-dark text-white px-12 py-8">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className=" max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Get in <span className="text-light-brown">Touch</span></h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Do you have a question or want to talk with me? You can send me a message and I will back to you as soon as possible.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <RiMailFill className="flex-shrink-0 h-6 w-6 text-light-brown" aria-hidden="true" />
                  <span className="ml-3">pablo@lecode.dev</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-dark border-none rounded-md py-16 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST" onSubmit={(event: React.FormEvent<HTMLFormElement>) => event.preventDefault()} className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 rounded-md"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 rounded-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 rounded-md"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 rounded-md"
                  placeholder="Message"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-light-brown hover:bg-opacity-80 transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

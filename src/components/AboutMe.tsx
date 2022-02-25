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

import {ReactComponent as ReactIcon} from "../assets/svg/react.svg"
import {ReactComponent as NextJSIcon} from "../assets/svg/nextjs.svg"
import {ReactComponent as HTMLIcon} from "../assets/svg/html.svg"
import {ReactComponent as SassIcon} from "../assets/svg/sass.svg"
import {ReactComponent as TailwindIcon} from "../assets/svg/tailwind.svg"
import {ReactComponent as CSSIcon} from "../assets/svg/css.svg"
import {ReactComponent as NodeJSIcon} from "../assets/svg/nodejs.svg"
import {ReactComponent as InsomniaIcon} from "../assets/svg/insomnia.svg"
import {ReactComponent as SequelizeIcon} from "../assets/svg/sequelize.svg"
import {ReactComponent as DockerIcon} from "../assets/svg/docker.svg"
import {ReactComponent as PostgresIcon} from "../assets/svg/postgres.svg"

const frontendItems = [
    {
        name: 'React',
        href: '',
        icon: (props: React.HTMLAttributes<SVGElement>) => (
            <ReactIcon {...props}/>
        ),
    },
    {
        name: 'NextJS',
        href: '',
        icon: (props: React.HTMLAttributes<SVGElement>) => (
            <NextJSIcon {...props}/>
        ),
    },
    {
        name: 'HTML',
        href: '',
        icon: (props: React.HTMLAttributes<SVGElement>) => (
            <HTMLIcon {...props}/>
        ),
    },
    {
        name: 'CSS',
        href: '',
        icon: (props: React.HTMLAttributes<SVGElement>) => (
            <CSSIcon {...props}/>
        ),
    },
    {
        name: 'Sass',
        href: '',
        icon: (props: React.HTMLAttributes<SVGElement>) => (
            <SassIcon {...props}/>
        ),
    },
    {
        name: 'Tailwind',
        href: '',
        icon: (props: React.HTMLAttributes<SVGElement>) => (
            <TailwindIcon {...props}/>
        ),
    },
]

const backendItems = [
    {
        name: 'NodeJS',
        href: '',
        icon: (props: React.HTMLAttributes<SVGElement>) => (
            <NodeJSIcon {...props}/>
        ),
    },
    {
        name: 'Insomnia',
        href: '',
        icon: (props: React.HTMLAttributes<SVGElement>) => (
            <InsomniaIcon {...props}/>
        ),
    },
    {
        name: 'Sequelize',
        href: '',
        icon: (props: React.HTMLAttributes<SVGElement>) => (
            <SequelizeIcon {...props}/>
        ),
    },
    {
        name: 'Postgres',
        href: '',
        icon: (props: React.HTMLAttributes<SVGElement>) => (
            <PostgresIcon {...props}/>
        ),
    },
]

export default function AboutMe() {
    return (
        <>
            <section id="About" className="py-6 bg-dark text-white overflow-hidden md:py-12 lg:pt-24">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <h2 className="text-center text-3xl font-bold">
                        Software <span className="text-light-brown">Developer</span>
                    </h2>
                    <blockquote className="mt-10">
                    <div className="max-w-4xl mx-auto text-center text-lg leading-7 font-medium text-gray-900">
                        <p>
                            I am always very curious about innovations and my knowledge in the technology and development areas. When something interests me, I seek to increase my knowledge about that.
                            <p className="pt-4">
                                You can check my resume <a href="https://drive.google.com/file/d/185LM0OAUKOe1c2b2eCE9613QH37Pt_gb/view?usp=sharing" className="text-light-brown hover:opacity-80">here.</a>
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
                                I have experience in the following front-end tools:
                                <div className="flex space-x-6 md:order-2 py-4 pb-8">
                                    {frontendItems.map((item) => (
                                        <a key={item.name} href={item.href} className="hover:text-light-brown transition-all duration-300">
                                        <span className="sr-only">{item.name}</span>
                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                        </a>
                                    ))}
                                </div>
                                I have also some experience with back-end tools:
                                <div className="flex space-x-6 md:order-2 py-4">
                                    {backendItems.map((item) => (
                                        <a key={item.name} href={item.href} className="hover:text-light-brown transition-all duration-300">
                                        <span className="sr-only">{item.name}</span>
                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                        </a>
                                    ))}
                                </div>
                            </p>
                        </div>
                        <footer className="mt-6">
                            <p className="text-base font-medium text-white">Pablo Felipe</p>
                            <p className="text-base font-medium text-white">Software Developer at <a href="https://lecode.dev/" className="text-light-brown hover:opacity-80">LeCode</a></p>
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
  
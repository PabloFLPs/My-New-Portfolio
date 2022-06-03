/* This example requires Tailwind CSS v2.0+ */
const projects = [
    {
        name: 'Pokedex - NextJS',
        email: 'pablofelipe1999@hotmail.com',
        role: 'Pokedex with PokeAPI, NextJS and Tailwind. The deployed application is linked here.',
        imageUrl: '',
        href: 'http://next-js-poke-api-and-tailwind.vercel.app/',
    },
    {
        name: 'Ignite Platform - Redux',
        email: 'pablofelipe1999@hotmail.com',
        role: 'This is a platform to search details about games. Made with RAWG.io and Redux. Follows the link for the deployed application.',
        imageUrl: '',
        href: 'https://ignite-redux-project-course.vercel.app/',
    },
    {
        name: 'Podcastr Application - Rocketseat\'s NLW 5',
        email: 'pablofelipe1999@hotmail.com',
        role: 'Podcastr NextJS project realized on Rocketseat NLW 5. You can check the deployed application by clicking.',
        imageUrl: '',
        href: 'https://podcastr-next-js-tau.vercel.app/',
    },
    {
        name: 'Diversight Project - ioasys CAMP 2021',
        email: 'pablofelipe1999@hotmail.com',
        role: 'Code referred to Diversight back-end  application, realized by META-EXPLOIT team, on ioasys Camp - Phase 02.',
        imageUrl: '',
        href: 'https://github.com/PabloFLPs/ioasys-CAMP-2021-diversight',
    },
    {
        name: 'Send Email API - Nodemailer',
        email: 'pablofelipe1999@hotmail.com',
        role: 'This is an API to send emails. I made this to use in my personal page, as the email API that the contact form is connected to.',
        imageUrl: '',
        href: 'https://github.com/PabloFLPs/Send-Email-API',
    },
    {
        name: 'News App - NextJS',
        email: 'pablofelipe1999@hotmail.com',
        role: 'This is a simple News App made with NextJS and News API. Click to go to the application.',
        imageUrl: '',
        href: 'https://next-js-news-app-seven.vercel.app/',
    },
    {
        name: 'LetMeAsk Application - Rocketseat\'s NLW 6',
        email: 'pablofelipe1999@hotmail.com',
        role: 'LetMeAsk React project realized on Rocketseat NLW 6. The link address to the deployed application is linked below.',
        imageUrl:'',
        href: 'https://letmeask-nlwtgthr.web.app/',
    },
    {
        name: 'Weather App - Redux, Redux Toolkit and Tailwind',
        email: 'pablofelipe1999@hotmail.com',
        role: 'Based on the "React Js Weather App Using Redux" video. It is an application to get current weather situation on a city. Link below.',
        imageUrl: '',
        href: 'http://weather-app-react-redux-eight.vercel.app/',
    },
    // More people...
]
  
export default function Projects() {
    return (
        <>
            <div id="Projects" className="border-light-brown bg-dark text-white px-14 md:px-24 pb-6 pt-20 lg:px-40">
            <div className="sm:flex sm:justify-between sm:items-baseline">
                <div className="sm:w-0 sm:flex-1">
                <h1 id="message-heading" className="text-3xl font-bold">
                  Personal <span className="text-light-brown">Portfolio</span>
                </h1>
                <p className="mt-1 text-lg text-gray-500">You can check some of my project repositories below:</p>
                </div>
            </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 px-6 md:px-16 lg:px-40 xl:px-60 bg-dark text-white pb-2">
                {projects.map((project) => (
                <div
                    key={project.email}
                    className="relative rounded-lg border-none bg-dark-gray px-6 py-5 shadow-sm flex items-center space-x-3 hover:ring-1 hover:ring-light-brown transition-all duration-300"
                >
                    <div className="flex-shrink-0">
                    </div>
                    <div className="flex-1 min-w-0">
                    <a href={project.href} target="_blank" rel="noreferrer" className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-light-brown">{project.name}</p>
                        <p className="text-sm">{project.role}</p>
                    </a>
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}

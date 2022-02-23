/* This example requires Tailwind CSS v2.0+ */
const projects = [
    {
        name: 'Podcastr Application - Rocketseat\'s NLW 5',
        email: 'lesliealexander@example.com',
        role: 'Podcastr NextJS project realized on Rocketseat NLW 5. The deployed application link is attached below.',
        imageUrl: '',
        href: 'https://github.com/PabloFLPs/Podcastr-NextJS',
    },
    {
        name: 'Diversight Project - ioasys CAMP 2021',
        email: 'lesliealexander@example.com',
        role: 'Code referred to Diversight back-end  application, realized by META-EXPLOIT team, on ioasys Camp - Fase 02.',
        imageUrl: '',
        href: 'https://github.com/PabloFLPs/ioasys-CAMP-2021-diversight',
    },
    {
        name: 'LetMeAsk Application - Rocketseat\'s NLW 6',
        email: 'lesliealexander@example.com',
        role: 'LetMeAsk React project realized on Rocketseat NLW 6. The link adress to the deployed application is linked below.',
        imageUrl:'',
        href: 'https://github.com/PabloFLPs/Rocketseat-NLW6-React',
    },
    {
        name: 'Responsive Website - Only HTML and CSS',
        email: 'lesliealexander@example.com',
        role: 'This is a fully responsive HTML and CSS only application based on the video linked below.',
        imageUrl: '',
        href: 'https://github.com/PabloFLPs/responsive-html-css-only',
    },
    // More people...
]
  
export default function Projects() {
    return (
        <>
            <div className="pb-5 border-green-200 bg-dark text-white px-12 py-6">
            <div className="sm:flex sm:justify-between sm:items-baseline">
                <div className="sm:w-0 sm:flex-1">
                <h1 id="message-heading" className="text-2xl font-medium">
                    Full-Stack <span className="text-green-200">Developer</span>
                </h1>
                <p className="mt-1 text-sm text-gray-500 truncate">Checkout and Payments Team</p>
                </div>
            </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 bg-dark text-white px-12 py-6">
                {projects.map((project) => (
                <div
                    key={project.email}
                    className="relative rounded-lg border-none bg-dark-gray px-6 py-5 shadow-sm flex items-center space-x-3 focus-within:ring-1 focus-within:ring-green-200"
                >
                    <div className="flex-shrink-0">
                    </div>
                    <div className="flex-1 min-w-0">
                    <a href={project.href} className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-green-200">{project.name}</p>
                        <p className="text-sm truncate">{project.role}</p>
                    </a>
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}
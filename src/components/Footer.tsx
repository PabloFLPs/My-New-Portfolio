/* This example requires Tailwind CSS v2.0+ */
import {ReactComponent as LinkedIn} from "../assets/svg/linkedin.svg"
import {ReactComponent as Github} from "../assets/svg/github.svg"
import {ReactComponent as Upwork} from "../assets/svg/upwork.svg"
import {ReactComponent as DevCommunity} from "../assets/svg/devcommunity.svg"

const navigation = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/pablo-felipe-lnkdn/',
        icon: (props: React.HTMLAttributes<SVGElement>) => (
            <LinkedIn {...props}/>
        ),
    },
    {
        name: 'GitHub',
        href: 'https://github.com/PabloFLPs',
        icon: (props: React.HTMLAttributes<SVGElement>) => (
            <Github {...props}/>
        ),
    },
    {
        name: 'Upwork',
        href: 'https://www.upwork.com/freelancers/~0103d7e5ccc6f98697',
        icon: (props: React.HTMLAttributes<SVGElement>) => (
            <Upwork {...props}/>
        ),
    },
    {
        name: 'Dev Community',
        href: 'https://dev.to/pablofelps',
        icon: (props: React.HTMLAttributes<SVGElement>) => (
            <DevCommunity {...props}/>
        ),
    },
]
  
export default function Footer() {
    return (
        <footer className="bg-dark-gray text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
                <a key={item.name} href={item.href} className="hover:text-light-brown transition-all duration-300">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
            ))}
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">&copy; 2022 Pablo FELPs Portfolio - Made with Tailwind. </p>
            </div>
        </div>
        </footer>
    )
}

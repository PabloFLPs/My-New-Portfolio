/* This example requires Tailwind CSS v2.0+ */
import {ReactComponent as LinkedIn} from "../assets/svg/linkedin.svg"

import { HiOutlineAcademicCap, HiOutlineCode, HiOutlineShare } from "react-icons/hi";

const experiences = [
  {
    role: 'Electrotechnician',
    institution: 'CEFET MG - Campus X',
    socialIcon: (props: React.HTMLAttributes<SVGElement>) => (
      <HiOutlineAcademicCap {...props}/>
    ),
    linkedinUrl: 'https://www.linkedin.com/company/cefet-mg/',
  },
  {
    role: 'IT Support',
    institution: 'Skill Informática',
    socialIcon: (props: React.HTMLAttributes<SVGElement>) => (
      <HiOutlineCode {...props}/>
    ),
    linkedinUrl: 'https://www.linkedin.com/company/skill-inform-tica/about/',
  },
  {
    role: 'Computer Engineer',
    institution: 'CEFET MG - Campus II',
    description: "",
    socialIcon: (props: React.HTMLAttributes<SVGElement>) => (
      <HiOutlineAcademicCap {...props}/>
    ),
    linkedinUrl: 'https://www.linkedin.com/company/cefet-mg/',
  },
  {
    role: 'IT Analist',
    institution: 'Projects Office - CEFET MG',
    description: "",
    socialIcon: (props: React.HTMLAttributes<SVGElement>) => (
      <HiOutlineCode {...props}/>
    ),
    linkedinUrl: 'https://www.linkedin.com/company/cefet-mg/',
  },
  {
    role: 'Marketing Analist',
    institution: 'Commit Jr. - CEFET MG',
    description: "",
    socialIcon: (props: React.HTMLAttributes<SVGElement>) => (
      <HiOutlineShare {...props}/>
    ),
    linkedinUrl: 'https://www.linkedin.com/company/commitjr/',
  },
  {
    role: 'Software Developer',
    institution: 'LeCode',
    description: "",
    socialIcon: (props: React.HTMLAttributes<SVGElement>) => (
      <HiOutlineCode {...props}/>
    ),
    linkedinUrl: 'https://www.linkedin.com/company/lecodedev/',
  },
  // More experiences...
]
  
export default function Experiences() {
  return (
    <div id="Experience" className="bg-gray-900 text-white">
      <div className="space-y-5 pt-20 pb-12 sm:space-y-4  px-14 md:px-24 lg:px-40 xl:px-40">
        <h2 className="text-3xl font-bold text-white tracking-tight">My <span className="text-light-brown">Journey</span></h2>
        <p className="text-xl text-gray-300">
          Here you can check my academic profile and professional history:
        </p>
      </div>
      <div className="mx-auto max-w-7xl">
        <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3">
          {experiences.map((experience) => (
            <li key={experience.role} className="px-14 py-6 bg-gray-800 text-center rounded-lg xl:text-left">
              <a href={experience.linkedinUrl} target="_blank" className="text-gray-400">
                <div className="space-y-6">
                  <div className="group xl:flex xl:items-center xl:justify-between space-y-4 xl:space-y-0">
                    <experience.socialIcon className="m-auto h-12 w-12 xl:m-0 xl:w-10 xl:h-10"/>
                    <div className="font-medium text-lg leading-6 xl:space-y-1 px-4">
                      <h3 className="text-white">{experience.role}</h3>
                      <p className="text-white">{experience.description}</p>
                      <p className="text-light-brown">{experience.institution}</p>
                    </div>
                    <ul role="list" className="flex justify-center space-x-5">
                      <li>
                        <span className="sr-only">LinkedIn</span>
                        <LinkedIn className="w-5 h-6 group-hover:text-light-brown transition-all duration-300"/>
                      </li>
                    </ul>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

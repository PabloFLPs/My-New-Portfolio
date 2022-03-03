/* This example requires Tailwind CSS v2.0+ */
import {ReactComponent as Twitter} from "../assets/svg/twitter.svg"
import {ReactComponent as LinkedIn} from "../assets/svg/linkedin.svg"

const experiences = [
    {
        name: 'Electrotechnician',
        role: 'CEFET MG - Campus X',
        imageUrl:
            'https://scontent.fmoc1-1.fna.fbcdn.net/v/t1.18169-9/10403722_780661018624226_3508581818034759171_n.png?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fGbJ8iFTgk8AX_IWnra&tn=dH9JSid4mB2fJQDV&_nc_ht=scontent.fmoc1-1.fna&oh=00_AT_ifKQgiq4YXuoz05ViVDtgCGr19VgNhH0CsdOYOlAvmg&oe=6246C6BD',
        twitterUrl: '#',
        linkedinUrl: 'https://www.linkedin.com/company/cefet-mg/',
    },
    {
        name: 'IT Support',
        role: 'Skill Informática',
        imageUrl:
            'https://scontent.fmoc1-1.fna.fbcdn.net/v/t1.6435-9/96407267_2857760050926474_3461922405704794112_n.png?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vnUFiMESSVIAX-Znngk&_nc_ht=scontent.fmoc1-1.fna&oh=00_AT-pJwgxDDEZ7bQsSRixykCii7BAqejVyQ2fDgsuYO2i2g&oe=6243C8CD',
        twitterUrl: '#',
        linkedinUrl: 'https://www.linkedin.com/company/skill-inform-tica/about/',
    },
    {
        name: 'Computer Engineer',
        role: 'CEFET MG - Campus II',
        imageUrl:
            'https://scontent.fmoc1-1.fna.fbcdn.net/v/t1.18169-9/10403722_780661018624226_3508581818034759171_n.png?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fGbJ8iFTgk8AX_IWnra&tn=dH9JSid4mB2fJQDV&_nc_ht=scontent.fmoc1-1.fna&oh=00_AT_ifKQgiq4YXuoz05ViVDtgCGr19VgNhH0CsdOYOlAvmg&oe=6246C6BD',
        twitterUrl: '#',
        linkedinUrl: 'https://www.linkedin.com/company/cefet-mg/',
    },
    {
        name: 'IT Analist',
        role: 'Projects Office - CEFET MG',
        imageUrl:
          'https://scontent.fmoc1-1.fna.fbcdn.net/v/t1.18169-9/10403722_780661018624226_3508581818034759171_n.png?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fGbJ8iFTgk8AX_IWnra&tn=dH9JSid4mB2fJQDV&_nc_ht=scontent.fmoc1-1.fna&oh=00_AT_ifKQgiq4YXuoz05ViVDtgCGr19VgNhH0CsdOYOlAvmg&oe=6246C6BD',
        twitterUrl: '#',
        linkedinUrl: 'https://www.linkedin.com/company/cefet-mg/',
    },
    {
        name: 'Marketing Analist',
        role: 'Commit Jr. - CEFET MG',
        imageUrl:
            'https://media-exp1.licdn.com/dms/image/C4D0BAQGlhPVJ8plnNg/company-logo_200_200/0/1618919187105?e=2159024400&v=beta&t=coihhM2AIJPpPW2EW5lUknZg7T4W5gzFb1_HVC6NdO4',
        twitterUrl: '#',
        linkedinUrl: 'https://www.linkedin.com/company/commitjr/',
    },
    {
        name: 'Software Developer',
        role: 'LeCode',
        imageUrl:
            'https://media-exp1.licdn.com/dms/image/C4D0BAQH_F_59l7gTNQ/company-logo_200_200/0/1605224873571?e=2159024400&v=beta&t=3sYGW--1DGONJFbPxEPqisioeVjNgfSFb8YSHBDzBZU',
        twitterUrl: '#',
        linkedinUrl: 'https://www.linkedin.com/company/lecodedev/',
    },
    // More experiences...
  ]
  
  export default function Experiences() {
    return (
      <div id="Experience" className="bg-gray-900 text-white">
        <div className="mx-auto py-20 px-4 max-w-7xl sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-bold text-white tracking-tight">My <span className="text-light-brown">Journey</span></h2>
              <p className="text-xl text-gray-300">
                Here you can check my academic profile and professional history:
              </p>
            </div>
            <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3">
              {experiences.map((experience) => (
                <li key={experience.name} className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
                  <div className="space-y-6 xl:space-y-10 ">
                    <img className="mx-auto h-40 w-40 rounded-full xl:w-48 xl:h-48" src={experience.imageUrl} alt="" />
                    <div className="space-y-2 xl:flex xl:items-center xl:justify-around">
                      <div className="font-medium text-lg leading-6 space-y-1">
                        <h3 className="text-white">{experience.name}</h3>
                        <p className="text-light-brown">{experience.role}</p>
                      </div>
  
                      <ul role="list" className="flex justify-center space-x-5">
                        <li>
                          <a href={experience.twitterUrl} target="_blank" className="text-gray-400 hover:text-light-brown transition-all duration-300">
                            <span className="sr-only">Twitter</span>
                            <Twitter className="w-6 h-6"/>
                          </a>
                        </li>
                        <li>
                          <a href={experience.linkedinUrl} target="_blank" className="text-gray-400 hover:text-light-brown transition-all duration-300">
                            <span className="sr-only">LinkedIn</span>
                            <LinkedIn className="w-5 h-6"/>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
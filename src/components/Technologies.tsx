import { a, div } from 'framer-motion/client';
import { DiFirebase } from 'react-icons/di';
import { 
    FaDatabase, 
    FaLaravel, 
    FaUbuntu, 
    FaGithub, 
    FaGitAlt, 
    FaGoogle , 
    FaLinux,
     FaHtml5, 
     FaReact, 
     FaPython, 
     FaCcStripe, 
     FaBootstrap, 
     FaPhp, 
     FaNodeJs,
     FaFigma        
    } from 'react-icons/fa';
import { LiaLinux } from 'react-icons/lia';
import { 
    SiTailwindcss, 
    SiAuth0, 
    SiJquery, 
    SiMysql, 
    SiReactbootstrap,
    SiRailway, 
    SiSqlalchemy, 
    SiFlask,
    SiGooglemaps ,
    SiGooglecloudstorage ,
    SiSendgrid,
    SiTwilio, 
    SiPostgresql ,
    SiFirebase ,
    SiTypescript ,
    SiJavascript
    }
    from "react-icons/si";

const Technologies: React.FC = () => {
    type TechItem = {
        name: string;
        icon: JSX.Element;
    };

    type TechCategory = {
        category: string;
        items: TechItem[];
    };

    const techstack: TechCategory [] = [
        {
            category: 'Back-End',
            items: [
                {
                    name: 'Python',
                    icon: <FaPython/>
                },
                {
                    name: 'Flask',
                    icon: <SiFlask/>
                },
                {
                    name: 'PHP',
                    icon: <FaPhp/>
                },
                {
                    name: 'NodeJs',
                    icon: <FaNodeJs/>
                },
                {
                    name: 'Laravel',
                    icon: <FaLaravel/>
                },
                
            ]
        },
        {
            category: 'Front-End',
            items: [
                {
                    name: 'TailwindCSS',
                    icon: <SiTailwindcss/>
                },
                {
                    name: 'React Bootstrap',
                    icon: <SiReactbootstrap/>
                },
                {
                   name: 'React Js',
                    icon: <FaReact/>
                },
                {
                   name: 'Javascript',
                    icon: <SiJavascript/>
                },
                
                {
                    name: 'Typescript',
                    icon: <SiTypescript/>
                },
                {
                    name: 'HTML5',
                    icon: <FaHtml5/>
                },  
                {
                   name: 'JQuery',
                    icon: <SiJquery/>
                }, 
                {
                   name: 'Bootstrap',
                    icon: <FaBootstrap/>
                },          
            ]
        },
        {
            category: 'Database',
            items: [
                {
                    name: 'SQLAlchemy',
                    icon: <SiSqlalchemy/>
                },
                {
                    name: 'Postgres',
                    icon: <SiPostgresql/>
                },
                {
                    name: 'MySQL',
                    icon: <SiMysql/>
                },
                {
                    name: 'Firebase',
                    icon: <SiFirebase/>
                },
   
            ]
        },
        {
            category: 'Tools',
            items: [
                {
                    name: 'Github',
                    icon: <FaGithub/>
                },
                {
                    name: 'Git',
                    icon: <FaGitAlt/>
                },  
                {
                    name: 'Railway',
                    icon: <SiRailway/>
                },
                {
                    name: 'Google',
                    icon: <FaGoogle/>
                },
                {
                    name: 'Google Cloud Storage',
                    icon: <SiGooglecloudstorage/>
                },
                {
                    name: 'Linux',
                    icon: <FaLinux/>
                },
               
                {
                    name: 'Ubuntu',
                    icon: <FaUbuntu/>
                },       
            ]
        },
        {
            category: 'Others',
            items: [
                {
                    name: 'Stripe',
                    icon: <FaCcStripe/>
                },
                {
                    name: 'Auth0',
                    icon: <SiAuth0/>
                },
                {
                    name: 'GoogleMap',
                    icon: <SiGooglemaps/>
                },
                {
                    name: 'Sendgrid',
                    icon: <SiSendgrid/>
                },
                {
                    name: 'Twillio',
                    icon: <SiTwilio/>
                },
   
            ]
        },
       
    ]
    
    return (
        <div className="border-t border-gray-200 sm:py-20 py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-5xl ">
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl lg:text-balance pl-3 border-l-5 border-gray-200">
                       Skills
                    </p>
                    <p className="mt-6 text-lg/ text-gray-700 pl-5">
                        I specialize in building scalable, user-friendly applications using a modern tech stack. My expertise spans front-end, back-end, databases, and DevOps tools, allowing me to deliver full-stack solutions from development to deployment. 
                        I also work with payment integrations and cloud hosting platforms to bring production-ready applications to life.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
                    <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-x-8 gap-y-16  lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        
                        {
                           techstack.map((value, index) => (
                                <div key={index} className="flex max-w-xl flex-col items-start p-4 shadow-md">
                                    <h3 className="mb-3 font-semibold text-gray-900 ">{value.category}</h3>
                                    <div className="flex max-w-xl flex-wrap gap-2 ">
                                    {
                                        value.items.map((item)=>(
                                            <button key={item.name}  className="flex  text-xs shadow items-center gap-2 rounded-full bg-gray-100 px-3 py-1  text-gray-600 hover:bg-gray-100">
                                                {item.icon} {item.name}
                                            </button>
                                        ))
                                    }
                                    </div>
                                </div>
                           ))  
                        }
                     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;

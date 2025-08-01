import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Experiences: React.FC = () => {
    const events = [
        {
        year: 'FEB 2025 - Present ',
        company: 'Coding Temple | Remote ',
        title: 'Full Stack Software Engineer Apprenticeship',
        description:
            'Developed fullstack projects utilizing React for the frontend and Flask for the backend, demonstrating application of coding principles',
        link: '#',
        },
        {
        year: 'FEB 2020 - 2025',
        company: 'PeachWiz Inc | Remote',
        title: 'Software Developer Freelance',
        description:
            'Develop and maintain websites using PHP for backend functionality and JQUERY HTML/CSS for frontend design.',
        link: '#',
        },
        {
        year: 'May 2023 - 2024',
        company: 'The Premed Consultants Inc | Remote',
        title: 'Software Developer Freelance',
        description:
            'Developed and maintained full-stack web applications to streamline student onboarding, scheduling, and course access.',
        link: '#',
        },
        {
        year: 'July 2017 - 2020',
        company: 'AcaciaSoft Corporation | On-Site Philippines',
        title: 'Software Developer Full-time',
        description:
            'Responsible for automating and streamlining the processes of software delivery, ensuring that development, testing, and deployment processes are efficient and reliable.',
        link: '#',
        },
        {
        year: 'Aug 2015 - 2017',
        company: 'Zion Praise and Music Inc | On-Site Philippines',
        title: 'Guitar Teacher Full-time',
        description:
            'Teach fundamentals from scales and chords to more advanced music theory.',
        link: '#',
        },
    ];

    return (
        <div className="border-t border-gray-200 sm:py-20 py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-5xl ">
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl lg:text-balance pl-3 border-l-5 border-gray-200">
                        My Work Experience
                    </p>
                    <p className="mt-6 text-lg/ text-gray-700 pl-5">
                        I have years of experience in web development using PHP, jQuery, MySQL, and Linux server management, and 
                        I’ve built projects such as a directory listing website, a subscription-based demo project, and an e-commerce platform 
                        with Stripe integration. Since much of my experience involved older technologies
                        I decided to enhance my skills at Coding Temple, where I gained hands-on experience in modern development practices and learned 
                        Python and React effectively.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
                    <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                        {events.map((event, index) => (
                            <div key={index} className="relative border-l border-gray-300 pl-10 gap-10 ">
                                <p className="text-sm text-gray-500 mb-1">{event.year}</p>
                                <p className="text-sm font-semibold text-gray-500 mb-2">{event.company}</p>
                                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                                <p className="text-gray-700 mb-2">{event.description}</p>
                                <a
                                    href={event.link}
                                    className="text-teal-400 flex items-center gap-1 hover:underline"
                                >
                                    Read more <ArrowRightIcon className="w-4 h-4" />
                                </a>
                            </div>
                        ))}
                            
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiences;

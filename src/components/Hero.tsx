import { motion } from 'framer-motion';

const Hero: React.FC = () => {

    return (
        <div className="relative isolate px-6 lg:px-8">
            <div  aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div
                    style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
                />
            </div>
            <div className="mx-auto max-w-5xl pt-32 pb-20 sm:py-30 lg:py-30">
                <div className="mt-10">
                    <h1 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl mb-8">
                        Frederic Tuazon
                    </h1>
                    <h1 className="text-2xl font-semibold tracking-tight text-balance text-gray-800 sm:text-3xl">
                        Software Engineer | Full Stack Developer
                    </h1>
                    <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                        I’m a passionate and adaptable software developer with years of experience building web applications. I enjoy designing scalable systems that prioritize user experience and maintainability.
                    </p>
                    <div className="mt-10 flex items-center  lg:justify-start sm:justify-center gap-x-6">
                        <button className="rounded-full cursor-pointer bg-indigo-600 px-5 py-2 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Hire Me
                        </button>
                    </div>
                </div>
            </div>
            <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
            <div
                style={{
                clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
            />
            </div>
        </div>
    );
};

export default Hero;

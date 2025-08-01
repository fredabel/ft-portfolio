
const Projects : React.FC = () =>{
	type Features = {
		name: string;
		date: string;
		description: string;
		
		link: string;
	};
  	const features: Features []= [
		{
			name: 'FT Store Ecommerce',
			date: 'June 2025',
			description: 'A responsive UI using React.js, Bootstrap, and Axios for API integration, ensuring a seamless user experience across devices.',
			link : 'https://ft-store.up.railway.app/products',
		},
		{
			name: 'Ticket Management API',
			date: 'May 2025',
			description: 'A RESTful API using Flask, SQLAlchemy, and Marshmallow to streamline service ticket tracking, status updates, and role-based access for mechanics and customers.',
			link: 'https://ct-service-ticket-production.up.railway.app/api/docs/'
		},
		{
			name: 'FakeStore E-Commerce App',
			date: 'April 2025',
			description: 'A responsive e-commerce frontend using React.js to display products, categories, and details fetched from the FakeStore API.',
			link: 'https://magical-squirrel-726913.netlify.app/products'
		},
		{
			name: 'Defeat the Evil Wizard',
			date: 'April 2025',
			description:
			'A Python-based game where players can choose from various character classes, each with unique abilities, to engage in battles against opponents.',
			link: 'https://github.com/fredabel/the-evil-wizard'
		},
		{
			name: 'Open Trivia Database Quiz App',
			date: 'March 2025',
			description: 'A React-based application that allows users to test their knowledge by answering quiz questions fetched from the Open Trivia Database API.',
			link: 'https://github.com/fredabel/ct-react-trivia-app'
		}
	]

    return (
        <div className="relative isolate border-t border-gray-200 sm:py-20 py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8" id="projects">
                <div className="mx-auto max-w-5xl ">
                    <p className="mt-2 pl-4 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl lg:text-balance border-l-5 border-gray-200">
                        My Projects
                    </p>
                <p className="mt-6 text-lg/ text-gray-700 pl-5">
                    I develop modern, scalable web applications using Python (Flask) for backend services and React with Bootstrap for building responsive and user-friendly interfaces. My projects follow REST API standards and are designed with clean, maintainable code using industry best practices, including state management, authentication/authorization, and database integration.
                </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
                    <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-x-8 gap-y-16  lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {
							features.map((feature) => (
								<div key={feature.name} className="flex max-w-xl flex-col items-start justify-between p-4 rounded shadow-md transition hover:scale-110">
									<div className="flex items-center gap-x-4 text-xs">
										<time dateTime="Mar 16, 2025" className="text-gray-500">
											{feature.date}
										</time>
										<a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
										>
											Personal
										</a>
									</div>
									<div className="group relative grow mb-2">
										<h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-indigo-600">
											<a href={feature.link} target="_blank" >
												<span className="absolute inset-0" />
												{feature.name}
											</a>
										</h3>
										<p className="mt-2 line-clamp-3 text-sm/6 text-gray-600">{feature.description}</p>
									</div>
								</div>
                        
                        	))
						}
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
				<div
					style={{
					clipPath:
						'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
					className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
				/>
            </div> 
        </div>
    )
}
export default Projects
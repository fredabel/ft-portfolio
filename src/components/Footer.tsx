import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
    const navigation = [
        { name: 'About', href: '#' },
        { name: 'Projects', href: '#' },
        { name: 'Experience', href: '#' },
        { name: 'Contact', href: '#' },
    ]
  return (
    <footer className="bg-light">
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="lg:flex lg:flex-1  lg:gap-x-12">
            <div className="flex gap-x-12 py-2 px-8 ">
                {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
        <div>
            <div className="mt-3 flex space-x-4 gap-x-3">
                <a 
                    href="https://github.com/fredabel" 
                    target="_blank" 
                    className="text-gray-500 hover:text-gray-900 transition transform hover:scale-110"
                >
                    <FaGithub className="w-6 h-6" />
                </a>
                <a 
                    href="https://www.linkedin.com/in/frederic-tuazon-58574b1a0/" 
                    target="_blank" 
                    className="text-gray-500 hover:text-blue-600 transition transform hover:scale-110"
                >
                    <FaLinkedin className="w-6 h-6" />
                </a>
                <a 
                    href="https://www.facebook.com/tuazon.fred" 
                    target="_blank" 
                    className="text-gray-500 hover:text-blue-500 transition transform hover:scale-110"
                >
                <FaFacebook className="w-6 h-6" />
                </a>
                <a 
                    href="https://www.instagram.com/fredtuazon/?hl=en" 
                    target="_blank"
                    className="text-gray-500 hover:text-pink-500 transition transform hover:scale-110"
                >
                <FaInstagram className="w-6 h-6" />
                </a>
                <a 
                    href="https://www.youtube.com/@fredtmusic" 
                    target="_blank" 
                    className="text-gray-500 hover:text-red-500 transition transform hover:scale-110"
                >
                    <FaYoutube className="w-6 h-6" />
                </a>
            </div>
        </div>
      </div>

      <div className="border-t border-gray-200  py-4 text-center text-base/4 text-gray-600">
        © {new Date().getFullYear()} Frederic Tuazon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

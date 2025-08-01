import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from "react-scroll";

const Footer: React.FC = () => {
    const navigation = [
        { name: 'About', href: 'about' },
        { name: 'Projects', href: 'projects' },
        { name: 'Experience', href: 'experience' },
        { name: 'Skills', href: 'skills' },
        { name: 'Contact', href: 'contact' },
    ]
  return (
    <footer className="mx-auto px-6 py-8 ">
        <div className="flex justify-center gap-x-5 sm:gap-x-5 lg:gap-x-10 mb-10">
            {   
                navigation.map((item) => (
                    <Link key={item.name} to={item.href} smooth={true} duration={500}  className="line-clamp-3 text-sm/6 text-gray-600 transition transform hover:scale-110 ">
                        {item.name}
                    </Link>
                ))
            }
        </div>
        <div className="flex justify-center space-x-4 gap-x-3 mb-5">
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
        <div className="py-4 text-center text-gray-600 line-clamp-3 text-sm/6 ">
            © {new Date().getFullYear()} Frederic Tuazon. All rights reserved.
        </div>
     

      
    </footer>
  );
};

export default Footer;

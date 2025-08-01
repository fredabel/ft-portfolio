// import { motion } from 'framer-motion';
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-scroll";

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navigation = [
        { name: 'About', href: 'about' },
        { name: 'Projects', href: 'projects' },
        { name: 'Experience', href: 'experience' },
        { name: 'Skills', href: 'skills' },
        { name: 'Contact', href: 'contact' },
    ]
    return (
        <div className="bg-light ">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex">
                        <a href="#" className="-m-1.5 p-1.5">
                            <img src={'./images/ft_profile.jpeg'} className="w-15 h-auto rounded-full" alt="Frederic Tuazon Profile" />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-12">
                        <nav className="lg:flex lg:gap-x-12 py-2 px-8 bg-white rounded-full shadow-md ">
                            {navigation.map((item) => (
                                <Link to={item.href} key={item.name} smooth={true} duration={500} className="cursor-pointer text-sm/6 font-semibold text-gray-900">
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <img src={'./images/ft_profile.jpeg'} className="w-15 h-auto rounded-full" alt="Frederic Tuazon Profile" />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            smooth={true} duration={500}
                                            className="cursor-pointer mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
        </div>
    );
};

export default Header;

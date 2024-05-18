import { H4, P } from '../typography';
import Image from 'next/image';
import { Home, Briefcase, User, PenTool, Mail } from 'react-feather';
import { cn } from '@repo/utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { NavigationButtons } from './navbuttons';

const navItems = [
    {
        name: 'Homepage',
        href: '/',
        icon: <Home size={20} />,
    },
    {
        name: 'Projects',
        href: '/projects',
        icon: <Briefcase size={20} />,
    },
    {
        name: 'About',
        href: '/about',
        icon: <User size={20} />,
    },
    {
        name: 'Blog',
        href: '/blog',
        icon: <PenTool size={20} />,
    },
    {
        name: 'Contact',
        href: '/contact',
        icon: <Mail size={20} />,
    },
];

const links = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/brandondkong/',
        icon: faLinkedin,
    },

    {
        name: 'Github',
        href: 'https://www.github.com/brandon-kong/',
        icon: faGithub,
    },
];

export default function Sidebar() {
    return (
        <aside className="hidden sidebar-shown:flex flex-col justify-between sticky top-0 left-0 py-10 px-4 icon-only:px-2 w-sidebar h-full">
            <div>
                <div
                    className={
                        'flex flex-col items-center justify-center w-full'
                    }
                >
                    <div className={'flex items-center justify-center'}>
                        <Image
                            src="/images/profile-picture.jpg"
                            width={100}
                            height={100}
                            alt="logo"
                            priority
                            className="w-12 h-12 icon-only:h-14 icon-only:w-14 rounded-full aspect-square"
                        />
                    </div>

                    <div
                        className={
                            'flex-col items-center justify-center mt-5 hidden icon-only:flex'
                        }
                    >
                        <H4 className="text-md font-medium">Brandon Kong</H4>
                        <H4 className="mt-1 text-sm tracking-[0] font-normal text-background-secondary-400">
                            Full-stack Developer
                        </H4>
                    </div>
                </div>

                <div
                    className={
                        'mt-8 flex-col items-center justify-center hidden icon-only:flex'
                    }
                >
                    <div
                        className={
                            'flex flex-row-reverse items-center justify-center gap-4'
                        }
                    >
                      
                    </div>
                </div>

                <NavigationButtons />
            </div>

            <div className={'flex flex-col items-center icon-only:hidden'}>
                <hr className="my-8 mx-auto w-1/2 border-t-2 border-background-secondary-900/50 block icon-only:hidden" />
                <div className={'flex-col items-center justify-center'}>
                    <div
                        className={
                            'flex flex-col items-center justify-center gap-4'
                        }
                    >
                        {links.map((link, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    aria-label="Social Media Link"
                                    rel="noreferrer"
                                    className="group w-8 h-8 rounded-full aspect-square p-1 bg-transparent transition-colors duration-300 hover:bg-background-secondary-900"
                                >
                                    <FontAwesomeIcon
                                        icon={link.icon}
                                        className="w-6 h-6 text-background-secondary-500 group-hover:text-background-secondary-50 duration-300 aspect-square"
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </aside>
    );
}

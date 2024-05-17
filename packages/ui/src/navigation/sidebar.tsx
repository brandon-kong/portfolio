'use client';

import { H4, P } from '../typography';
import Image from 'next/image';
import { Home, Briefcase, User, PenTool, Mail } from 'react-feather';
import { cn } from '@repo/utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    {
        name: 'Homepage',
        href: '/',
        icon: Home,
    },
    {
        name: 'Projects',
        href: '/projects',
        icon: Briefcase,
    },
    {
        name: 'About',
        href: '/about',
        icon: User,
    },
    {
        name: 'Blog',
        href: '/blog',
        icon: PenTool,
    },
    {
        name: 'Contact',
        href: '/contact',
        icon: Mail,
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
    const pathname = usePathname();

    return (
        <aside className="hidden sidebar-shown:flex flex-col justify-between fixed py-10 px-3 icon-only:px-6 w-sidebar h-full">
            <div>
                <div
                    className={
                        'flex flex-col items-center justify-center w-full'
                    }
                >
                    <div className={'flex items-center justify-center'}>
                        <Image
                            src="/images/profile-picture.jpg"
                            width={2000}
                            height={2000}
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

                <nav className={'h-auto w-full flex-1'}>
                    <ul className="space-y-1 mt-8 flex flex-col items-center h-full">
                        {navItems.map((item, index) => {
                            const firstPath = '/' + pathname.split('/')[1];
                            const isSelected =
                                pathname === item.href ||
                                firstPath === item.href;
                            return (
                                <li
                                    key={index}
                                    data-selected={isSelected}
                                    className="aspect-square icon-only:aspect-auto w-12 icon-only:w-full group h-auto icon-only:h-[40px] hover:bg-background-secondary-900/40 rounded-xl px-0 icon-only:px-3 transition-colors duration-300 cursor-pointer data-[selected=true]:bg-background-secondary-900"
                                >
                                    <Link
                                        href={item.href}
                                        className="h-full w-full flex items-center justify-center icon-only:justify-start gap-3"
                                    >
                                        <item.icon
                                            className={cn(
                                                'w-5 h-5 stroke-background-secondary-400',
                                                isSelected &&
                                                    'stroke-background-secondary-50',
                                            )}
                                        />

                                        <span
                                            className={cn(
                                                'font-semibold text-background-secondary-400 text-sm hidden icon-only:inline-block',
                                                isSelected &&
                                                    'text-background-secondary-50',
                                            )}
                                        >
                                            {item.name}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
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

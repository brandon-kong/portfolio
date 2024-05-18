'use client';

import { Home, Briefcase, User, PenTool, Mail } from 'react-feather';
import { usePathname } from 'next/navigation';
import { NavbarButton, SidebarButton } from '../button';
import Link from 'next/link';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@repo/utils';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '../tooltip';

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

export function FooterNavigationButtonContainer(): JSX.Element {
    return (
        <TooltipProvider>
            <FooterNavigationButtons />
        </TooltipProvider>
    );
}

export function FooterNavigationButtons(): JSX.Element {
    const pathname = usePathname();

    return (
        <nav className={'h-auto w-full flex-1'}>
            <ul className="mt-8 flex flex-col items-center h-full gap-1 px-2">
                {navItems.map((item, index) => {
                    const firstPath = '/' + pathname.split('/')[1];
                    const isSelected =
                        pathname === item.href || firstPath === item.href;
                    return (
                        <li
                            key={index}
                            className="aspect-square icon-only:aspect-auto icon-only:w-full cursor-pointer"
                        >
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger asChild>
                                    <SidebarButton
                                        active={isSelected}
                                        icon={item.icon}
                                        label={item.name}
                                        href={item.href}
                                    />
                                </TooltipTrigger>
                                <TooltipContent
                                    className={'icon-only:hidden'}
                                    side={'right'}
                                >
                                    {item.name}
                                </TooltipContent>
                            </Tooltip>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export function NavbarNavigationButtons(): JSX.Element {
    const pathname = usePathname();

    return (
        <nav className={'h-auto w-full flex-1 pt-4'}>
            <ul className="flex flex-col items-center h-full gap-1 px-2">
                {navItems.map((item, index) => {
                    const firstPath = '/' + pathname.split('/')[1];
                    const isSelected =
                        pathname === item.href || firstPath === item.href;
                    return (
                        <li key={index} className="w-full cursor-pointer">
                            <NavbarButton
                                active={isSelected}
                                icon={item.icon}
                                label={item.name}
                                href={item.href}
                            />
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export type SocialLinkProps = {
    vertical?: boolean;
};

export function SocialLinks({
    vertical = false,
}: SocialLinkProps): JSX.Element {
    return (
        <div
            className={cn(
                'flex items-center justify-center gap-4',
                vertical ? 'flex-col' : 'flex-row',
            )}
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
    );
}

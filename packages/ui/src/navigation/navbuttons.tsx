'use client';

import { Home, Briefcase, User, PenTool, Mail } from 'react-feather';
import { usePathname } from 'next/navigation';
import { SidebarButton } from '../button';

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

export function NavigationButtons (): JSX.Element {

    const pathname = usePathname();

    return (
        <nav className={'h-auto w-full flex-1'}>
            <ul className="mt-8 flex flex-col items-center h-full gap-1 px-2">
                {navItems.map((item, index) => {
                    const firstPath = '/' + pathname.split('/')[1];
                    const isSelected =
                        pathname === item.href ||
                        firstPath === item.href;
                    return (
                        <li
                            key={index}
                            className="aspect-square icon-only:aspect-auto icon-only:w-full cursor-pointer"
                        >
                            <SidebarButton
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
    )
}
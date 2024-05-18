'use client';

import { useState } from 'react';
import { H4, P } from '../../typography';
import Image from 'next/image';
import { Home, Briefcase, User, PenTool, Mail, Menu } from 'react-feather';
import { cn } from '@repo/utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';
import { NavbarNavigationButtons, SocialLinks } from '../navbuttons';
import { Role } from './components';

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

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className={'flex-col flex sidebar-shown:hidden relative'}>
            <aside className="z-[100] bg-background flex flex-row justify-center fixed py-3 px-6 icon-only:px-6 w-full h-navbar">
                <Role />

                <div className={'h-full items-center justify-center flex'}>
                    <button
                        onClick={() => setOpen(!open)}
                        className={
                            'group cursor-pointer flex items-center justify-center rounded-xl w-10 h-10 p-1 bg-transparent transition-colors duration-300 hover:bg-background-secondary-900'
                        }
                    >
                        <Menu className="w-6 h-6 stroke-accent-foreground" />
                    </button>
                </div>
            </aside>

            <motion.div
                initial={{ opacity: 0, visibility: 'hidden' }}
                animate={{
                    opacity: open ? 1 : 0,
                    visibility: open ? 'visible' : 'hidden',
                }}
                exit={{ opacity: 0, visibility: 'hidden' }}
                transition={{
                    opacity: { duration: 0.2 },
                    visibility: { delay: open ? 0 : 0.2 },
                }}
                className={
                    'fixed top-0 left-0 w-full h-full bg-background/50 z-[99]'
                }
                onClick={() => setOpen(false)}
            >
                <div
                    className={
                        'flex-col items-center justify-center flex bg-background px-6 pb-4 pt-navbar pointer-events-auto'
                    }
                >
                    <NavbarNavigationButtons />

                    <hr className="mx-auto w-full border-t-2 my-4" />

                    <SocialLinks />
                </div>
            </motion.div>
        </div>
    );
}

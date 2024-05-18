import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@repo/utils';

import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { P } from './typography';

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default:
                    'bg-primary text-primary-foreground hover:bg-primary/90',
                destructive:
                    'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                outline:
                    'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                secondary:
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant, size, className, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = 'Button';

export interface SidebarButtonProps extends ButtonProps {
    active?: boolean;
    icon: React.JSX.Element;
    href?: string;
    label: string;
}

const SidebarButton = React.forwardRef<HTMLButtonElement, SidebarButtonProps>(
    ({ active, icon, href, label, ...props }, ref) => {
        return (
            <Link
                href={href || '#'}
                aria-selected={active}
                className={'rounded-md'}
            >
                <Button
                    tabIndex={-1}
                    variant={'ghost'}
                    className={cn(
                        'p-2 icon-only:px-6 h-12 flex items-center justify-center icon-only:justify-start gap-4 w-full sidebar-shown:aspect-square',
                        active && 'text-primary bg-accent hover:bg-accent/90',
                        !active && 'text-accent-foreground/60',
                    )}
                    {...props}
                    ref={ref}
                >
                    {icon}
                    <P className={'hidden icon-only:inline-block'}>{label}</P>
                </Button>
            </Link>
        );
    },
);

export interface NavbarButtonProps extends ButtonProps {
    active?: boolean;
    icon: React.JSX.Element;
    href?: string;
    label: string;
}

const NavbarButton = React.forwardRef<HTMLButtonElement, SidebarButtonProps>(
    ({ active, icon, href, label, ...props }, ref) => {
        return (
            <Link
                href={href || '#'}
                aria-selected={active}
                className={'rounded-md w-full'}
            >
                <Button
                    tabIndex={-1}
                    variant={'ghost'}
                    className={cn(
                        'p-2 px-6 h-12 flex items-center justify-start gap-4 w-full',
                        active && 'text-primary bg-accent hover:bg-accent/90',
                        !active && 'text-accent-foreground/60',
                    )}
                    {...props}
                    ref={ref}
                >
                    {icon}
                    <P>{label}</P>
                </Button>
            </Link>
        );
    },
);

export { Button, buttonVariants, SidebarButton, NavbarButton };

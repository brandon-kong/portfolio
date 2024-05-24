import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

import { H1, H2, H3, P } from '../typography';
import { cn } from '@repo/utils';
import { Button } from '../button';

import { Clipboard } from 'react-feather';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export default function MDXComponents(
    components: MDXComponents,
): MDXComponents {
    return {
        // Allows customizing built-in components, e.g. to add styling.
        h1: ({ children, ...rest }) => (
            <H1 className={'mb-4'} {...rest}>
                {children}
            </H1>
        ),
        h2: ({ children, ...rest }) => (
            <H2 className={'my-2'} {...rest}>
                {children}
            </H2>
        ),
        h3: ({ children }) => <H3>{children}</H3>,
        p: ({ children }) => (
            <P className={'text-accent-foreground'}>{children}</P>
        ),
        ul: ({ children }) => (
            <ul className={'list-disc list-inside text-accent-foreground'}>
                {children}
            </ul>
        ),

        code: (props) => {
            const { className, children } = props;

            return (
                <div className={'relative group'}>
                    <Button
                        size={'icon'}
                        variant={'secondary'}
                        className={
                            'absolute top-2 right-2 hidden sidebar-shown:flex transition-opacity opacity-0 group-hover:opacity-100'
                        }
                    >
                        <Clipboard size={16} />
                    </Button>
                    <pre
                        className={cn(
                            className,
                            'font-code p-6 bg-accent rounded-lg text-accent-foreground text-sm',
                        )}
                    >
                        {children}
                    </pre>
                </div>
            );
        },

        img: (props) => {
            const { src, className, style, ...rest } = props;

            if (typeof src !== 'string') {
                return null;
            }
            const url = 'https://' + src.replace('//', '');

            return (
                <Image
                    src={url}
                    width={1000}
                    height={600}
                    className={cn(
                        className,
                        'w-full rounded-lg block max-h-[600px] h-auto relative my-4',
                    )}
                    {...(rest as any)}
                />
            );
        },
        ...components,
    };
}

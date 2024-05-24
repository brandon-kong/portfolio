import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

import { H1, H2, H3 } from '../typography';
import { cn } from '@repo/utils';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export default function MDXComponents(
    components: MDXComponents,
): MDXComponents {
    return {
        // Allows customizing built-in components, e.g. to add styling.
        h1: ({ children }) => <H1>{children}</H1>,
        h2: ({ children }) => <H2>{children}</H2>,
        h3: ({ children }) => <H3>{children}</H3>,
        img: (props) => (
            <Image
                sizes="100vw"
                fill
                className={cn(props.className, 'rounded-lg')}
                {...(props as ImageProps)}
            />
        ),
        ...components,
    };
}

import '@repo/ui/syntax-highlighter';

import { H2, P } from '@repo/ui/typography';
import { fetchBlogPostWithSlug } from '@repo/utils/contentful';

import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

import { MDXRemote } from 'next-mdx-remote/rsc';

import { notFound } from 'next/navigation';
import { Button } from '@repo/ui/button';
import Image from 'next/image';

import React from 'react';

import { ChevronLeft } from 'react-feather';
import Link from 'next/link';

import readingTime from 'reading-time';

import { Metadata } from 'next';
import MDXComponents from '@repo/ui/blog/components';
import { BackCard } from '@repo/ui/card';

type ProjectProps = {
    params: {
        slug: string;
    };
};

type Props = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

const options = {
    mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeHighlight as any],
    },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const fromContentful = await fetchBlogPostWithSlug(params.slug);

    if (!fromContentful) {
        notFound();
    }

    return {
        title: fromContentful.fields.title + ' | Brandon Kong',
        description: fromContentful.fields.description as string,
    };
}

export default async function Blog({
    params: { slug },
}: ProjectProps): Promise<JSX.Element> {
    const blog = await fetchBlogPostWithSlug(slug);

    if (!blog) {
        notFound();
    }

    const image =
        'https://' +
        (blog.fields.images as any)[0].fields.file.url.replace('//', '');

    const updateDate = new Date(blog.sys.updatedAt).toLocaleDateString(
        undefined,
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        },
    );

    const { text: timeToRead } = readingTime(blog.fields.content);

    return (
        <div className={'space-y-20'}>
            <BackCard href={'/blog'} />

            <div className={'flex flex-col gap-6'}>
                <P className={'text-accent-foreground text-lg uppercase'}>
                    {blog.fields.category}
                </P>
                <H2> {blog.fields.title}</H2>
                <P className={'text-accent-foreground text-lg'}>
                    {blog.fields.description}
                </P>
                <div className={'flex flex-col justify-start'}>
                    <Link
                        target={'_blank'}
                        href={(blog.fields.author as any).fields.website}
                        className={'w-fit'}
                    >
                        <Button className={'p-0 w-fit'} variant={'link'}>
                            {(blog.fields.author as any).fields.name}
                        </Button>
                    </Link>

                    <div className={'text-sm text-accent-foreground/80'}>
                        {updateDate} • {timeToRead}
                    </div>
                </div>
            </div>

            <Image
                src={image}
                alt={blog.fields.title}
                width={1000}
                height={1000}
                priority
                sizes={'1000px'}
                className={
                    'h-auto shadow-md rounded-lg w-full max-h-[500px] object-cover'
                }
            />

            <div className={'w-full flex flex-col gap-8 relative'}>
                <MDXRemote
                    source={blog.fields.content}
                    components={MDXComponents({})}
                    options={options}
                />
            </div>
        </div>
    );
}

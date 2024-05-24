import { H2, P } from '@repo/ui/typography';
import { fetchBlogPostWithSlug } from '@repo/utils/contentful';

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

type ProjectProps = {
    params: {
        slug: string;
    };
};

type Props = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const fromContentful = await fetchBlogPostWithSlug(params.slug);

    if (!fromContentful) {
        notFound();
    }

    return {
        title: fromContentful.fields.title + " | Brandon's Blog",
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
            <div className={'flex gap-6 pb-6 border-b border-accent'}>
                <div
                    className={
                        'transition-colors duration-300 flex gap-4 items-center text-accent-foreground hover:text-foreground cursor-pointer'
                    }
                >
                    <ChevronLeft size={20} />

                    <P className={'text-sm'}>
                        <Link href={'/blog'}>Back to list</Link>
                    </P>
                </div>
            </div>

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
                height={500}
                className={'rounded-lg w-full max-h-[500px] object-cover'}
            />

            <div className={'w-full space-y-8'}>
                <MDXRemote
                    source={blog.fields.content}
                    components={MDXComponents}
                />
            </div>
        </div>
    );
}

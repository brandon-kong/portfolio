import { H2, P } from '@repo/ui/typography';
import {
    fetchBlogPostWithSlug,
    fetchProjectWithSlug,
} from '@repo/utils/contentful';

import { notFound } from 'next/navigation';
import { Button } from '@repo/ui/button';
import Image from 'next/image';

import {
    BackgroundProjectCard,
    TestimonialCard,
    ToolsCard,
} from '@repo/ui/project-cards';
import React from 'react';

import { ChevronLeft } from 'react-feather';
import Link from 'next/link';

type ProjectProps = {
    params: {
        slug: string;
    };
};
export default async function Blog({
    params: { slug },
}: ProjectProps): Promise<JSX.Element> {
    const blog = await fetchBlogPostWithSlug(slug);

    if (!blog) {
        notFound();
    }

    const image =
        'https://' +
        (blog.fields.featuredImage as any).fields.file.url.replace('//', '');

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
                <div className={'flex gap-4 mt-6'}>
                    <Button size={'lg'} variant={'secondary'}>
                        View source
                    </Button>
                    <Button size={'lg'}>View Live</Button>
                </div>
            </div>

            <Image
                src={image}
                alt={blog.fields.title}
                width={1000}
                height={500}
                className={'rounded-lg w-full'}
            />

            <BackgroundProjectCard background={blog.fields.description} />
        </div>
    );
}

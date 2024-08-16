import { H2, P } from '@repo/ui/typography';
import { fetchProjectWithSlug } from '@repo/utils/contentful';

import { notFound } from 'next/navigation';
import { Button } from '@repo/ui/button';
import Image from 'next/image';

import {
    BackgroundProjectCard,
    TestimonialCard,
    ToolsCard,
} from '@repo/ui/project-cards';
import React from 'react';

import Link from 'next/link';
import { BackCard } from '@repo/ui/card';
import { Metadata } from 'next';

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
    const fromContentful = await fetchProjectWithSlug(params.slug);

    if (!fromContentful) {
        notFound();
    }

    return {
        title: fromContentful.fields.title + ': Brandon Kong',
        description: fromContentful.fields.description as string,
    };
}

export default async function Project({
    params: { slug },
}: ProjectProps): Promise<JSX.Element> {
    const project = await fetchProjectWithSlug(slug);

    if (!project) {
        notFound();
    }

    const image =
        'https://' +
        (project.fields.coverImage as any).fields.file.url.replace('//', '');

    return (
        <div className={'space-y-20'}>
            <BackCard href={'/projects'} />

            <div className={'flex flex-col gap-6'}>
                <H2> {project.fields.title}</H2>
                <P className={'text-accent-foreground text-lg'}>
                    {project.fields.description}
                </P>

                {(project.fields.source || project.fields.liveDemo) && (
                    <div className={'flex gap-4 mt-6'}>
                        {project.fields.source && (
                            <Link
                                target={'_blank'}
                                href={project.fields.source}
                            >
                                <Button size={'lg'} variant={'secondary'}>
                                    View source
                                </Button>
                            </Link>
                        )}

                        {project.fields.liveDemo && (
                            <Link
                                target={'_blank'}
                                href={project.fields.liveDemo}
                            >
                                <Button size={'lg'} variant={'secondary'}>
                                    View source
                                </Button>
                            </Link>
                        )}
                    </div>
                )}
            </div>

            <Image
                src={image}
                alt={project.fields.title}
                width={1000}
                height={500}
                className={
                    'rounded-lg w-full h-auto max-h-[500px] object-cover shadow-md'
                }
            />

            {project.fields.background && (
                <React.Fragment>
                    <BackgroundProjectCard
                        background={project.fields.background}
                    />
                </React.Fragment>
            )}

            {project.fields.goals && (
                <React.Fragment>
                    <hr />
                    <ToolsCard skills={project.fields.tools as any} />
                </React.Fragment>
            )}
            

            {project.fields.tools && (
                <React.Fragment>
                    <hr />
                    <ToolsCard skills={project.fields.tools as any} />
                </React.Fragment>
            )}

            {project.fields.testimonial && (
                <React.Fragment>
                    <hr />
                    <TestimonialCard testimonial={project.fields.testimonial} />
                </React.Fragment>
            )}

            {project.fields.conclusion && (
                <React.Fragment>
                    <hr />
                    <BackgroundProjectCard
                        title={'Conclusion'}
                        background={project.fields.conclusion as any}
                    />
                </React.Fragment>
            )}
        </div>
    );
}

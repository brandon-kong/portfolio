import { H2, P } from '@repo/ui/typography';
import { BlogsContainer } from '@repo/ui/containers';
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

type ProjectProps = {
    params: {
        slug: string;
    };
};
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
            <div className={'flex flex-col gap-6'}>
                <H2> {project.fields.title}</H2>
                <P className={'text-accent-foreground text-lg'}>
                    {project.fields.description}
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
                alt={project.fields.title}
                width={1000}
                height={500}
                className={'rounded-lg w-full'}
            />

            <BackgroundProjectCard background={project.fields.background} />

            <hr />

            {project.fields.tools && (
                <React.Fragment>
                    <ToolsCard skills={project.fields.tools as any} />
                    <hr />
                </React.Fragment>
            )}

            {project.fields.testimonial && (
                <React.Fragment>
                    <TestimonialCard testimonial={project.fields.testimonial} />
                </React.Fragment>
            )}

            <BackgroundProjectCard
                title={'Conclusion'}
                background={project.fields.conclusion as any}
            />
        </div>
    );
}

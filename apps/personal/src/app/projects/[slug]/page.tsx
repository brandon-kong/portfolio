import { H2, P } from '@repo/ui/typography';
import { BlogsContainer } from '@repo/ui/containers';
import { fetchProjectWithSlug } from '@repo/utils/contentful';

import { notFound } from 'next/navigation';
import { Button } from '@repo/ui/button';

type ProjectProps = {
    params: {
        slug: string;
    };
};
export default async function Project({
    params: { slug },
}: ProjectProps): JSX.Element {
    const project = await fetchProjectWithSlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className={'space-y-20'}>
            <div className={'flex flex-col gap-6'}>
                <H2> {project.fields.title}</H2>
                <P className={'text-accent-foreground text-lg'}>
                    {project.fields.background}
                </P>
                <div className={'flex gap-4 mt-6'}>
                    <Button size={'lg'} variant={'secondary'}>
                        View source
                    </Button>
                    <Button size={'lg'}>View Live</Button>
                </div>
            </div>

            <BlogsContainer noTitle />
        </div>
    );
}

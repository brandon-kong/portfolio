import { H2, P } from '@repo/ui/typography';
import { LocationCard } from '@repo/ui/card';
import { ProjectsContainer, BlogsContainer } from '@repo/ui/containers';
import { Button } from '@repo/ui/button';

export default function Home(): JSX.Element {
    return (
        <div className={'space-y-20'}>
            <div className={'space-y-10'}>
                <div className={'space-y-2'}>
                    <H2>Hello! I&apos;m Brandon,</H2>
                    <H2 className={'text-accent-foreground'}>
                        and I code way too much.
                    </H2>
                </div>

                <LocationCard />

                <div>
                    <P className={'text-accent-foreground text-lg'}>
                        I’m a software engineer with a passion for building
                        products that make a difference. I’m currently working
                        as a research assistant at DePaul University, where I’m
                        working in Bioinformatics and Computational Biology in
                        the context of brainstem nuclei boundary classification.
                    </P>
                </div>

                <div className={'flex items-center gap-4'}>
                    <Button variant={'secondary'} size={'lg'}>
                        About Me
                    </Button>
                    <Button variant={'outline'} size={'lg'}>
                        Projects
                    </Button>
                </div>
            </div>

            <ProjectsContainer title="Selected Work" limit={4} />

            <BlogsContainer title="Selected Writings" limit={4} />
        </div>
    );
}

import { H2, P } from '@repo/ui/typography';
import { LocationCard } from '@repo/ui/card';
import { ProjectsContainer, BlogsContainer } from '@repo/ui/containers';
import { Button } from '@repo/ui/button';
import Link from 'next/link';
import { Metadata } from 'next';
import { FadeIn } from '@repo/ui/fade-in';

export const metadata: Metadata = {
    title: 'Brandon Kong',
    description:
        'Brandon Kong is a software engineer with a passion for building products that make a difference.',
};

export default function Home(): JSX.Element {
    return (
        <div className={'space-y-20'}>
            <div className={'space-y-10'}>
                <FadeIn>
                    <div className={'space-y-2'}>
                        <H2>Hello! I&apos;m Brandon,</H2>
                        <H2 className={'text-accent-foreground'}>
                            and I code way too much.
                        </H2>
                    </div>
                </FadeIn>

                <FadeIn>
                    <LocationCard />
                </FadeIn>

                <FadeIn>
                    <div>
                        <P className={'text-accent-foreground text-lg'}>
                            I’m a software engineer with a passion for building
                            products that make a difference. I’m currently
                            working as a research assistant at DePaul
                            University, where I’m working in Bioinformatics and
                            Computational Biology in the context of brainstem
                            nuclei boundary classification.
                        </P>
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className={'flex items-center gap-4'}>
                        <Link href={'/about'}>
                            <Button variant={'secondary'} size={'lg'}>
                                About Me
                            </Button>
                        </Link>
                        <Link href={'/projects'}>
                            <Button variant={'outline'} size={'lg'}>
                                Projects
                            </Button>
                        </Link>
                    </div>
                </FadeIn>
            </div>

            <FadeIn>
                <ProjectsContainer title="Selected Work" limit={4} />
            </FadeIn>

            <FadeIn>
                <BlogsContainer title="Blog" limit={4} />
            </FadeIn>
        </div>
    );
}

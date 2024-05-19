import { H2, P } from '@repo/ui/typography';
import { ProjectsContainer } from '@repo/ui/containers';

export default function Projects(): JSX.Element {
    return (
        <div className={'space-y-20'}>
            <div className={'space-y-6'}>
                <H2>Projects</H2>
                <P className={'text-accent-foreground text-lg'}>
                    A showcase of my work, research, and personal projects.
                </P>
            </div>

            <ProjectsContainer noTitle />
        </div>
    );
}

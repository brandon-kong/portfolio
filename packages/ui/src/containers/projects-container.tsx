import { fetchProjects } from '@repo/utils/contentful';
import ProjectCard from '../cards/project';
import { H3 } from '../typography';
import { Button } from '../button';

type ProjectsContainerProps = {
    noTitle?: boolean;
    title?: string;
    limit?: number;
};

export default async function ProjectsContainer({
    noTitle = false,
    title = 'Projects',
    limit = -1,
}: ProjectsContainerProps) {
    let projects = await fetchProjects();

    if (limit > 0) {
        projects = projects.slice(0, limit);
    }

    return (
        <div className={'space-y-8'}>
            <div className={'space-y-2'}>
                {limit > 0 && (
                    <Button
                        variant={'link'}
                        className={'p-0 text-accent-foreground h-fit'}
                    >
                        View All
                    </Button>
                )}
                {!noTitle && <H3>{title}</H3>}
            </div>

            <ul className={'grid grid-cols-1 sidebar-shown:grid-cols-2 gap-8'}>
                {projects.map((project, index) => (
                    <li key={index}>
                        <ProjectCard project={project} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

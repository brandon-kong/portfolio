import { ProjectEntrySkeleton, TypeProject } from '../../types/project';
import { cfClient } from './cf-client';

export const fetchProjects = async (): Promise<TypeProject[]> => {
    const entries = await cfClient.getEntries<ProjectEntrySkeleton>({
        content_type: 'project',
    });
    return entries.items;
};

export const fetchProjectWithSlug = async (
    slug: string,
): Promise<TypeProject> => {
    const entries = (await cfClient.getEntries({
        content_type: 'project',
        'fields.slug': slug,
    })) as any;

    return entries.items[0] as TypeProject;
};

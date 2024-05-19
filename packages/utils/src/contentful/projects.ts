import { ProjectEntrySkeleton, TypeProject } from '../../types/project';
import { cfClient } from './cf-client';

export const fetchProjects = async (): Promise<TypeProject[]> => {
    const entries = await cfClient.getEntries<ProjectEntrySkeleton>({
        content_type: 'project',
    });
    return entries.items;
};

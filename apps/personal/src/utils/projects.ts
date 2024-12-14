'use server';

import { TypeProject } from '@repo/utils/types';

export async function getProjects() {
    const response = await fetch('/api/projects');
    const projects: TypeProject[] = await response.json();

    return projects;
}

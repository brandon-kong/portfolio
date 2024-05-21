import { fetchProjects } from '@repo/utils/contentful';

export async function GET() {
    const projects = await fetchProjects();
    return new Response(JSON.stringify(projects), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

import { fetchBlogPosts } from '@repo/utils/contentful';

export async function GET() {
    const projects = await fetchBlogPosts();
    return new Response(JSON.stringify(projects), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

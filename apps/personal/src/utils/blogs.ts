'use server';

import { TypeBlogPost } from '@repo/utils/types';

export async function getBlogPosts() {
    const response = await fetch('/api/blogs');
    const projects: TypeBlogPost[] = await response.json();

    return projects;
}

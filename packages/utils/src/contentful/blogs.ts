'use server';

import { BlogPostEntrySkeleton, TypeBlogPost } from '../../types/blog';
import { cfClient } from './cf-client';

export const fetchBlogPosts = async (): Promise<TypeBlogPost[]> => {
    const entries = await cfClient.getEntries<BlogPostEntrySkeleton>({
        content_type: 'blogPost',
    });
    return entries.items;
};

export const fetchBlogPostWithSlug = async (
    slug: string,
): Promise<TypeBlogPost> => {
    const entries = (await cfClient.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug,
    })) as any;

    return entries.items[0] as TypeBlogPost;
};

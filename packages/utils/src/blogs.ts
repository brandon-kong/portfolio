import { BlogPostEntrySkeleton, TypeBlogPost } from '../types/blog';
import { cfClient } from './cf-client';

export const fetchBlogPosts = async (): Promise<TypeBlogPost[]> => {
    const entries = await cfClient.getEntries<BlogPostEntrySkeleton>({
        content_type: 'blogPost',
    });
    return entries.items;
};

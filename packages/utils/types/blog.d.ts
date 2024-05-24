import type { Asset, Entry, EntryFields, EntrySkeletonType } from 'contentful';
import type { TypeAuthor } from './author';

export interface TypeBlogPostFields {
    fields: {
        title: EntryFields.Symbol;
        author: TypeAuthor;
        description: EntryFields.Symbol;
        images: Asset[];
        category: 'Blog' | 'Case study' | 'Research' | 'Tutorial';
        slug: EntryFields.Symbol;
        content: EntryFields.Text;
        tags?: EntryFields.Symbol[];
    };
}

export type BlogPostEntrySkeleton = {
    contentTypeId: 'blogPost';
    fields: TypeBlogPostFields['fields'];
};

export type TypeBlogPost = Entry<BlogPostEntrySkeleton, undefined, string>;

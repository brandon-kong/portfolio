import type { Asset, Entry, EntryFields, EntrySkeletonType } from 'contentful';

export interface TypeBlogPostFields {
    fields: {
        title: EntryFields.Symbol;
        author: EntryFields.Symbol;
        authorWebsite: EntryFields.Symbol;
        description: EntryFields.Symbol;
        featuredImage: Asset;
        category: 'Blog' | 'Case study' | 'Research' | 'Tutorial';
        slug: EntryFields.Symbol;
        content: EntryFields.Text;
        published: EntryFields.Boolean;
        publishDate: EntryFields.Date;
        tags?: EntryFields.Symbol[];
    };
}

export type BlogPostEntrySkeleton = {
    contentTypeId: 'blogPost';
    fields: TypeBlogPostFields['fields'];
};

export type TypeBlogPost = Entry<BlogPostEntrySkeleton, undefined, string>;

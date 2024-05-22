import type { Asset, Entry, EntryFields, EntrySkeletonType } from 'contentful';
import type { TypeAuthor } from './author';

export interface TypeTestimonialFields {
    fields: {
        content: EntryFields.Text;
        author: TypeAuthor;
    };
}

export type TestimonialEntrySkeleton = {
    contentTypeId: 'testimonial';
    fields: TypeTestimonialFields['fields'];
};

export type TypeTestimonial = Entry<
    TestimonialEntrySkeleton,
    undefined,
    'project'
>;

import type { Asset, Entry, EntryFields, EntrySkeletonType } from 'contentful';

export interface TypeProjectFields {
    fields: {
        title: EntryFields.Symbol;
        background: string;
        coverImage: Asset;
        goals?: EntryFields.Object;
        solutions?: EntryFields.Object;
        slug: EntryFields.Symbol;
    };
}

export type ProjectEntrySkeleton = {
    contentTypeId: 'project';
    fields: TypeProjectFields['fields'];
};

export type TypeProject = Entry<ProjectEntrySkeleton, undefined, string>;

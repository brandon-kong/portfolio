import type { Asset, Entry, EntryFields, EntrySkeletonType } from 'contentful';
import type { TypeSkill } from './skill';

export interface TypeAuthorFields {
    fields: {
        name: EntryFields.Symbol;
        title: EntryFields.Symbol;
        website: EntryFields.Symbol;
    };
}

export type AuthorEntrySkeleton = {
    contentTypeId: 'author';
    fields: TypeAuthorFields['fields'];
};

export type TypeAuthor = Entry<AuthorEntrySkeleton, undefined, 'project'>;

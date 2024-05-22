import type { Asset, Entry, EntryFields, EntrySkeletonType } from 'contentful';
import type { TypeSkill } from './skill';

export interface TypeProjectFields {
    fields: {
        title: EntryFields.Symbol;
        description: EntryFields.Text;
        background: EntryFields.Text;
        coverImage: Asset;
        tools?: TypeSkill[];
        goals?: EntryFields.Object;
        solutions?: EntryFields.Object;
        slug: EntryFields.Symbol;
        conclusion?: EntryFields.Text;
    };
}

export type ProjectEntrySkeleton = {
    contentTypeId: 'project';
    fields: TypeProjectFields['fields'];
};

export type TypeProject = Entry<ProjectEntrySkeleton, undefined, 'project'>;

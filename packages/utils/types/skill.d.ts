import type { Asset, Entry, EntryFields, EntrySkeletonType } from 'contentful';

export interface TypeSkillFields {
    fields: {
        name: EntryFields.Symbol;
        type: EntryFields.Symbol;
        image?: Asset;
    };
}

export type SkillEntrySkeleton = {
    contentTypeId: 'skill';
    fields: TypeSkillFields['fields'];
};

export type TypeSkill = Entry<SkillEntrySkeleton, undefined, string>;

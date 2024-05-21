import type { Asset, Entry, EntryFields, EntrySkeletonType } from 'contentful';

export interface TypeEducationFields {
    fields: {
        degree: EntryFields.Symbol;
        major: EntryFields.Symbol;
        company: Entry<TypeCompanyFields>;
        dateStarted: EntryFields.Date;
        graduationDate: EntryFields.Date;
        background: EntryFields.Text;
    };
}

export type EducationEntrySkeleton = {
    contentTypeId: 'education';
    fields: TypeEducationFields['fields'];
};

export type TypeEducation = Entry<EducationEntrySkeleton, undefined, string>;

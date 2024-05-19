import type { Asset, Entry, EntryFields, EntrySkeletonType } from 'contentful';
import type { TypeCompanyFields } from './company';

export interface TypeExperienceFields {
    fields: {
        role: EntryFields.Symbol;
        company: Entry<TypeCompanyFields>;
        background: EntryFields.Text;
        dateStarted: EntryFields.Date;
        dateEnded?: EntryFields.Date;
        currentPosition: EntryFields.Boolean;
    };
}

export type ExperienceEntrySkeleton = {
    contentTypeId: 'experience';
    fields: TypeExperienceFields['fields'];
};

export type TypeExperience = Entry<ExperienceEntrySkeleton, undefined, string>;

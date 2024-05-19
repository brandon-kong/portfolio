import type { Asset, Entry, EntryFields, EntrySkeletonType } from 'contentful';

export interface TypeCompanyFields {
    fields: {
        name: EntryFields.Symbol;
        logo: Asset;
    };
}

export type CompanyEntrySkeleton = {
    contentTypeId: 'company';
    fields: TypeCompanyFields['fields'];
};

export type TypeCompany = Entry<CompanyEntrySkeleton, undefined, string>;

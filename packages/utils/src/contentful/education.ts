import { EducationEntrySkeleton, TypeEducation } from '../../types/education';
import { cfClient } from './cf-client';

export const fetchEducations = async (): Promise<TypeEducation[]> => {
    const entries = await cfClient.getEntries<EducationEntrySkeleton>({
        content_type: 'education',
    });
    return entries.items;
};

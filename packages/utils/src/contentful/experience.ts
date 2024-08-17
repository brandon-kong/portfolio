'use server';

import {
    ExperienceEntrySkeleton,
    TypeExperience,
} from '../../types/experience';
import { cfClient } from './cf-client';

export const fetchExperiences = async (): Promise<TypeExperience[]> => {
    const entries = await cfClient.getEntries<ExperienceEntrySkeleton>({
        content_type: 'experience',
        order: ['-sys.id'],
    });
    return entries.items;
};

import { SkillEntrySkeleton, TypeSkill } from '../../types/skill';
import { cfClient } from './cf-client';

export const fetchSkills = async (): Promise<TypeSkill[]> => {
    const entries = await cfClient.getEntries<SkillEntrySkeleton>({
        content_type: 'skill',
    });
    return entries.items;
};

import { SkillEntrySkeleton, TypeSkill } from '../../types/skill';
import { cfClient } from './cf-client';

const order = ['Programming Language', 'Tool', 'Database', 'Framework'];

export const fetchSkills = async (): Promise<TypeSkill[]> => {
    const entries = await cfClient.getEntries<SkillEntrySkeleton>({
        content_type: 'skill',
    });

    const ordered = entries.items.sort((a, b) => {
        return order.indexOf(a.fields.type) - order.indexOf(b.fields.type);
    });

    return ordered;
};

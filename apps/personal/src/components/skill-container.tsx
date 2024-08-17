'use client';

import { SkillsContainer } from '@repo/ui/containers';
import { TypeSkill } from '@repo/utils/types';

type SkillContainerProps = {
    skills: TypeSkill[];
};

export default function SkillContainerClient({ skills }: SkillContainerProps) {
    return <SkillsContainer skills={skills} />;
}

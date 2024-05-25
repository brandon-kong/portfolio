import React from 'react';
import { fetchSkills } from '@repo/utils/contentful';
import { H3 } from '../typography';
import { SkillCard } from '../cards';

const isBottomLeft = (list: any[], index: number) => {
    const total = list.length;
    if (total % 2 === 0) {
        return index === total - 2;
    } else {
        return index === total - 1;
    }
};

const isBottomRight = (list: any[], index: number) => {
    const total = list.length;
    if (total % 2 === 0) {
        return index === total - 1;
    } else {
        return index === total - 1 || index === total - 2;
    }
};

export default async function SkillContainer() {
    let skills = await fetchSkills();

    return (
        <div className={'space-y-8'}>
            <H3>Skills</H3>

            <ul className={'grid grid-cols-1 sidebar-shown:grid-cols-2 gap-2'}>
                {skills.map((skill, index) => (
                    <li key={index}>
                        <SkillCard
                            skill={skill}
                            isTopLeft={index === 0}
                            isTopRight={index === 1}
                            isBottomLeft={isBottomLeft(skills, index)}
                            isBottomRight={isBottomRight(skills, index)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

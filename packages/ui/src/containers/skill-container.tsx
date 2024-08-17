import React from 'react';
import { fetchSkills } from '@repo/utils/contentful';
import { H3 } from '../typography';
import { SkillCard } from '../cards';

export default async function SkillContainer() {
    let skills = await fetchSkills();

    return (
        <div className={'space-y-8'}>
            <H3>Skills</H3>

            <ul
                className={
                    'grid grid-cols-1 sidebar-shown:grid-cols-2 gap-2 rounded-lg overflow-clip'
                }
            >
                {skills.map((skill, index) => (
                    <li key={index}>
                        <SkillCard
                            skill={skill}
                            isBottomRight={index === skills.length - 1}
                            className={
                                skills.length % 2 === 1 &&
                                index === skills.length - 2
                                    ? 'md:rounded-br-lg'
                                    : ''
                            }
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

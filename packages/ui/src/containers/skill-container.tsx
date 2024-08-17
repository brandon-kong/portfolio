'use client';

import React, { Suspense, useMemo } from 'react';
import { H3 } from '../typography';
import { SkillCard } from '../cards';
import { TypeSkill } from '@repo/utils/types';
import { cn } from '@repo/utils';
import { Button } from '../button';
import { fetchSkills } from '@repo/utils/contentful';

type SkillContainerProps = {
    skills?: TypeSkill[];
};

export default function SkillContainerClient({ skills }: SkillContainerProps) {
    const [expanded, setExpanded] = React.useState(false);

    const skillSet = useMemo(() => {
        if (skills) {
            return expanded ? skills : skills.slice(0, 8);
        }

        return [];
    }, [expanded]);

    return (
        <div className={'space-y-8'}>
            <H3>Skills</H3>

            <Suspense fallback={<div>Loading...</div>}>
                <ul
                    className={cn(
                        'grid grid-cols-1 sidebar-shown:grid-cols-2 gap-2 rounded-lg overflow-clip',
                        // add opacity gradient to the bottom
                        !expanded && 'gradient-overlay',
                    )}
                >
                    {skillSet?.map((skill, index) => (
                        <li key={index}>
                            <SkillCard
                                skill={skill}
                                isBottomRight={index === skillSet.length - 1}
                                className={
                                    skillSet.length % 2 === 1 &&
                                    index === skillSet.length - 2
                                        ? 'md:rounded-br-lg'
                                        : ''
                                }
                            />
                        </li>
                    ))}
                </ul>
            </Suspense>

            {!expanded && (
                <Button
                    onClick={() => {
                        'use client';
                        setExpanded(true);
                    }}
                >
                    Show More
                </Button>
            )}
        </div>
    );
}

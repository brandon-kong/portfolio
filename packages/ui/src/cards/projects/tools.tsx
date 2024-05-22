import { H3 } from '../../typography';
import type { TypeSkill } from '@repo/utils/types';
import { SkillCard } from '../../cards';

type BackgroundCardProps = {
    title?: string;
    skills: TypeSkill[];
};

export default async function ToolsCard({
    title = 'Tools',
    skills,
}: BackgroundCardProps) {
    return (
        <div
            className={
                'w-full h-full flex flex-row items-center justify-center gap-10'
            }
        >
            <div className={'flex flex-col gap-2 w-full'}>
                <div className={'flex flex-col sidebar-shown:flex-row gap-8'}>
                    <div className={'max-w-[200px] w-full'}>
                        <H3>{title}</H3>
                    </div>

                    <div className={'grid grid-cols-1 gap-1 flex-1'}>
                        {skills.map((skill, index) => (
                            <SkillCard
                                key={index}
                                skill={skill}
                                isBottomLeft={index === skills.length - 1}
                                isBottomRight={index === skills.length - 1}
                                isTopLeft={index === 0}
                                isTopRight={index === 0}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

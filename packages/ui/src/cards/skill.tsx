import { TypeSkill } from '@repo/utils/types';
import { P } from '../typography';

import Image from 'next/image';
import { cn } from '@repo/utils';

type BackgroundCardProps = {
    skill: TypeSkill;
    isBottomLeft?: boolean;
    isBottomRight?: boolean;
    isTopLeft?: boolean;
    isTopRight?: boolean;
};

export default async function SkillCard({
    skill: {
        fields: { name, type, image },
    },
    isBottomLeft = false,
    isBottomRight = false,
    isTopLeft = false,
    isTopRight = false,
}: BackgroundCardProps) {
    const img = image
        ? 'https://' + (image as any).fields.file.url.replace('//', '')
        : '';

    return (
        <div
            className={cn(
                'h-full w-full flex flex-row items-center justify-center gap-10 bg-accent',

                isBottomLeft && 'rounded-bl-lg',
                isBottomRight && 'rounded-br-lg',
                isTopLeft && 'rounded-tl-lg',
                isTopRight && 'rounded-tr-lg',
            )}
        >
            <div className={'flex items-center gap-4 w-full p-4'}>
                <Image
                    src={img}
                    alt={name}
                    width={50}
                    height={50}
                    className={'flex-shrink brightness-0 invert opacity-40'}
                />

                <div className={'flex flex-col w-full'}>
                    <P className={'font-medium'}>{name}</P>
                    <P className={'text-sm text-accent-foreground'}>{type}</P>
                </div>
            </div>
        </div>
    );
}

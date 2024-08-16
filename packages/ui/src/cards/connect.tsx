import { P } from '../typography';

import { cn } from '@repo/utils';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ConnectCardProps = {
    platform: string;
    username: string;
    icon: IconDefinition;
    isBottomLeft?: boolean;
    isBottomRight?: boolean;
    isTopLeft?: boolean;
    isTopRight?: boolean;
};

export default async function ConnectCard({
    platform,
    username,
    icon,
    isBottomLeft = false,
    isBottomRight = false,
    isTopLeft = false,
    isTopRight = false,
}: ConnectCardProps) {
    return (
        <div
            className={cn(
                'shadow-md h-full w-full flex flex-row items-center justify-center gap-10 bg-accent',

                isBottomLeft && 'rounded-bl-lg',
                isBottomRight && 'rounded-br-lg',
                isTopLeft && 'rounded-tl-lg',
                isTopRight && 'rounded-tr-lg',
            )}
        >
            <div className={'flex items-center gap-4 w-full p-4'}>
                {icon ? (
                    <FontAwesomeIcon
                        icon={icon}
                        className="w-6 h-6 text-background-secondary-500 group-hover:text-background-secondary-50 duration-300 aspect-square"
                    />
                ) : (
                    <div className={'h-10 w-10 flex-shrink'} />
                )}

                <div className={'flex flex-col w-full'}>
                    <P className={'font-medium'}>{username}</P>
                    <P className={'text-sm text-accent-foreground'}>
                        {platform}
                    </P>
                </div>
            </div>
        </div>
    );
}

import { P } from '../typography';

import { cn } from '@repo/utils';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

type ConnectCardProps = {
    platform: string;
    username: string;
    icon: IconDefinition;
    href: string;
    isBottomLeft?: boolean;
    isBottomRight?: boolean;
    isTopLeft?: boolean;
    isTopRight?: boolean;
    className?: string;
};

export default async function ConnectCard({
    platform,
    username,
    icon,
    href,
    isBottomLeft = false,
    isBottomRight = false,
    isTopLeft = false,
    isTopRight = false,
    className,
}: ConnectCardProps) {
    return (
        <Link
            target={'_blank'}
            href={href}
            className={cn(
                'shadow-md h-full w-full flex flex-row items-center justify-center gap-10 bg-accent hover:bg-neutral-300 dark:hover:bg-neutral-700/60 transition-colors',

                isBottomLeft && 'rounded-bl-lg',
                isBottomRight && 'rounded-br-lg',
                isTopLeft && 'rounded-tl-lg',
                isTopRight && 'rounded-tr-lg',

                className,
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
        </Link>
    );
}

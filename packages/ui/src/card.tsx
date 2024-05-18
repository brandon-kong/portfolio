import Link from 'next/link';
import Image from 'next/image';
import { P } from './typography';

export interface CardProps {
    title: string;
    description: string;
    image: string;
    href: string;
}

export default function Card({ title, description, image, href }: CardProps) {
    return (
        <Link href={href}>
            <div
                className={
                    'group w-full bg-transparent flex flex-col items-center justify-center gap-5'
                }
            >
                <div
                    className={
                        'aspect-[1.3/1] w-full relative bg-transparent rounded-xl overflow-hidden'
                    }
                >
                    <Image
                        src={image}
                        alt={title}
                        fill={true}
                        className={
                            'w-full h-full absolute group-hover:scale-110 transition-transform duration-500'
                        }
                    />
                </div>

                <div className={'flex flex-col gap-1 w-full'}>
                    <P className={'font-medium'}>{title}</P>
                    <P className={'text-md text-background-secondary-300'}>
                        {description}
                    </P>
                </div>
            </div>
        </Link>
    );
}

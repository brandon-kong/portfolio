import Link from 'next/link';
import Image from 'next/image';
import { P } from '../typography';
import { MapPin } from 'react-feather';

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
                    'group w-full bg-transparent flex flex-col items-center justify-center gap-5 max-w-sm'
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

export function LocationCard() {
    return (
        <div
            className={'flex flex-row items-center gap-2 text-lg text-primary'}
        >
            <MapPin />
            <P>Chicago, IL</P>
        </div>
    );
}

export { default as BlogPostCard } from './blogs';
export { default as ProjectCard } from './project';
export { default as ExperienceCard } from './experience';
export { default as EducationCard } from './education';
export { default as SkillCard } from './skill';
export { default as BackCard } from './back';
export { default as ConnectCard } from './connect';
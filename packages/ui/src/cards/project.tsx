import Link from 'next/link';
import Image from 'next/image';
import { H4, P } from '../typography';

import { TypeProject } from '@repo/utils/types';

type ProjectCardProps = {
    project: TypeProject;
};

export default function ProjectCard({
    project: {
        fields: { title, slug, description, coverImage },
    },
}: ProjectCardProps) {
    const imgUrl =
        'https://' +
        ((coverImage as any).fields.file.url as string).replace('//', '');
    return (
        <Link href={`/projects/${slug as string}`}>
            <div
                className={
                    'group w-full bg-transparent flex flex-col items-center justify-center gap-4'
                }
            >
                <div
                    className={
                        'aspect-[1.3/1] w-full relative bg-transparent rounded-xl overflow-hidden shadow-md'
                    }
                >
                    <Image
                        src={imgUrl}
                        alt={title}
                        fill={true}
                        sizes="400px"
                        priority
                        className={
                            ' w-full h-full absolute group-hover:scale-110 transition-transform duration-500'
                        }
                    />
                    {}
                </div>

                <div className={'flex flex-col gap-1 w-full'}>
                    <H4 className={'font-medium'}>{title as string}</H4>
                    <P className={'text-md text-accent-foreground'}>
                        {description as string}
                    </P>
                </div>
            </div>
        </Link>
    );
}

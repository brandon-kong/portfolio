import { TypeTestimonial } from '@repo/utils/types';
import { H3, P } from '../../typography';
import Image from 'next/image';

type BackgroundCardProps = {
    testimonial: TypeTestimonial;
};

export default async function TestimonialCard({
    testimonial: {
        fields: { content, author },
    },
}: BackgroundCardProps) {
    return (
        <div
            className={
                'w-full h-full flex flex-row items-center justify-center gap-10 bg-accent rounded-lg p-8'
            }
        >
            <div className={'flex flex-col gap-2 w-full'}>
                <div className={'flex flex-col gap-8'}>
                    <div className={'w-full'}>
                        <P className={'text-accent-foreground text-lg'}>
                            {content}
                        </P>
                    </div>

                    <div className={'flex gap-4 items-center'}>
                        <div>
                            <P className={'text-md leading-[1.8]'}>
                                {(author as any).fields.name}
                            </P>
                            <P className={'text-sm text-accent-foreground'}>
                                {(author as any).fields.title}
                            </P>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

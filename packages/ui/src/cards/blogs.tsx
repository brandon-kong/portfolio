import Image from 'next/image';
import { H3, H4, P } from '../typography';
import { Button } from '../button';
import { TypeBlogPost } from '@repo/utils/types';
import Link from 'next/link';
import { ChevronRight } from 'react-feather';

type BlogPostCardProps = {
    blogPost: TypeBlogPost;
};

export default function BlogPostCard({
    blogPost: {
        fields: { title, description, publishDate, slug, featuredImage },
    },
}: BlogPostCardProps) {
    const descriptionText = description as string;
    const imgUrl = (
        ('https://' + (featuredImage as any).fields.file.url) as string
    ).replace('//', '');

    const date = new Date(publishDate as string);
    const formattedPublishDate = date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
    return (
        <div
            className={
                'w-full h-full bg-background-secondary flex flex-col-reverse sidebar-shown:flex-row items-center justify-center gap-10'
            }
        >
            <div className={'flex flex-col gap-1 w-full'}>
                <div className={'flex flex-col gap-3'}>
                    <P
                        className={
                            'text-sm font-semibold text-accent-foreground uppercase'
                        }
                    >
                        {formattedPublishDate}
                    </P>

                    <div className={'flex flex-col gap-2'}>
                        <H4>{title}</H4>
                        <P
                            className={
                                'text-md leading-[1.8] text-accent-foreground max-w-xl'
                            }
                        >
                            {descriptionText.length > 150
                                ? descriptionText.slice(0, 150) + '...'
                                : description}
                        </P>
                        <Button
                            size={'default'}
                            variant={'link'}
                            className={
                                'w-full sidebar-shown:w-fit mt-4 p-0 group'
                            }
                        >
                            <Link
                                href={`/blog/${slug}`}
                                className={'flex items-center gap-1'}
                            >
                                Read more about this blog
                                <ChevronRight
                                    className={
                                        'group-hover:translate-x-2 transition-transform duration-500'
                                    }
                                    size={15}
                                />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div
                className={
                    'aspect-[1.333333/1] w-full sidebar-shown:w-[420px] relative bg-background-secondary-300 rounded-xl overflow-hidden'
                }
            >
                <Image
                    src={imgUrl}
                    alt={title}
                    fill
                    className={
                        'w-full h-full absolute object-cover transition-transform duration-500'
                    }
                />
            </div>
        </div>
    );
}

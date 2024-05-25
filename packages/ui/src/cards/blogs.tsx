import NextImage from 'next/image';
import { H4, P } from '../typography';
import { Button } from '../button';
import { TypeBlogPost } from '@repo/utils/types';
import Link from 'next/link';
import { ChevronRight } from 'react-feather';

type BlogPostCardProps = {
    blogPost: TypeBlogPost;
};

export default function BlogPostCard({
    blogPost,
    blogPost: {
        fields: { title, images, description, slug },
    },
}: BlogPostCardProps) {
    const descriptionText = description as string;
    const imgUrl = (
        ('https://' + (images as any)[0].fields.file.url) as string
    ).replace('//', '');

    const date = new Date(blogPost.sys.updatedAt);
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
                        <Link
                            href={`/blog/${slug}`}
                            className={'flex items-center gap-1'}
                        >
                            <Button
                                size={'default'}
                                variant={'secondary'}
                                className={
                                    'w-full sidebar-shown:w-fit mt-4 group'
                                }
                            >
                                Read more about this blog
                                <ChevronRight
                                    className={
                                        'group-hover:translate-x-1 transition-transform duration-500'
                                    }
                                    size={15}
                                />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div
                className={
                    'aspect-[1.333333/1] w-full sidebar-shown:w-[420px] relative bg-background-secondary-300 rounded-xl overflow-hidden shadow-md'
                }
            >
                <NextImage
                    src={imgUrl}
                    alt={title}
                    fill
                    sizes="400px"
                    className={
                        'w-full h-full absolute object-cover transition-transform duration-500'
                    }
                />
            </div>
        </div>
    );
}

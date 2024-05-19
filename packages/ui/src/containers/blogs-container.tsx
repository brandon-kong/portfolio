import { fetchBlogPosts } from '@repo/utils/contentful';
import { H3 } from '../typography';
import { Button } from '../button';
import BlogPostCard from '../cards/blogs';

type BlogPostsContainerProps = {
    noTitle?: boolean;
    title?: string;
    limit?: number;
};

export default async function BlogPostContainer({
    noTitle = false,
    title = 'Selected Writings',
    limit = -1,
}: BlogPostsContainerProps) {
    let blogPosts = await fetchBlogPosts();

    if (limit > 0) {
        blogPosts = blogPosts.slice(0, limit);
    }

    return (
        <div className={'space-y-8'}>
            <div className={'space-y-2'}>
                {limit > 0 && (
                    <Button
                        variant={'link'}
                        className={'p-0 text-accent-foreground h-fit'}
                    >
                        View All
                    </Button>
                )}
                {!noTitle && <H3>{title}</H3>}
            </div>

            <ul className={'grid grid-cols-1 gap-8'}>
                {blogPosts.map((blog, index) => (
                    <li key={index}>
                        <BlogPostCard blogPost={blog} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

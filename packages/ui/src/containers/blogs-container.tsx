import { fetchBlogPosts } from '@repo/utils/blogs';
import ProjectCard from '../cards/project';
import { H3 } from '../typography';
import { Button } from '../button';
import BlogPostCard from '../cards/blogs';

type BlogPostsContainerProps = {
    title?: string;
    limit?: number;
};

export default async function BlogPostContainer({
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
                <Button
                    variant={'link'}
                    className={'p-0 text-accent-foreground h-fit'}
                >
                    View All
                </Button>
                <H3>{title}</H3>
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

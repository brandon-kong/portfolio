import { H2, P } from '@repo/ui/typography';
import { BlogsContainer } from '@repo/ui/containers';

export default function Blog(): JSX.Element {
    return (
        <div className={'space-y-20'}>
            <div className={'space-y-6'}>
                <H2>Blog</H2>
                <P className={'text-accent-foreground text-lg'}>
                    A collection of my thoughts, musings, and writings.
                </P>
            </div>

            <BlogsContainer noTitle />
        </div>
    );
}

import { H1, H2 } from '@repo/ui/typography';
import Card from '@repo/ui/card';

export default function Page(): JSX.Element {
    return (
        <div>
            <div className={'space-y-2'}>
                <H2>Hello! I&apos;m Brandon,</H2>
                <H2 className={'text-accent-foreground'}>
                    and I code way too much.
                </H2>
            </div>

            <Card
                title="Projects"
                description="Check out my projects!"
                image="/images/projects.jpg"
                href="/projects"
            />
        </div>
    );
}

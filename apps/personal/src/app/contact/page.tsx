import { H2, H3, P } from '@repo/ui/typography';
import { EmailForm } from '@repo/ui/forms';
import { ConnectionContainer } from '@repo/ui/containers';
import { FadeIn } from '@repo/ui/fade-in';

export default function Contact(): JSX.Element {
    return (
        <div className={'space-y-20'}>
            <div className={'space-y-6'}>
                <FadeIn>
                    <H2>Contact me</H2>
                </FadeIn>

                <FadeIn>
                    <P className={'text-accent-foreground text-lg'}>
                        If you want to chat about chess, software engineering,
                        or anything else, feel free to reach out! I&apos;m
                        always happy to connect.
                    </P>
                </FadeIn>

                <hr />

                <FadeIn delay={0.2}>
                    <H3>Let&apos;s connect!</H3>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <ConnectionContainer />
                </FadeIn>
            </div>

            <FadeIn delay={0.4}>
                <EmailForm />
            </FadeIn>
        </div>
    );
}

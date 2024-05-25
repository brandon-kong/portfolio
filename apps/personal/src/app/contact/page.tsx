import { H2, P } from '@repo/ui/typography';
import { EmailForm } from '@repo/ui/forms';

export default function Contact(): JSX.Element {
    return (
        <div className={'space-y-20'}>
            <div className={'space-y-6'}>
                <H2>Contact me</H2>
                <P className={'text-accent-foreground text-lg'}>
                    If you want to chat about chess, software engineering, or
                    anything else, feel free to reach out! I&apos;m always happy
                    to connect.
                </P>
            </div>

            <EmailForm />
        </div>
    );
}

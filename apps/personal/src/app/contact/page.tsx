import { H2, H3, P } from '@repo/ui/typography';
import { EmailForm } from '@repo/ui/forms';
import { ConnectCard } from '@repo/ui/card';
import { faGithub, faLinkedin } from '@repo/ui/icons';

const connections = [
    {
        platform: 'GitHub',
        username: 'brandonkong',
        icon: faGithub,
    },
    {
        platform: 'LinkedIn',
        username: 'Brandon Kong',
        icon: faLinkedin,
    },
];

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

                <hr />
                
                <H3>
                    Let&apos;s connect!
                </H3>

                <div className={'grid gap-4 md:grid-cols-2'}>
                    {connections.map((connection, index) => (
                        <ConnectCard
                            key={index}
                            {...connection}
                        />
                    ))}
                </div>
              

            </div>

            <EmailForm />
        </div>
    );
}

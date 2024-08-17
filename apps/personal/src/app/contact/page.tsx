import { H2, H3, P } from '@repo/ui/typography';
import { EmailForm } from '@repo/ui/forms';
import { ConnectCard } from '@repo/ui/card';
import { faGithub, faInstagram, faLinkedin } from '@repo/ui/icons';
import { ConnectionContainer } from '@repo/ui/containers';

const connections = [
    {
        platform: 'GitHub',
        username: 'brandon-kong',
        icon: faGithub,
        href: 'https://www.github.com/brandon-kong',
    },
    {
        platform: 'LinkedIn',
        username: 'in/brandondkong',
        icon: faLinkedin,
        href: 'https://www.linkedin.com/in/brandondkong',
    },
    {
        platform: 'Instagram',
        username: 'brandondkong',
        icon: faInstagram,
        href: 'https://www.instagram.com//brandondkong',
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

                <H3>Let&apos;s connect!</H3>

                <ConnectionContainer />
            </div>

            <EmailForm />
        </div>
    );
}

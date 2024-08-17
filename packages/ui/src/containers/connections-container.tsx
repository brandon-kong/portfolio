import { ConnectCard } from '@repo/ui/card';
import { faGithub, faInstagram, faLinkedin } from '@repo/ui/icons';

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

export default async function ConnectionsContainer() {
    return (
        <div className={'grid gap-2 md:grid-cols-2 rounded-lg overflow-clip'}>
            {connections.map((connection, index) => (
                <ConnectCard
                    key={index}
                    {...connection}
                    href={connection.href}
                    isBottomRight={index === connections.length - 1}
                    className={
                        connections.length % 2 === 1 &&
                        index === connections.length - 2
                            ? 'md:rounded-br-lg'
                            : ''
                    }
                />
            ))}
        </div>
    );
}

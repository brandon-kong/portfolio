import Link from 'next/link';
import { ChevronLeft } from 'react-feather';
import { P } from '../typography';

type BackProps = {
    title?: string;
    href: string;
};

export default function Back({ title = 'Back to list', href }: BackProps) {
    return (
        <div className={'flex gap-6 pb-6 border-b border-accent'}>
            <div
                className={
                    'transition-colors duration-300 flex gap-4 items-center text-accent-foreground hover:text-foreground cursor-pointer'
                }
            >
                <ChevronLeft size={20} />

                <P className={'text-sm'}>
                    <Link href={href}>{title}</Link>
                </P>
            </div>
        </div>
    );
}

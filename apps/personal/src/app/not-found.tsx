import { H1, P } from "@repo/ui/typography"
import Image from "next/image"

export default function NotFound(): JSX.Element {
    return (
        <div
        className={'flex flex-col gap-2 items-center justify-center h-full max-h-[1200px]'}
        >
            <Image
                src={'/404.gif'}
                width={300}
                height={300}
                alt={'404'}
                className={'mb-4'}
            />
            <H1>404</H1>
            <P
            className={'text-accent-foreground'}
            >
                The page you are looking for does not exist.
            </P>
        </div>
    );
}
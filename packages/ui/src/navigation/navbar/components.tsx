import { H4 } from '../../typography';
import Image from 'next/image';

export function Role() {
    return (
        <div className={'flex flex-row items-center justify-between w-full'}>
            <div className={'flex items-center justify-center gap-4'}>
                <div className={'flex items-center justify-center'}>
                    <Image
                        src="/images/profile-picture.webp"
                        width={2000}
                        height={2000}
                        alt="logo"
                        priority
                        className="w-12 h-12 icon-only:h-14 icon-only:w-14 rounded-full aspect-square"
                    />
                </div>

                <div
                    className={
                        'flex-col items-start justify-center flex h-full'
                    }
                >
                    <H4 className="text-md font-medium">Brandon Kong</H4>
                    <H4 className="mt-0.5 text-sm tracking-[0] font-medium text-accent-foreground">
                        Full-Stack Developer
                    </H4>
                </div>
            </div>
        </div>
    );
}

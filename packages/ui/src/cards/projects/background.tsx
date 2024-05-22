import { H3, P } from '../../typography';

type BackgroundCardProps = {
    title?: string;
    background: string;
};

export default async function EducationCard({
    title = 'Background',
    background,
}: BackgroundCardProps) {
    return (
        <div
            className={
                'w-full h-full flex flex-row items-center justify-center gap-10'
            }
        >
            <div className={'flex flex-col gap-2 w-full'}>
                <div className={'flex flex-col sidebar-shown:flex-row gap-8'}>
                    <div className={'max-w-[200px] w-full'}>
                        <H3>{title}</H3>
                    </div>

                    <div className={'flex flex-col gap-6 flex-1'}>
                        <P className={'text-accent-foreground text-lg'}>
                            {background}
                        </P>
                    </div>
                </div>
            </div>
        </div>
    );
}

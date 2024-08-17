import { H2, H3, H4, P } from '../../typography';

type List = {
    title: string;
    content: string;
};

type ListCardProps = {
    list: List[];
    title?: string;
};

export default async function Listcard({
    list,
    title = 'Goals',
}: ListCardProps) {
    return (
        <ul className={'flex flex-col gap-8'}>
            <div
                className={
                    'w-full h-full flex flex-row items-center justify-center gap-10'
                }
            >
                <div className={'flex flex-col gap-2 w-full'}>
                    <div
                        className={'flex flex-col sidebar-shown:flex-row gap-8'}
                    >
                        <div className={'max-w-[200px] w-full'}>
                            <H3>{title}</H3>
                        </div>

                        <ul className={'flex flex-col gap-10'}>
                            {list.map((item, index) => (
                                <div
                                    className={
                                        'flex gap-4 sidebar-shown:flex-row flex-col'
                                    }
                                    key={index}
                                >
                                    <div
                                        className={
                                            'bg-primary/10 rounded-full w-8 h-8 p-6 flex items-center justify-center text-primary font-black'
                                        }
                                    >
                                        <H4>{index + 1}</H4>
                                    </div>
                                    <div
                                        className={'flex flex-col gap-2 flex-1'}
                                    >
                                        <H4>{item.title}</H4>
                                        <P
                                            className={
                                                'text-accent-foreground text-lg'
                                            }
                                        >
                                            {item.content}
                                        </P>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </ul>
    );
}

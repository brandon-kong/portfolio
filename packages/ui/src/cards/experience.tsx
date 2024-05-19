import { TypeExperience } from '@repo/utils/types';
import { P } from '../typography';

type BackgroundCardProps = {
    experience: TypeExperience;
};

export default function ExperienceCard({
    experience: {
        fields: { role, company, dateStarted, dateEnded, background },
    },
}: BackgroundCardProps) {
    const dateStartedFormatted = new Date(dateStarted).toLocaleDateString(
        'en-US',
        {
            month: 'short',
            year: 'numeric',
        },
    );

    const companyName = (company as any).fields.name;

    const dateEndedFormatted = dateEnded
        ? new Date(dateEnded).toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric',
          })
        : 'Present';

    const dateRange = `${dateStartedFormatted} - ${dateEndedFormatted}`;
    return (
        <div
            className={
                'w-full h-full flex flex-row items-center justify-center gap-10'
            }
        >
            <div className={'flex flex-col gap-2 w-full'}>
                <div className={'flex flex-col sidebar-shown:flex-row gap-8'}>
                    <div className={'max-w-[200px] w-full'}>
                        <P className={'text-md text-accent-foreground'}>
                            {dateRange}
                        </P>
                    </div>

                    <div className={'flex flex-col gap-6 flex-1'}>
                        <div>
                            <P className={'text-md leading-[1.8]'}>{role}</P>
                            <P className={'text-sm text-accent-foreground'}>
                                {companyName}
                            </P>
                        </div>
                        <div
                            className={
                                'text-md leading-[1.8] text-accent-foreground'
                            }
                        >
                            {background}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

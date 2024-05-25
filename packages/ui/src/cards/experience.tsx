import { TypeExperience } from '@repo/utils/types';
import { P } from '../typography';

import { remark } from 'remark';
import html from 'remark-html';
import Image from 'next/image';

type BackgroundCardProps = {
    experience: TypeExperience;
};

export default async function ExperienceCard({
    experience: {
        fields: { role, company, dateStarted, dateEnded, background },
    },
}: BackgroundCardProps) {
    // get date in UTC 7:00 timezone
    const dateStartedFormatted = new Date(dateStarted).toLocaleDateString(
        'en-US',
        {
            month: 'short',
            year: 'numeric',
            timeZone: 'UTC',
        },
    );

    const companyName = (company as any).fields.name;

    const dateEndedFormatted = dateEnded
        ? new Date(dateEnded).toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric',
              timeZone: 'UTC',
          })
        : 'Present';

    const dateRange = `${dateStartedFormatted} - ${dateEndedFormatted}`;

    const backgroundHtml = (
        await remark().use(html).process(background)
    ).toString();

    const companyLogo =
        'https://' +
        (company as any).fields.logo.fields.file.url.replace('//', '');

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
                        <div className={'flex gap-4 items-center'}>
                            <Image
                                src={companyLogo}
                                alt={companyName}
                                width={40}
                                height={40}
                                sizes="40px"
                                priority
                                className={'w-10 h-auto flex-shrink-0'}
                            />
                            <div>
                                <P className={'text-md leading-[1.8]'}>
                                    {role}
                                </P>
                                <P className={'text-sm text-accent-foreground'}>
                                    {companyName}
                                </P>
                            </div>
                        </div>
                        <div
                            className={
                                'text-md leading-[1.8] text-accent-foreground space-y-4'
                            }
                            dangerouslySetInnerHTML={{ __html: backgroundHtml }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

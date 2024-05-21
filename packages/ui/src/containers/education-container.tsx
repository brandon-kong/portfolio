import React from 'react';
import { fetchEducations } from '@repo/utils/contentful';
import { H3 } from '../typography';
import { EducationCard } from '../cards';

export default async function EducationContainer() {
    let educations = await fetchEducations();

    return (
        <div className={'space-y-8'}>
            <H3>Education</H3>

            <ul className={'grid grid-cols-1 gap-8'}>
                {educations.map((education, index) => (
                    <React.Fragment key={index}>
                        <li key={index}>
                            <EducationCard education={education} />
                        </li>
                        {index !== educations.length - 1 && (
                            <hr className={'w-full'} />
                        )}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
}

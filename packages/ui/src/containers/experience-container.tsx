import React from 'react';
import { fetchExperiences } from '@repo/utils/contentful';
import { H3 } from '../typography';
import ExperienceCard from '../cards/experience';

export default async function ExperienceContainer() {
    let experiences = await fetchExperiences();

    return (
        <div className={'space-y-8'}>
            <H3>Experiences</H3>

            <ul className={'grid grid-cols-1 gap-8'}>
                {experiences.map((blog, index) => (
                    <React.Fragment key={index}>
                        <li key={index}>
                            <ExperienceCard experience={blog} />
                        </li>
                        {index !== experiences.length - 1 && (
                            <hr className={'w-full'} />
                        )}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
}

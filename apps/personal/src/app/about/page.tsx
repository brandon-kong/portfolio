import { H2, P } from '@repo/ui/typography';
import {
    BlogsContainer,
    ExperiencesContainer,
    EducationsContainer,
    SkillsContainer,
} from '@repo/ui/containers';
import Image from 'next/image';
import { fetchSkills } from '@repo/utils/contentful';

export default async function About(): Promise<JSX.Element> {
    let skills = await fetchSkills();

    return (
        <div className={'space-y-20'}>
            <div className={'space-y-10'}>
                <div className={'flex gap-6 justify-between'}>
                    <div className={'space-y-10 flex-1'}>
                        <div className={'space-y-4'}>
                            <H2>Brandon Kong</H2>
                            <H2 className={'text-accent-foreground'}>
                                Full-Stack Developer
                            </H2>
                        </div>

                        <div className={'space-y-6'}>
                            <P className={'text-accent-foreground text-lg'}>
                                I&apos;m Brandon, a software engineer based in
                                Chicago, IL. I specialize in building robust,
                                user-friendly, and scalable applications and
                                software. I have a strong passion for developing
                                innovative solutions and solving complex
                                problems.
                            </P>
                            <P className={'text-accent-foreground text-lg'}>
                                Research assistant at DePaul University, where I
                                am currently pursuing a Bachelor of Science in
                                Computer Science. I have spoken at IEEE
                                conferences and have been actively involved in
                                research projects. Currently, I am working on a
                                project that will improve the public
                                transportation system in Chicago.
                            </P>
                        </div>
                    </div>

                    <Image
                        src={'/images/profile-picture.webp'}
                        alt={'Brandon Kong'}
                        width={200}
                        height={200}
                        className={
                            'shadow-lg rounded-full flex-shrink-0 self-start hidden sidebar-shown:flex'
                        }
                    />
                </div>
            </div>

            <SkillsContainer skills={skills} />

            <hr />

            <ExperiencesContainer />
            <EducationsContainer />

            <hr />

            <BlogsContainer title="Blog" limit={4} />
        </div>
    );
}

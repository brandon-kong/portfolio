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
                                Hey there! I&apos;m Brandon, a software engineer
                                who&apos;s proudly based in Chicago. I
                                specialize in building applications that are not
                                just robust and scalable, but also user-friendly
                                enough to make your grandma&apos;s tech support
                                calls a breeze. With a passion innovative
                                solutions, I&apos;m always looking for new ways
                                to make the world a little bit better through
                                technology.
                            </P>
                            <P className={'text-accent-foreground text-lg'}>
                                By day, I&apos;m a research assistant at DePaul
                                University, where I&apos;m pursuing a Bachelor
                                of Science in Computer Science. I&apos;ve had
                                the thrill of speaking at IEEE conferences,
                                publishing research papers, and diving into
                                research projects that keep me on my toes. Right
                                now, I&apos;m working on a neurobiology project
                                that aims to use machine learning to analyze
                                neuroanatomical patterns within gene expression
                                data.
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

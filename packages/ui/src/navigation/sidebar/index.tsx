import { Moon } from 'react-feather';
import {
    FooterNavigationButtons,
    SocialLinks,
    ThemeToggleButton,
} from '../navbuttons';
import { Role } from './components';

type SidebarProps = {
    selected?: string;
    baseUrl?: string;
};

export default function Sidebar({ baseUrl = '', selected }: SidebarProps) {
    return (
        <aside className=" z-[100] hidden sidebar-shown:flex flex-col justify-between items-center fixed top-0 left-0 py-10 px-4 icon-only:px-2 w-sidebar h-full">
            <div className={'w-full'}>
                <Role />

                <div
                    className={
                        'mt-8 flex-col items-center justify-center hidden icon-only:flex'
                    }
                >
                    <div
                        className={
                            'flex flex-row-reverse items-center justify-center gap-4'
                        }
                    >
                        <SocialLinks />
                    </div>
                </div>

                <FooterNavigationButtons
                    baseUrl={baseUrl}
                    selected={selected}
                />
            </div>

            <div className={'flex flex-col items-center icon-only:hidden'}>
                <hr className="my-8 mx-auto w-1/2 border-t-2 block icon-only:hidden" />
                <div className={'flex-col items-center justify-center'}>
                    <SocialLinks vertical />
                    <div className={'mt-4'}>
                        <ThemeToggleButton />
                    </div>
                </div>
            </div>

            <div className={'hidden icon-only:block'}>
                <ThemeToggleButton />
            </div>
        </aside>
    );
}

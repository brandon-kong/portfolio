import { P } from '../typography';

export default function Footer(): JSX.Element {
    return (
        <footer className="text-accent-foreground text-left flex flex-col gap-10 py-10">
            <hr />

            <P className={'text-sm'}>
                &copy; {new Date().getFullYear()} Brandon Kong
            </P>
        </footer>
    );
}

'use client';

import { ThemeProvider as ThmProvider } from 'next-themes';

type ThemeProviderProps = {
    children?: React.ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
    return (
        <ThmProvider
            disableTransitionOnChange
            defaultTheme="dark"
            enableSystem={true}
            attribute="class"
        >
            {children}
        </ThmProvider>
    );
}

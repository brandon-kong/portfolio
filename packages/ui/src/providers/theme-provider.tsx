'use client';

import { ThemeProvider as ThmProvider } from 'next-themes';

type ThemeProviderProps = {
    children?: React.ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
    return (
        <ThmProvider defaultTheme="dark" enableSystem={false} attribute="class">
            {children}
        </ThmProvider>
    );
}

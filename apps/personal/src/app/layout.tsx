import './globals.css';
import '@repo/ui/globals.css';

import type { Metadata } from 'next';
import { Inter, Source_Code_Pro } from 'next/font/google';
import { ThemeProvider } from '@repo/ui/providers';
import { Sidebar, Footer, Navbar } from '@repo/ui/navigation';
import { cn } from '@repo/utils';

export const revalidate = 3600;

const inter = Inter({ subsets: ['latin'] });
const sourceCodePro = Source_Code_Pro({
    subsets: ['latin'],
    variable: '--font-code',
});

export const metadata: Metadata = {
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_VERCEL_URL || 'https://brandondkong.com',
    ),
    title: 'Brandon Kong',
    description:
        'Brandon Kong is a software engineer with a passion for building products that make a difference.',

    openGraph: {
        title: 'Brandon Kong',
        description:
            'Brandon Kong is a software engineer with a passion for building products that make a difference.',
        type: 'website',
        url: 'https://brandondkong.com',
        siteName: 'Brandon Kong',
        images: [
            {
                url: '/abstract.jpg',
                width: 1200,
                height: 630,
                alt: 'Abstract background image',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(inter.className, sourceCodePro.variable)}>
                <ThemeProvider>
                    <div className={'flex min-h-screen relative'}>
                        <Sidebar />
                        <Navbar />

                        <main
                            className={cn(
                                'flex-1 pt-navbar [&&]:sidebar-shown:pt-4  pb-4 sidebar-shown:pl-sidebar sidebar-shown:pr-4 rounded-lg min-h-screen overflow-y-hidden',
                            )}
                        >
                            <div
                                className={
                                    'bg-background-nav w-full rounded-lg h-full py-20'
                                }
                            >
                                <div
                                    id="content"
                                    className={
                                        'mx-auto w-full max-w-content p-4 px-8'
                                    }
                                >
                                    {children}
                                    <Footer />
                                </div>
                            </div>
                        </main>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}

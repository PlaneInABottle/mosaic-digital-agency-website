import { clsx } from 'clsx';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ReactNode, Suspense } from 'react';
import Navigation from '@/components/navigation/Navigation';
import LoadingBar from '@/components/navigation/LoadingBar';
import '@/app/styles/globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import Footer from '@/components/layout/Footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

type Props = {
    children: ReactNode;
    locale: string;
};

export default async function BaseLayout({ children, locale }: Props) {
    const messages = await getMessages();

    return (
        <html lang={locale} style={{ scrollBehavior: 'smooth' }}>
            <body className={clsx(inter.className, 'flex min-h-screen flex-col')}>
                <Script
                    src="https://cloud.umami.is/script.js"
                    data-website-id="dc9c82e9-fc51-4019-8531-ee1b25cfef8d"
                />
                <ThemeProvider>
                    <NextIntlClientProvider messages={messages}>
                        <Suspense fallback={null}>
                            <LoadingBar />
                        </Suspense>
                        <Navigation />
                        <div className="flex-1">{children}</div>
                        <Footer />
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}

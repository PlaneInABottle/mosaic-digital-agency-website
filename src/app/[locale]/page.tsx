import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/layout/PageLayout';
import dynamic from 'next/dynamic';
import NewHero from '@/components/sections/home/NewHero';
import { ReactLenis } from 'lenis/react';
import DNAParallax from '@/components/sections/home/DNAParallax';
// Dynamic imports
const TextParallax = dynamic(() => import('@/components/sections/home/TextParallax'), {
    loading: () => <div className="h-[400px] animate-pulse bg-muted" />,
    ssr: true,
});

const ZoomParallax = dynamic(() => import('@/components/sections/home/ZoomParallax'), {
    loading: () => <div className="h-[400px] animate-pulse bg-muted" />,
    ssr: true,
});

const About = dynamic(() => import('@/components/sections/home/About'), {
    loading: () => <div className="h-[400px] animate-pulse bg-muted" />,
    ssr: true,
});

const Contact = dynamic(() => import('@/components/sections/home/Contact'), {
    loading: () => <div className="h-[400px] animate-pulse bg-muted" />,
    ssr: true,
});

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;

    const t = await getTranslations({ locale, namespace: 'metadata.pages.home' });
    return {
        title: t('title'),
        description: t('description'),
        openGraph: {
            title: t('title'),
            description: t('description'), // Add this translation
            type: 'website',
            images: [
                {
                    url: `/images/og-image-${locale}.webp`,
                    width: 300,
                    height: 200,
                    alt: t('title'),
                },
            ],
            url: `https://mosaicdigitalagency.com/${locale}`,
            metadataBase: new URL(`https://mosaicdigitalagency.com/${locale}`),
        },
    };
}

export default function Home() {
    return (
        <PageLayout fullWidth noHero pageTitle="home.hero" noPadding>
            <ReactLenis root>
                <NewHero />
                <TextParallax />
                <DNAParallax />
                <About />
                <ZoomParallax />
                <Contact />
            </ReactLenis>
        </PageLayout>
    );
}

import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/layout/PageLayout';
import dynamic from 'next/dynamic';
import NewHero from '@/components/sections/home/NewHero';
import { ReactLenis } from 'lenis/react';
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

export async function generateMetadata() {
    const t = await getTranslations('metadata.pages.home');
    return {
        title: t('title'),
        description: t('description'),
    };
}

export default function Home() {
    return (
        <PageLayout fullWidth noHero pageTitle="home.hero" noPadding>
            <ReactLenis root>
                <NewHero />
                <TextParallax />
                <About />
                <ZoomParallax />
                <Contact />
            </ReactLenis>
        </PageLayout>
    );
}

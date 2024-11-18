import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/layout/PageLayout';
import Hero from '@/components/sections/home/Hero';
import dynamic from 'next/dynamic';
import HexagonPattern from '@/components/ui/HexagonPattern';

// Dynamic imports with loading fallbacks
const Services = dynamic(() => import('@/components/sections/home/Services'), {
    loading: () => <div className="h-[400px] bg-muted animate-pulse" />,
    ssr: true,
});

const Portfolio = dynamic(() => import('@/components/sections/home/Portfolio'), {
    loading: () => <div className="h-[400px] bg-muted animate-pulse" />,
    ssr: true,
});

const About = dynamic(() => import('@/components/sections/home/About'), {
    loading: () => <div className="h-[400px] bg-muted animate-pulse" />,
    ssr: true,
});

const Contact = dynamic(() => import('@/components/sections/home/Contact'), {
    loading: () => <div className="h-[400px] bg-muted animate-pulse" />,
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
            <Hero />
            <Services />
            {/* background wrapper */}
            <div className="relative min-h-screen">
                <HexagonPattern />
                <About />
                <Portfolio />
            </div>
            <Contact />
        </PageLayout>
    );
}

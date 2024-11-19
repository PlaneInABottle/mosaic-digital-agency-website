import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/layout/PageLayout';
// import Hero from '@/components/sections/home/Hero';
import dynamic from 'next/dynamic';
import NewHero from '@/components/sections/home/NewHero';
import TextParallax from '@/components/sections/home/TextParallax';

// Dynamic imports with loading fallbacks
const Services = dynamic(() => import('@/components/sections/home/Services'), {
    loading: () => <div className="h-[400px] animate-pulse bg-muted" />,
    ssr: true,
});

const Portfolio = dynamic(() => import('@/components/sections/home/Portfolio'), {
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
            {/* <Hero /> */}
            <NewHero />
            <TextParallax />
            <Services />
            {/* background wrapper */}
            <About />
            <Portfolio />
            <Contact />
        </PageLayout>
    );
}

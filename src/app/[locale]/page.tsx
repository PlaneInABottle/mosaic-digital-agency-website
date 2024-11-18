import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/layout/PageLayout';
import Hero from '@/components/sections/home/Hero';
import dynamic from 'next/dynamic';

// Dynamic imports with loading fallbacks
const Services = dynamic(() => import('@/components/sections/home/Services'), {
    loading: () => <div className="h-[400px] bg-muted animate-pulse" />,
    ssr: true,
});

const ParallaxSection = dynamic(() => import('@/components/sections/home/ParallaxSection'), {
    loading: () => <div className="h-[400px] bg-muted animate-pulse" />,
    ssr: true,
});

const WhyChooseUs = dynamic(() => import('@/components/sections/home/WhyChooseUs'), {
    loading: () => <div className="h-[400px] bg-muted animate-pulse" />,
    ssr: true,
});

const Team = dynamic(() => import('@/components/sections/home/Team'), {
    loading: () => <div className="h-[400px] bg-muted animate-pulse" />,
    ssr: true,
});

const Testimonials = dynamic(() => import('@/components/sections/home/Testimonials'), {
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
            <ParallaxSection />
            <WhyChooseUs />
            <Team />
            <Testimonials />
        </PageLayout>
    );
}

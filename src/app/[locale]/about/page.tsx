import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/layout/PageLayout';
// import AboutHero from '@/components/sections/about/AboutHero';
import OurValues from '@/components/sections/about/OurValues';

export async function generateMetadata() {
    const t = await getTranslations('metadata.pages.about');
    return {
        title: t('title'),
        description: t('description'),
    };
}

export default async function AboutPage() {
    return (
        <PageLayout pageTitle="about" fullWidth>
            {/* <AboutHero /> */}
            <OurValues />
        </PageLayout>
    );
}

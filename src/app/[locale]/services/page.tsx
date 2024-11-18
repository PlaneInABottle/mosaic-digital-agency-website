import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/layout/PageLayout';
import Services from '@/components/sections/services/Services';

export async function generateMetadata() {
    const t = await getTranslations('metadata.pages.services');
    return {
        title: t('title'),
        description: t('description'),
    };
}

export default async function ServicesPageRoute() {
    return (
        <PageLayout fullWidth pageTitle="services">
            <Services />
        </PageLayout>
    );
}

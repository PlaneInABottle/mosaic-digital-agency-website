import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/layout/PageLayout';

import TeamSection from '@/components/sections/team/TeamSection';
export async function generateMetadata() {
    const t = await getTranslations('metadata.pages.team');
    return {
        title: t('title'),
        description: t('description'),
    };
}

export default function TeamPage() {
    return (
        <PageLayout fullWidth pageTitle="team">
            <TeamSection />
        </PageLayout>
    );
}

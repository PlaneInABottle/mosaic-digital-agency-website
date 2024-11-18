import { getTranslations } from 'next-intl/server';
import PageLayout from '@/components/layout/PageLayout';
import ServiceDetails from '@/components/sections/services/ServiceDetails';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';

type Props = {
    params: {
        serviceId: string;
    };
};

export async function generateMetadata({ params }: Props) {
    const t = await getTranslations('metadata.pages.services');
    const service = services.find((s) => s.id === params.serviceId);

    if (!service) return {};

    return {
        title: `${service.title} | Fitness Center`,
        description: t('description'),
    };
}

export default async function ServicePage({ params }: Props) {
    const service = services.find((s) => s.id === params.serviceId);

    if (!service) {
        notFound();
    }

    return (
        <PageLayout pageTitle={`services.areas.${service.id}`}>
            <ServiceDetails service={service} />
        </PageLayout>
    );
}

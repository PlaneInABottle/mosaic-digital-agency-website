import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { teamMembers } from '@/data/team';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Linkedin, Twitter, Medal, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {
    params: {
        id: string;
    };
};

export default async function TrainerProfile({ params }: Props) {
    const { id } = params;
    const trainer = teamMembers.find((t) => t.id === id);

    if (!trainer) {
        notFound();
    }

    const t = await getTranslations('pages.team');

    const socialIcons = {
        instagram: <Instagram className="h-4 w-4" />,
        twitter: <Twitter className="h-4 w-4" />,
        linkedin: <Linkedin className="h-4 w-4" />,
    };

    return (
        <PageLayout pageTitle={`team`} noHero>
            <div className="container py-8">
                {/* Hero Section */}
                <div className="relative h-[40vh] rounded-3xl overflow-hidden mb-12">
                    <Image
                        src={trainer.imageUrl}
                        alt={trainer.name}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h1 className="text-4xl font-bold text-white mb-2">{trainer.name}</h1>
                        <p className="text-xl text-primary">{trainer.role}</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Info Cards */}
                    <div className="space-y-6">
                        {/* Specialties Card */}
                        <Card>
                            <CardContent className="p-6">
                                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <Medal className="h-5 w-5 text-primary" />
                                    {t('specialties')}
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {trainer.specialties.map((specialty) => (
                                        <span
                                            key={specialty}
                                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                                        >
                                            {specialty}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Schedule Card */}
                        {trainer.schedule && (
                            <Card>
                                <CardContent className="p-6">
                                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                        <Clock className="h-5 w-5 text-primary" />
                                        {t('schedule')}
                                    </h2>
                                    <div className="space-y-2">
                                        {Object.entries(trainer.schedule).map(([day, hours]) => (
                                            <div
                                                key={day}
                                                className="flex justify-between items-center"
                                            >
                                                <span className="text-muted-foreground capitalize">
                                                    {day}
                                                </span>
                                                <span className="font-medium">{hours}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Social Links */}
                        {trainer.socialLinks && (
                            <Card>
                                <CardContent className="p-6">
                                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                        <Users className="h-5 w-5 text-primary" />
                                        {t('contact')}
                                    </h2>
                                    <div className="flex gap-2">
                                        {Object.entries(trainer.socialLinks).map(
                                            ([platform, url]) => (
                                                <Button
                                                    key={platform}
                                                    variant="outline"
                                                    size="icon"
                                                    asChild
                                                    className="h-10 w-10"
                                                >
                                                    <a
                                                        href={url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {
                                                            socialIcons[
                                                                platform as keyof typeof socialIcons
                                                            ]
                                                        }
                                                    </a>
                                                </Button>
                                            )
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Right Column - Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">{t('about')}</h2>
                            <div className="prose prose-gray dark:prose-invert max-w-none">
                                <p className="text-muted-foreground leading-relaxed">
                                    {t(`bios.${trainer.id}.bio`)}
                                </p>
                            </div>
                        </section>

                        {/* Training Philosophy */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">{t('philosophy')}</h2>
                            <div className="prose prose-gray dark:prose-invert max-w-none">
                                <p className="text-muted-foreground leading-relaxed">
                                    {t(`bios.${trainer.id}.philosophy`)}
                                </p>
                            </div>
                        </section>

                        {/* Certifications */}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

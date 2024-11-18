'use client';

import { TeamMember } from '@/data/team';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, Twitter, Calendar, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
// import { motion } from 'framer-motion';

interface TeamMemberCardProps {
    member: TeamMember;
    variant?: 'default' | 'compact';
}

export default function TeamMemberCard({ member, variant = 'default' }: TeamMemberCardProps) {
    const t = useTranslations('pages.team');
    const tCommon = useTranslations('common');

    const socialIcons = {
        instagram: <Instagram className="h-4 w-4" />,
        twitter: <Twitter className="h-4 w-4" />,
        linkedin: <Linkedin className="h-4 w-4" />,
    };

    if (variant === 'compact') {
        return (
            <Card className="group overflow-hidden">
                <div className="relative aspect-[3/4]">
                    <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="text-xl font-bold text-white">{member.name}</h3>
                        <p className="text-primary">{member.role}</p>
                    </div>
                </div>
            </Card>
        );
    }

    return (
        <Card className="overflow-hidden h-full">
            <div className="relative aspect-square">
                <Image src={member.imageUrl} alt={member.name} fill className="object-cover" />
            </div>
            <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>

                <div className="space-y-4">
                    <div>
                        <h4 className="font-medium mb-2">{t('specialties')}</h4>
                        <div className="flex flex-wrap gap-2">
                            {member.specialties.map((specialty) => (
                                <span
                                    key={specialty}
                                    className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
                                >
                                    {specialty}
                                </span>
                            ))}
                        </div>
                    </div>

                    {member.schedule && (
                        <div>
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {t('schedule')}
                            </h4>
                            <div className="text-sm space-y-1">
                                {Object.entries(member.schedule).map(([day, hours]) => (
                                    <div key={day} className="flex justify-between">
                                        <span className="text-muted-foreground">
                                            {tCommon(`general.days.${day}`)}
                                        </span>
                                        <span>{hours}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex flex-col gap-4">
                {member.socialLinks && (
                    <div className="flex gap-2">
                        {Object.entries(member.socialLinks).map(([platform, url]) => (
                            <Button
                                key={platform}
                                variant="outline"
                                size="icon"
                                asChild
                                className="h-8 w-8"
                            >
                                <a href={url} target="_blank" rel="noopener noreferrer">
                                    {socialIcons[platform as keyof typeof socialIcons]}
                                </a>
                            </Button>
                        ))}
                    </div>
                )}
                <Button asChild className="w-full">
                    <Link href={`/team/michael-smith`} className="flex items-center gap-2">
                        {t('viewProfile')}
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}

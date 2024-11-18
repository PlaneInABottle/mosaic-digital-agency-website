import { ReactNode } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type Props = {
    children?: ReactNode;
    pageTitle?: string;
    title?: ReactNode;
    fullWidth?: boolean;
    noPadding?: boolean;
    noHero?: boolean;
};

export default function PageLayout({
    children,
    pageTitle,
    title,
    fullWidth = false,
    noHero = false,
    noPadding = false,
}: Props) {
    const t = useTranslations(`pages.${pageTitle}`);
    return (
        <main className={`min-h-screen bg-background ${noPadding ? '' : 'pt-20'}`}>
            {title && (
                <div className="bg-primary py-20">
                    <div className="container relative">
                        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                            {title}
                        </h1>
                    </div>
                </div>
            )}
            {!noHero && (
                <section className="relative h-[40vh] md:h-[40vh] w-full  overflow-hidden">
                    <Image
                        src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-hero.png"
                        alt="Gym Hero"
                        fill
                        className="object-cover "
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
                            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
                                {t('description')}
                            </p>
                        </div>
                    </div>
                </section>
            )}
            <div className={fullWidth ? 'w-full' : 'container py-8 md:py-12'}>{children}</div>
        </main>
    );
}

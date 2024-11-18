import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

export default function Hero() {
    const t = useTranslations('pages.home.hero');

    return (
        <section className="relative min-h-screen flex items-center">
            {/* Optimized Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-hero.png"
                    alt="Fitness Hero"
                    fill
                    priority
                    quality={50}
                    sizes="100vw"
                    className="object-cover"
                    loading="eager"
                    fetchPriority="high"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40" />
            </div>
            {/* SVG Oclusion bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/4 ">
                <Image
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/white-splatter2.svg"
                    alt="Fitness Hero Bottom"
                    fill
                    className="object-cover select-none pointer-events-none"
                />
            </div>

            {/* Content */}
            <div className="container relative flex flex-col items-center text-center">
                <h2 className="text-base md:text-lg lg:text-xl text-primary font-bold mb-6">
                    {t('topper')}
                </h2>
                <div className="max-w-3xl text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-8xl lg:leading-[1.2] font-bold mb-6">
                        {t('title')}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-200">{t('subtitle')}</p>

                    <Button
                        asChild
                        size="lg"
                        className="text-base md:text-lg lg:text-xl relative overflow-hidden group"
                    >
                        <Link href="/contact" className="relative">
                            <span className="relative z-10 flex items-center">
                                {t('contactUs')}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </span>
                            <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-300 group-hover:w-full" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

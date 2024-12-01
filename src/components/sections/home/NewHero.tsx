'use client';

import ParallaxImg from '@/components/animation/ParallaxImg';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

export default function NewHero() {
    const t = useTranslations('pages.home.hero');
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });
    const clipPath = useTransform(scrollYProgress, [0, 1], ['circle(5%)', 'circle(100%)']);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

    return (
        <div className="relative h-[450vh] w-full overflow-clip bg-black" ref={ref}>
            <motion.div
                className="sticky top-0 h-screen w-full"
                style={{ scale, opacity, clipPath }}
            >
                <Image
                    src="/images/mosaic-hero.jpg"
                    alt="Mosaic Hero"
                    fill
                    priority
                    quality={90}
                    sizes="100vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJyEwSkNOPTYwPTYyRkNUSFZIOS8xRkdWV1NfWlNJWGKBgoFOYX5kfX3/2wBDARUXFx4aHR4eHX5tJyE3fn19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
            </motion.div>
            <ParallaxImg
                start="10%"
                end="80%"
                src="/images/zoom-parallax/1.jpeg"
                alt={t('imageAlt')}
                className="ml-8 h-96 w-1/2 md:w-1/3"
            />{' '}
            <ParallaxImg
                start="30%"
                end="20%"
                src="/images/zoom-parallax/5.jpg"
                alt={t('imageAlt')}
                className="mx-auto h-96 w-1/2 md:w-auto"
            />{' '}
            <ParallaxImg
                start="80%"
                end="-30%"
                src="/images/zoom-parallax/3.jpg"
                alt={t('imageAlt')}
                className="ml-auto h-96 w-1/2 md:w-1/3"
            />
            <ParallaxImg
                start="40%"
                end="-200%"
                src="/images/zoom-parallax/7.jpeg"
                alt={t('imageAlt')}
                className="mr-auto h-96 w-1/2 md:w-1/3"
            />
            <h1 className="relative text-center text-8xl font-bold mix-blend-difference md:text-[24rem]">
                {t('firstWord')}
            </h1>
            <h1 className="relative mt-[20vh] text-center text-8xl font-bold mix-blend-difference md:text-[24rem]">
                {t('secondWord')}
            </h1>
            <div className="absolute inset-x-0 bottom-0 h-screen bg-gradient-to-t from-black to-transparent" />
        </div>
    );
}

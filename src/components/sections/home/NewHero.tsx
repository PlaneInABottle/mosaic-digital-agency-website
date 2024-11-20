'use client';

import ParallaxImg from '@/components/animation/ParallaxImg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ReactLenis } from 'lenis/react';
// import { useTranslations } from 'next-intl';
export default function NewHero() {
    // const t = useTranslations('pages.home.hero');

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });
    const clipPath = useTransform(scrollYProgress, [0, 1], ['circle(10%)', 'circle(100%)']);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
    return (
        <ReactLenis root>
            <div className="relative h-[450vh] w-full overflow-clip bg-black" ref={ref}>
                <motion.div
                    className="sticky top-0 h-screen w-full bg-[url('/images/mosaic-hero.jpg')] bg-cover bg-center bg-no-repeat"
                    style={{ scale, opacity, clipPath }}
                />
                <ParallaxImg
                    start="10%"
                    end="80%"
                    src="/images/test.jpeg"
                    alt="hero"
                    className="ml-8 h-96 w-1/2 md:w-1/3"
                />{' '}
                <ParallaxImg
                    start="30%"
                    end="20%"
                    src="/images/test.jpeg"
                    alt="hero"
                    className="mx-auto h-96 w-1/2 md:w-auto"
                />{' '}
                <ParallaxImg
                    start="80%"
                    end="-30%"
                    src="/images/test.jpeg"
                    alt="hero"
                    className="ml-auto h-96 w-1/2 md:w-1/3"
                />
                <ParallaxImg
                    start="-120%"
                    end="-0%"
                    src="/images/test.jpeg"
                    alt="hero"
                    className="mr-auto h-96 w-1/2 md:w-1/3"
                />
                <h1 className="relative text-center text-8xl font-bold mix-blend-difference md:text-[24rem]">
                    FARK
                </h1>
                <h1 className="relative mt-[20vh] text-center text-8xl font-bold mix-blend-difference md:text-[24rem]">
                    YARAT
                </h1>
                <div className="absolute inset-x-0 bottom-0 h-screen bg-gradient-to-t from-black to-transparent" />
            </div>
        </ReactLenis>
    );
}

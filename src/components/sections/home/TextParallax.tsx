'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Fragment, useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function TextParallax() {
    const container = useRef<HTMLDivElement>(null);
    const t = useTranslations('pages.home.textParallax');

    // Get all words as an array
    const words = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => t(`words.${i}`));

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    return (
        <div className="relative overflow-clip bg-black py-[40vh]">
            <div ref={container} className="space-y-24 md:space-y-48">
                <Slide
                    direction={'left'}
                    left={'-250%'}
                    progress={scrollYProgress}
                    src={'/images/1.jpg'}
                    words={words}
                />

                <Slide
                    direction={'right'}
                    left={'-140%'}
                    progress={scrollYProgress}
                    src={'/images/2.jpg'}
                    words={words}
                />

                <Slide
                    direction={'left'}
                    left={'-45%'}
                    progress={scrollYProgress}
                    src={'/images/3.jpg'}
                    words={words}
                />
            </div>
        </div>
    );
}

interface SlideProps {
    direction: string;
    left: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    progress: any; // Consider using a more specific type
    src: string;
    words: string[];
}

const Slide = ({ direction, left, progress, src, words }: SlideProps) => {
    const dir = direction === 'left' ? -1 : 1;
    const translateX = useTransform(progress, [0, 1], [150 * dir, -150 * dir]);

    return (
        <motion.div style={{ x: translateX, left }} className="relative flex whitespace-nowrap">
            <Phrase src={src} words={words} />
            <Phrase src={src} words={words} />
            <Phrase src={src} words={words} />
        </motion.div>
    );
};

const Phrase = ({ src, words }: { src: string; words: string[] }) => {
    return (
        <div className={'flex items-center gap-5 px-5'}>
            {words.map((word, index) => (
                <Fragment key={`word-${index}`}>
                    <p className="text-6xl md:text-9xl">{word}</p>
                    {index < words.length - 1 && (
                        <span className="relative aspect-[4/2] h-[7.5vw] overflow-hidden rounded-full">
                            <Image style={{ objectFit: 'cover' }} src={src} alt={word} fill />
                        </span>
                    )}
                </Fragment>
            ))}
        </div>
    );
};

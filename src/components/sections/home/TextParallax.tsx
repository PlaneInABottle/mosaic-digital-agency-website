'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Fragment, useRef } from 'react';
import Image from 'next/image';
export default function TextParallax() {
    const container = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });
    return (
        <div className="relative overflow-clip bg-black py-[40vh]">
            <div ref={container} className="space-y-48">
                <Slide
                    direction={'left'}
                    left={'-250%'}
                    progress={scrollYProgress}
                    src={'/images/1.jpg'}
                />

                <Slide
                    direction={'right'}
                    left={'-140%'}
                    progress={scrollYProgress}
                    src={'/images/2.jpg'}
                />

                <Slide
                    direction={'left'}
                    left={'-45%'}
                    progress={scrollYProgress}
                    src={'/images/3.jpg'}
                />
            </div>
        </div>
    );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Slide = (props: { direction: string; left: string; progress: any; src: string }) => {
    const direction = props.direction == 'left' ? -1 : 1;

    const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction]);

    return (
        <motion.div
            style={{ x: translateX, left: props.left }}
            className="relative flex whitespace-nowrap"
        >
            <Phrase src={props.src} />

            <Phrase src={props.src} />

            <Phrase src={props.src} />
        </motion.div>
    );
};

const Phrase = ({ src }: { src: string }) => {
    const words = [
        'Yaratıcılık',
        'Vizyon',
        'İnovasyon',
        'Güven',
        'Kalite',
        'Deneyim',
        'Başarı',
        'Tutku',
        'Yenilik',
    ];
    return (
        <div className={'flex items-center gap-5 px-5'}>
            {words.map((word, index) => (
                <Fragment key={`word-${index}`}>
                    <p className="text-6xl md:text-9xl">{word}</p>
                    {index < words.length - 1 && (
                        <span className="relative aspect-[4/2] h-[7.5vw] overflow-hidden rounded-full">
                            <Image style={{ objectFit: 'cover' }} src={src} alt="image" fill />
                        </span>
                    )}
                </Fragment>
            ))}
        </div>
    );
};

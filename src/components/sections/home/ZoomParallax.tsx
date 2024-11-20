'use client';
import Picture1 from '/public/images/zoom-parallax/1.jpeg';
import Picture2 from '/public/images/zoom-parallax/2.jpeg';
import Picture3 from '/public/images/zoom-parallax/3.jpg';
import Picture4 from '/public/images/zoom-parallax/4.jpg';
import Picture5 from '/public/images/zoom-parallax/5.jpg';
import Picture6 from '/public/images/zoom-parallax/6.jpg';
import Picture7 from '/public/images/zoom-parallax/7.jpeg';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useMemo } from 'react';

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1]);

    const scales = useMemo(
        () => ({
            scale4,
            scale5,
            scale6,
            scale8,
            scale9,
        }),
        [scale4, scale5, scale6, scale8, scale9]
    );

    const pictures = useMemo(
        () => [
            { src: Picture1, scale: scales.scale4 },
            { src: Picture2, scale: scales.scale5 },
            { src: Picture3, scale: scales.scale6 },
            { src: Picture4, scale: scales.scale5 },
            { src: Picture5, scale: scales.scale6 },
            { src: Picture6, scale: scales.scale8 },
            { src: Picture7, scale: scales.scale9 },
        ],
        [scales]
    );

    const IMAGE_STYLES = {
        1: '-top-[30vh] left-[5vw] h-[30vh] w-[35vw]',
        2: '-left-[25vw] -top-[10vh] h-[45vh] w-[20vw]',
        3: 'left-[27.5vw] h-[25vh] w-[25vw]',
        4: 'left-[5vw] top-[27.5vh] h-[25vh] w-[20vw]',
        5: '-left-[22.5vw] top-[27.5vh] h-[25vh] w-[30vw]',
        6: 'left-[25vw] top-[22.5vh] h-[15vh] w-[15vw]',
    };

    return (
        <div ref={container} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen overflow-hidden">
                {pictures.map(({ src, scale }, index) => (
                    <motion.div
                        key={index}
                        style={{ scale }}
                        className="absolute top-0 flex h-full w-full items-center justify-center"
                    >
                        <div className={`relative h-[25vh] w-[25vw] ${IMAGE_STYLES[index] || ''}`}>
                            <Image
                                src={src}
                                fill
                                alt="image"
                                placeholder="blur"
                                className="object-cover"
                                priority={index < 2}
                                loading={index < 2 ? 'eager' : 'lazy'}
                            />
                        </div>
                    </motion.div>
                ))}
                <motion.div
                    style={{ opacity }}
                    className="absolute inset-0 flex items-center justify-center bg-black"
                >
                    <span className="text-6xl font-bold text-white md:text-9xl">İletişim</span>
                </motion.div>
            </div>
        </div>
    );
}

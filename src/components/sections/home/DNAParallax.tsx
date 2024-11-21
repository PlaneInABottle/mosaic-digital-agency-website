'use client';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function DNAParallax() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const totalImages = 6;

    const yPosition = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
    const rotation4 = useTransform(scrollYProgress, [0, 1], [-180, 360]);
    const rotation5 = useTransform(scrollYProgress, [0, 1], [-120, 420]);
    const rotation6 = useTransform(scrollYProgress, [0, 1], [-60, 480]);
    const rotation = useTransform(scrollYProgress, [0, 1], [0, 540]);
    const rotation2 = useTransform(scrollYProgress, [0, 1], [60, 600]);
    const rotation3 = useTransform(scrollYProgress, [0, 1], [120, 660]);

    // Circular path with radius 550px
    const translateX = useTransform(rotation, (deg) => 350 * Math.sin((deg * Math.PI) / 180));
    const translateX2 = useTransform(rotation2, (deg) => 350 * Math.sin((deg * Math.PI) / 180));
    const translateX3 = useTransform(rotation3, (deg) => 350 * Math.sin((deg * Math.PI) / 180));
    const translateX4 = useTransform(rotation4, (deg) => 350 * Math.sin((deg * Math.PI) / 180));
    const translateX5 = useTransform(rotation5, (deg) => 350 * Math.sin((deg * Math.PI) / 180));
    const translateX6 = useTransform(rotation6, (deg) => 350 * Math.sin((deg * Math.PI) / 180));

    const translateZ = useTransform(rotation, (deg) => 350 * Math.cos((deg * Math.PI) / 180));
    const translateZ2 = useTransform(rotation2, (deg) => 350 * Math.cos((deg * Math.PI) / 180));
    const translateZ3 = useTransform(rotation3, (deg) => 350 * Math.cos((deg * Math.PI) / 180));
    const translateZ4 = useTransform(rotation4, (deg) => 350 * Math.cos((deg * Math.PI) / 180));
    const translateZ5 = useTransform(rotation5, (deg) => 350 * Math.cos((deg * Math.PI) / 180));
    const translateZ6 = useTransform(rotation6, (deg) => 350 * Math.cos((deg * Math.PI) / 180));
    // const translateY = useTransform(rotation, (deg) => 550 * Math.sin((deg * Math.PI) / 180));
    // Combine transformations

    const transform = useMotionTemplate`
        translateX(${translateX}px) 
        translateZ(${translateZ}px)
        translateY(-${yPosition})
        rotateY(${rotation}deg)
    `;
    const transform2 = useMotionTemplate`
        translateX(${translateX2}px) 
        translateZ(${translateZ2}px)
        translateY(-${yPosition})
        rotateY(${rotation2}deg)
    `;
    const transform3 = useMotionTemplate`
        translateX(${translateX3}px) 
        translateZ(${translateZ3}px)
        translateY(-${yPosition})
        rotateY(${rotation3}deg)
    `;
    const transform4 = useMotionTemplate`
        translateX(${translateX4}px) 
        translateZ(${translateZ4}px)
        translateY(-${yPosition})
        rotateY(${rotation4}deg)
    `;
    const transform5 = useMotionTemplate`
        translateX(${translateX5}px) 
        translateZ(${translateZ5}px)
        translateY(-${yPosition})
        rotateY(${rotation5}deg)
    `;
    const transform6 = useMotionTemplate`
        translateX(${translateX6}px) 
        translateZ(${translateZ6}px)
        translateY(-${yPosition})
        rotateY(${rotation6}deg)
    `;
    const transformArray = [transform, transform2, transform3, transform4, transform5, transform6];
    return (
        <div className="relative h-auto w-full bg-black" ref={ref}>
            {/* <div className="sticky top-0 h-screen w-full bg-black" /> */}
            <div
                className="relative flex w-full flex-col items-center justify-center gap-16"
                style={{
                    transformStyle: 'preserve-3d',
                    perspective: '800px',
                }}
            >
                {/* <motion.div
                    className="relative h-[250px] w-[200px]"
                    style={{
                        transform,
                    }}
                >
                    <Image
                        src="/images/dragons/dragon_1.jpg"
                        alt="DNA"
                        fill
                        className="object-cover"
                    />
                </motion.div>{' '}
                <motion.div
                    className="relative h-[250px] w-[200px]"
                    style={{
                        transform,
                    }}
                >
                    <Image
                        src="/images/dragons/dragon_1.jpg"
                        alt="DNA"
                        fill
                        className="object-cover"
                    />
                </motion.div> */}
                {[...Array(totalImages)].map((_, index) => (
                    <motion.div
                        key={index}
                        className="relative h-[250px] w-[200px]"
                        style={{ transform: transformArray[index % 6] }}
                    >
                        <Image
                            src="/images/dragons/dragon_1.jpg"
                            alt="DNA"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

'use client';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export default function DNAParallax() {
    const ref = useRef<HTMLDivElement>(null);
    const [perspective, setPerspective] = useState(800);
    const [baseRadius, setBaseRadius] = useState(350);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setPerspective(window.innerWidth < 768 ? 400 : 1000);
            setBaseRadius(window.innerWidth < 768 ? 150 : 350);
        }
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const totalImages = 8;
    const imageUrls = [
        '/images/dragons/dragon_1.jpg',
        '/images/dragons/dragon_2.jpg',
        '/images/dragons/dragon_3.jpg',
        '/images/dragons/dragon_4.jpg',
        '/images/dragons/dragon_5.jpg',
        '/images/dragons/dragon_6.jpg',
        '/images/dragons/dragon_7.jpg',
        '/images/dragons/dragon_8.jpg',
    ];
    const yPosition = useTransform(scrollYProgress, [0, 1], ['0%', '400%']);
    const rotation6 = useTransform(scrollYProgress, [0, 1], [-180, 360]);
    const rotation = useTransform(scrollYProgress, [0, 1], [-120, 420]);
    const rotation2 = useTransform(scrollYProgress, [0, 1], [-60, 480]);
    const rotation3 = useTransform(scrollYProgress, [0, 1], [0, 540]);
    const rotation4 = useTransform(scrollYProgress, [0, 1], [60, 600]);
    const rotation5 = useTransform(scrollYProgress, [0, 1], [120, 660]);

    // Circular path with radius 550px
    const translateX = useTransform(
        rotation,
        (deg) => baseRadius * Math.sin((deg * Math.PI) / 180)
    );
    const translateX2 = useTransform(
        rotation2,
        (deg) => baseRadius * Math.sin((deg * Math.PI) / 180)
    );
    const translateX3 = useTransform(
        rotation3,
        (deg) => baseRadius * Math.sin((deg * Math.PI) / 180)
    );
    const translateX4 = useTransform(
        rotation4,
        (deg) => baseRadius * Math.sin((deg * Math.PI) / 180)
    );
    const translateX5 = useTransform(
        rotation5,
        (deg) => baseRadius * Math.sin((deg * Math.PI) / 180)
    );
    const translateX6 = useTransform(
        rotation6,
        (deg) => baseRadius * Math.sin((deg * Math.PI) / 180)
    );

    const translateZ = useTransform(
        rotation,
        (deg) => baseRadius * Math.cos((deg * Math.PI) / 180)
    );
    const translateZ2 = useTransform(
        rotation2,
        (deg) => baseRadius * Math.cos((deg * Math.PI) / 180)
    );
    const translateZ3 = useTransform(
        rotation3,
        (deg) => baseRadius * Math.cos((deg * Math.PI) / 180)
    );
    const translateZ4 = useTransform(
        rotation4,
        (deg) => baseRadius * Math.cos((deg * Math.PI) / 180)
    );
    const translateZ5 = useTransform(
        rotation5,
        (deg) => baseRadius * Math.cos((deg * Math.PI) / 180)
    );
    const translateZ6 = useTransform(
        rotation6,
        (deg) => baseRadius * Math.cos((deg * Math.PI) / 180)
    );
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
    // ... existing code ...

    // Rename existing transformArray to transformForwardArray for clarity
    const transformForwardArray = [
        transform,
        transform2,
        transform3,
        transform4,
        transform5,
        transform6,
    ];
    const t = useTranslations('pages.home.portfolio');
    // ... rest of the code ...
    return (
        <div
            className="relative h-auto w-full"
            ref={ref}
            style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
            }}
        >
            <div className="relative w-full pb-[80rem] text-center">
                <span className="text-6xl font-bold md:text-9xl">{t('title')}</span>
            </div>
            <div
                className="relative flex w-full flex-col items-center justify-center gap-16"
                style={{
                    perspective: `${perspective}px`,
                    backfaceVisibility: 'hidden',
                }}
            >
                {[...Array(totalImages)].map((_, index) => (
                    <motion.div
                        key={index}
                        className="relative h-[150px] w-[120px] md:h-[250px] md:w-[200px]"
                        style={{ transform: transformForwardArray[index % 6] }}
                    >
                        <Image src={imageUrls[index]} alt="DNA" fill className="object-cover" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

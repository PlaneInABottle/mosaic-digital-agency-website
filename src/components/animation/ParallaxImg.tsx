import { cn } from '@/lib/utils';
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
const ParallaxImg = ({
    start,
    end,
    src,
    alt,
    className,
}: {
    start: string;
    end: string;
    src: string;
    alt: string;
    className: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.3]);
    const scale = useTransform(scrollYProgress, [0, 0.75], [1, 0.85]);
    const y = useTransform(scrollYProgress, [0, 1], [start, end]);
    return (
        <motion.div className={cn('relative', className)} style={{ y, opacity, scale }} ref={ref}>
            <Image src={src} alt={alt} fill className="object-contain" />
        </motion.div>
    );
};

export default ParallaxImg;

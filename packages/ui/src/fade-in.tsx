'use client';
import { motion } from 'framer-motion';

interface FadeInProps {
    children?: React.ReactNode;
    delay?: number;
    className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
    children,
    delay = 0,
    className,
}: FadeInProps) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

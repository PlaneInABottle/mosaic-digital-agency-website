'use client';

import { motion } from 'framer-motion';
import TeamMemberCard from '@/components/team/TeamMemberCard';
import { teamMembers } from '@/data/team';

export default function TeamSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-12 md:py-16">
            {/* Team Grid */}
            <div className="container">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {teamMembers.map((member) => (
                        <motion.div key={member.id} variants={itemVariants}>
                            <TeamMemberCard member={member} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@/data";

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <section
            
            className="py-20 bg-gradient-to-r from-black to-green-950"
            
        >
            <div className="container mx-auto px-6">
                <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    My <span className="text-yellow-400">Skills</span>
                </motion.h2>
                
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-gray-950 rounded-xl p-8 border border-gray-800 cursor-pointer
                                hover:border-gray-500 focus:border-gray-500 active:border-gray-500
                                transition duration-300 transform
                                hover:-translate-y-2 focus:-translate-y-2 active:-translate-y-2
                                hover:shadow-lg focus:shadow-lg active:shadow-lg
                                group outline-none"
                            tabIndex={0}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <motion.div 
                                className="mb-4 flex justify-center"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Image
                                    src={skill.image}
                                    alt={skill.title}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-auto rounded-md object-cover"
                                />
                            </motion.div>
                            <motion.h3 
                                className="text-xl font-bold mb-2 group-hover:text-yellow-400 group-focus:text-yellow-400 group-active:text-yellow-400 transition"
                                whileHover={{ color: "#facc15" }} // yellow-400
                            >
                                {skill.title}
                            </motion.h3>
                            <motion.p 
                                className="text-gray-400"
                                whileHover={{ color: "#e5e7eb" }} // gray-200
                            >
                                {skill.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
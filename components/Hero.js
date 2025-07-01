import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";

// You'll need to create or import a 3D model component for your profile
// For now, I'll use a placeholder - replace with your actual model


const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, 100]);

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Animated background gradient */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 bg-gradient-to-r from-black to-green-950"
            />

          
            <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between relative z-20">
                <div className="md:w-1/2 mb-12 md:mb-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold mb-4"
                    >
                        I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500">Sarwar Alam</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-2xl md:text-3xl font-semibold text-gray-300 mb-8"
                    >
                        Full Stack Developer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-gray-400 text-xl mb-8 max-w-lg"
                    >
                        Building digital experiences that are fast, accessible, and visually
                        appealing. Passionate about creating solutions that make an impact.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="flex justify-center md:justify-start"
                    >
                        <Link href="#contact" passHref legacyBehavior>
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 20px rgba(74, 222, 128, 0.5)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="
        glow-button
        px-8 py-3
        text-lg font-semibold text-white
        bg-transparent
        rounded-lg
        relative
        hover:bg-green-800
        focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-gray-900
        transition-colors duration-300
        inline-flex items-center justify-center
        border-2 border-green-500
        cursor-pointer
      "
                            >
                                Let's Connect
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="md:w-1/2 flex justify-center"
                >
                    <div className="relative w-48 h-48 md:w-80 md:h-80">
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative w-full h-full rounded-full border-2 border-green-400 shadow-lg shadow-green-800"
                        >
                            <Image
                                src="/images/hero.png"
                                alt="Sarwar Alam"
                                fill
                                style={{ objectFit: "cover" }}
                                className="rounded-full"
                                priority
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
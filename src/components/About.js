import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="h-screen bg-[#1e1e1e] text-[#d4d4d4] flex items-center justify-center px-4">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="max-w-3xl mx-auto"
            >
                <div className="font-mono mb-8">
                    <span className="text-[#569CD6]">public class</span>
                    <span className="text-[#DCDCAA]"> AboutMe</span>
                    <span className="text-[#d4d4d4]"> {`{`}</span>
                </div>
                
                <div className="pl-8">
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mb-6"
                    >
                        <span className="text-[#569CD6]">private final</span>
                        <span className="text-[#9CDCFE]"> String[]</span>
                        <span className="text-[#DCDCAA]"> mainSkills</span>
                        <span> = {`{`}</span>
                        <span className="text-[#CE9178]">
                            "Java", "Spring", "JPA", "MySQL"
                        </span>
                        <span>{`}`};</span>
                    </motion.div>

                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="mb-6"
                    >
                        <span className="text-[#569CD6]">private final</span>
                        <span className="text-[#9CDCFE]"> String[]</span>
                        <span className="text-[#DCDCAA]"> tools</span>
                        <span> = {`{`}</span>
                        <span className="text-[#CE9178]">
                            "IntelliJ", "Git", "AWS", "Docker"
                        </span>
                        <span>{`}`};</span>
                    </motion.div>

                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="mb-6"
                    >
                        <span className="text-[#6A9955]">/* Passionate about building scalable and robust backend systems */</span>
                    </motion.div>
                </div>

                <div className="font-mono mt-4">
                    <span className="text-[#d4d4d4]">{`}`}</span>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
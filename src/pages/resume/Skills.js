import React from 'react';
import { motion } from 'framer-motion';


const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
        >
            <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2'>
                <div className="w-full lgl:w-1/2">
                    <div className="py-12 font-titleFont flex flex-col gap-4">
                        <p className="text-sm text-designColor tracking-[4px] uppercase">
                            Tech Stack
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">Software Engineering Skill</h2>
                    </div>
                    <div className='className="mt-14 w-full flex flex-col gap-6'>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">JavaScript</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">85%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">C++</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">70%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">C</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">75%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Python</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">80%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Problem Solving</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">75%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Data Structure</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">70%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Algorithm</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">75%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Database</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">80%</span>
                                </motion.span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full lgl:w-1/2 mr-8">
                    <div className="py-12 font-titleFont flex flex-col gap-4">
                        <p className="text-sm text-designColor tracking-[4px] uppercase">
                            Tech Stack
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">React</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">95%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Node</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">95%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Express</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">85%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">MongoDB, MySql, Firebase</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">85%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Git & Github</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">80%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">HTML, CSS, Bootstrap, Tailwind</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">85%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">JWT, API, Rest API</p>
                            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                                >
                                    <span className="absolute -top-7 right-0">85%</span>
                                </motion.span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;
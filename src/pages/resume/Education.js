import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';


const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
        >
            <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4'>
                <div>
                    <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                        {/* <p className="text-sm text-designColor tracking-[4px]">2005 - 2024</p> */}
                        <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
                    </div>
                    <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                        <ResumeCard
                            title="Bachelor of Science (B.Sc)"
                            subTitle="Computer Science Engineering (CSE) (2018 - 2022)"
                            result="3.11 GPA"
                            des="Bangabandhu Sheikh Mujibur Rahman Science and Technology University"
                        />
                        <ResumeCard
                            title="Higher Secondary Education"
                            subTitle="Science"
                            result="4.08 GPA"
                            des="Government Sundarban Adarsha College ( Jessore Board )"
                        />
                        <ResumeCard
                            title="Secondary School Certificate (SSC)"
                            subTitle="Science"
                            result="4.06 GPA "
                            des="Khulna Government Model School & College( Jessore Board ) "
                        />
                    </div>
                </div>
                {/* part Two */}

                <div>
                    <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                        {/* <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p> */}
                        <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
                    </div>
                    <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                        <ResumeCard
                            title=" Complete Web Development"
                            // subTitle="Udemy - (01/01/2023 - 20/06/2023) [6 months]"
                            result="Online"
                            des="Programming Hero"
                        />
                        <ResumeCard
                            title=" Complete Web Development"
                            // subTitle="Acmegrade (Partner Mood Indigo IIT Bombay) - (10/06/2022 - 30/08/2022) [2-3 months]"
                            result="Physically"
                            des="Future It Park"
                        />
                        <ResumeCard
                            title=" Android Application Development "
                            subTitle="GRAPHACADEMY - (Issued on 4th November 2022)"
                            result="Physically"
                            des=" ICT Training Course: Android Batch ID: L1A-D-09 "
                        />
                    </div>
                </div>
            </div>

        </motion.div>
    );
};

export default Education;
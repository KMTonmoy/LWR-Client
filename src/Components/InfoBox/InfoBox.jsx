import React from 'react';
import CountUp from 'react-countup';
import { RiGroupLine, RiUserLine, RiMedalLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const InfoBox = () => {
    const totalStudents = 250;
    const totalTeachers = 15;
    const averageMarks = 85.5;

    return (
        <div className="container mx-auto py-8 my-10">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                >
                    <div className="p-10 flex flex-col items-center justify-center space-y-4">
                        <RiGroupLine className="text-6xl" />
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-2">Total Students</h3>
                            <CountUp end={totalStudents} duration={2.5} separator="," className="text-3xl font-semibold" />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-r from-green-500 to-teal-600 text-white"
                >
                    <div className="p-10 flex flex-col items-center justify-center space-y-4">
                        <RiUserLine className="text-6xl" />
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-2">Total Teachers</h3>
                            <CountUp end={totalTeachers} duration={2.5} separator="," className="text-3xl font-semibold" />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-r from-yellow-500 to-orange-600 text-white"
                >
                    <div className="p-10 flex flex-col items-center justify-center space-y-4">
                        <RiMedalLine className="text-6xl" />
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-2">Average Marks</h3>
                            <CountUp end={averageMarks} duration={2.5} decimals={1} className="text-3xl font-semibold" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default InfoBox;

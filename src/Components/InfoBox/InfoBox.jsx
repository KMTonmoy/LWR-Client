import React from 'react';
import CountUp from 'react-countup';
import { RiGroupLine, RiUserLine, RiMedalLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const InfoBox = () => {
    // Hardcoded data (replace with actual data or props as needed)
    const totalStudents = 250;
    const totalTeachers = 15;
    const averageMarks = 85.5;

    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Total Students */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-lg overflow-hidden shadow-lg bg-white"
                >
                    <div className="p-10 flex items-center justify-center space-x-2">
                        <RiGroupLine className="text-4xl text-blue-600" />
                        <div>
                            <h3 className="text-lg font-bold mb-2">Total Students</h3>
                            <CountUp end={totalStudents} duration={2.5} separator="," />
                        </div>
                    </div>
                </motion.div>

                {/* Total Teachers */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="rounded-lg overflow-hidden shadow-lg bg-white"
                >
                    <div className="p-10 flex items-center justify-center space-x-2">
                        <RiUserLine className="text-4xl text-green-600" />
                        <div>
                            <h3 className="text-lg font-bold mb-2">Total Teachers</h3>
                            <CountUp end={totalTeachers} duration={2.5} separator="," />
                        </div>
                    </div>
                </motion.div>

                {/* Average Marks */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="rounded-lg overflow-hidden shadow-lg bg-white"
                >
                    <div className="p-10 flex items-center justify-center space-x-2">
                        <RiMedalLine className="text-4xl text-yellow-600" />
                        <div>
                            <h3 className="text-lg font-bold mb-2">Average Marks</h3>
                            <CountUp end={averageMarks} duration={2.5} decimals={1} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default InfoBox;

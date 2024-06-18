import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaGlobe, FaUsers } from 'react-icons/fa';

const About = () => {
    return (
        <div className="container mx-auto px-4 my-10 rounded-sm py-16 bg-gradient-to-b from-blue-100 to-white">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center mb-12"
            >
                <h1 className="text-5xl font-bold text-gray-800 mb-4">About LWR</h1>
                <p className="text-lg text-gray-600">Learn With Rafique (LWR) is your one-stop destination for high-quality online education.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="flex flex-col items-center text-center md:text-left md:items-start p-8 bg-white rounded-lg shadow-lg"
                >
                    <div className="text-5xl text-blue-500 mb-4">
                        <FaBook />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        At LWR, our mission is to provide accessible and affordable education to learners worldwide. We believe in the power of knowledge and strive to create a learning environment that is engaging and effective.
                    </p>
                    <p className="text-lg text-gray-600">
                        Join us on a journey of learning and personal growth, guided by expert instructors and a supportive community.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="flex flex-col items-center text-center md:text-right md:items-end p-8 bg-white rounded-lg shadow-lg"
                >
                    <div className="text-5xl text-blue-500 mb-4">
                        <FaGlobe />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        LWR offers a wide range of courses in various disciplines, from programming and data science to business and arts. Our courses are designed to be interactive and engaging, with practical exercises and real-world projects.
                    </p>
                    <p className="text-lg text-gray-600">
                        We also provide resources such as webinars, tutorials, and community forums to help you on your learning journey.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mt-12 flex justify-center"
            >
                <img src="https://img.freepik.com/free-vector/reading-glasses-concept-illustration_114360-8514.jpg" alt="About LWR" className="w-full max-w-3xl h-auto rounded-lg shadow-lg" />
            </motion.div>
        </div>
    );
};

export default About;

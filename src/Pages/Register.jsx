import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Register = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg"
            >
                <div className="px-6 py-8">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Register</h2>
                    <form className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div>
                                <label htmlFor="username" className=" my-2 block text-lg font-medium text-gray-700 mb-2">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Enter your username"
                                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className=" my-2 block text-lg font-medium text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className=" my-2 block text-lg font-medium text-gray-700 mb-2">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="role" className="block text-lg fon my-2 t-medium text-gray-700 mb-2">Role</label>
                                <select
                                    id="role"
                                    name="role"
                                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base"
                                    required
                                >
                                    <option value="">Select your role</option>
                                    <option value="teacher">Teacher</option>
                                    <option value="student">Student</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="profilePic" className=" my-2 block text-lg font-medium text-gray-700 mb-2">Profile Picture</label>
                                <input
                                    type="file"
                                    id="profilePic"
                                    name="profilePic"
                                    accept="image/*"
                                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base"
                                    required
                                />
                            </div>
                        </motion.div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-4 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
                        >
                            Register
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;

import React from 'react';
import { motion } from 'framer-motion';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg"
            >
                <div className="px-6 py-20">
                    <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Login</h2>
                    <form className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div>
                                <label htmlFor="username" className=" my-2 block text-lg font-medium text-gray-700 mb-2">UserName</label>
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
                        </motion.div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-4 px-8 rounded-lg shadow-md transition duration-300 ease-in-out"
                        >
                            Sign In
                        </motion.button>
                    </form>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex justify-center mt-8"
                    >
                        <button
                            className="flex items-center bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 py-4 px-8 rounded-lg shadow-md transition duration-300 ease-in-out"
                        >
                            <FaGoogle className="text-xl text-red-500 mr-2" />
                            Sign in with Google
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;

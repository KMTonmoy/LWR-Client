import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/xoqgnwlz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Success: show success message with SweetAlert
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'Thank you for contacting us. We will get back to you soon.',
                    confirmButtonColor: '#10B981'
                });

                // Reset form data after successful submission
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                // Error: show error message with SweetAlert
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Please try again later.',
                    confirmButtonColor: '#EF4444'
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Generic error handling if fetch fails
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again later.',
                confirmButtonColor: '#EF4444'
            });
        }
    };

    return (
        <div className="container mx-auto px-4 my-10 rounded-sm py-16 bg-gradient-to-b from-blue-100 to-white">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center mb-12"
            >
                <h1 className="text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
                <p className="text-lg text-gray-600">We'd love to hear from you! Get in touch with us using the form below.</p>
            </motion.div>

            <div className="flex flex-wrap justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-lg mb-8 md:mb-0"
                >
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows="4"
                            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left md:items-start p-8 space-y-6"
                >
                    <div className="text-5xl text-blue-500 mb-4">
                        <FaEnvelope />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
                    <p className="text-lg text-gray-600 mb-4">Feel free to reach out to us via email, phone, or visit our office.</p>
                    <div className="flex flex-col space-y-4 text-lg text-gray-600">
                        <div className="flex items-center">
                            <FaPhone className="mr-2" />(+880) 1790986527
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="mr-2" /> contact@lwr.com
                        </div>
                        <div className="flex items-center">
                            <FaMapMarkerAlt className="mr-2" />
                            Ishwardi, Pabna, Rajshahi
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';

const OurCourses = () => {
    const courses = [
        {
            id: 1,
            image: 'https://via.placeholder.com/300',
            title: 'Web Development',
            description: 'Learn to build modern web applications using HTML, CSS, and JavaScript.',
            admission: 'Open',
            startDate: '2024-07-01',
            endDate: '2024-08-15'
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/300',
            title: 'Data Science',
            description: 'Explore data analysis, machine learning, and data visualization techniques.',
            admission: 'Closed',
            startDate: '2024-07-15',
            endDate: '2024-09-30'
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/300',
            title: 'Mobile App Development',
            description: 'Build native mobile apps for iOS and Android using React Native framework.',
            admission: 'Open',
            startDate: '2024-08-01',
            endDate: '2024-10-15'
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map(course => (
                    <motion.div
                        key={course.id}
                        className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src={course.image} alt={course.title} className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                            <p className="text-gray-700 mb-4">{course.description}</p>
                            <p className="text-sm text-gray-500 mb-2">Admission: <span className={`${course.admission === 'Open' ? 'text-green-500' : 'text-red-500'}`}>{course.admission}</span></p>
                            <p className="text-sm text-gray-500 mb-2">Start Date: {course.startDate}</p>
                            <p className="text-sm text-gray-500 mb-4">End Date: {course.endDate}</p>
                            {course.admission === 'Open' ? (
                                <motion.button
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Enroll Now
                                </motion.button>
                            ) : (
                                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md cursor-not-allowed" disabled>Admission Closed</button>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default OurCourses;

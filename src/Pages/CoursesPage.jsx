import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 6;

    useEffect(() => {
        fetch('http://localhost:9000/course')
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching course data:', error));
    }, []);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1);  
    };

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Our Courses</h2>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 text-center"
            >
                <input
                    type="text"
                    placeholder="Search courses by name..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentCourses.map(course => (
                    <motion.div
                        key={course.id}
                        className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <img src={course.image} alt={course.title} className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                            <p className="text-gray-700 mb-4">{course.description}</p>
                            <p className="text-sm text-gray-500 mb-2">Admission: <span className={`${course.admission === 'Open' ? 'text-green-500' : 'text-red-500'}`}>{course.admission}</span></p>
                            <p className="text-sm text-gray-500 mb-2">Start Date: {course.startDate}</p>
                            <p className="text-sm text-gray-500 mb-4">End Date: {course.endDate}</p>
                            {/* {course.admission === 'Open' ? (
                                <motion.button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Enroll Now
                                </motion.button>
                            ) : (
                                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md cursor-not-allowed" disabled>Admission Closed</button>
                            )} */}

<div className="flex space-x-2">
                                {course.admission === 'Open' ? (
                                    <motion.button
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Enroll Now
                                    </motion.button>
                                ) : (
                                    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md cursor-not-allowed" disabled>Admission Closed</button>
                                )}
                                <Link
                                    to={`/courseDetail/${course._id}`}
                                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out flex items-center justify-center"
                                >
                                    Detail
                                </Link>
                            </div>


                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="flex justify-center mt-8 space-x-2">
                <button
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-800 text-white'}`}
                    onClick={() => handleClick(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <FaAngleLeft />
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index + 1}
                        className={`flex items-center justify-center w-10 h-10 rounded-full ${currentPage === index + 1 ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'}`}
                        onClick={() => handleClick(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-800 text-white'}`}
                    onClick={() => handleClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <FaAngleRight />
                </button>
            </div>
        </div>
    );
};

export default CoursesPage;

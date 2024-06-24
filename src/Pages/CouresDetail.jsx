import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion';

const CourseDetail = () => {
    const data = useLoaderData();

    return (
        <motion.div
            className="my-10 max-w-6xl mx-auto mt-10 bg-white rounded-lg shadow-lg"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img src={data.image} alt={data.title} className="w-full h-full object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg" />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="font-bold text-3xl mb-4 text-gray-900">{data.title}</h2>
                        <p className="text-gray-700 text-lg mb-6">{data.description}</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-sm text-gray-600">
                            Admission: <span className={`text-lg font-semibold ${data.admission === 'Open' ? 'text-green-600' : 'text-red-600'}`}>
                                {data.admission === 'Open' ? 'Open' : 'Admission Closed'}
                            </span>
                        </div>
                        <div className="text-sm text-gray-600">
                            Start Date: <span className="text-gray-800">{data.startDate}</span>
                        </div>
                        <div className="text-sm text-gray-600">
                            End Date: <span className="text-gray-800">{data.endDate}</span>
                        </div>
                        <button
                            className={`mt-4 px-4 py-2 rounded text-white ${data.admission === 'Open' ? 'bg-green-600' : 'bg-gray-400 cursor-not-allowed'}`}
                            disabled={data.admission !== 'Open'}
                        >
                            {data.admission === 'Open' ? 'Enroll' : 'Admission Closed'}
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CourseDetail;

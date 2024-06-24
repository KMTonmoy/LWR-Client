import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPencilAlt } from 'react-icons/fa';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [savingChanges, setSavingChanges] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const userEmail = 'nz@gmail.com'; // Replace with dynamic user email

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:9000/users/${userEmail}`);
                const userData = response.data;
                setUserData(userData);
                setName(userData.name);
                setEmail(userData.email);
                setRole(userData.role);
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [userEmail]);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSaveChanges = async () => {
        try {
            setSavingChanges(true);

            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('role', role);
            if (selectedFile) {
                formData.append('profileImage', selectedFile);
            }

            const response = await axios.put(`http://localhost:9000/users/${userData.email}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Updated user data:', response.data);
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error saving changes:', error);
        } finally {
            setSavingChanges(false);
        }
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    if (!userData) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                No user data found.
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
                <div className="flex justify-end mb-4">
                    <button
                        className="text-purple-700 hover:text-purple-900 focus:outline-none"
                        onClick={handleOpenModal}
                    >
                        <FaPencilAlt className="text-2xl" />
                    </button>
                </div>
                <div className="flex items-center mb-8">
                    <img
                        src={userData.profile}
                        alt="User Profile"
                        className="w-48 h-48 rounded-full mr-6 border-4 border-purple-500"
                    />
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">Name: {name}</h2>
                        <p className="text-lg text-gray-600">Email: {email}</p>
                        <p className="text-lg text-gray-600">Role: {role}</p>
                    </div>
                </div>
                <div className="text-lg text-gray-600">
                    <p>Signup Time: {new Date(userData.timestamp).toLocaleString()}</p>
                    <p>User ID: {userData._id}</p>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-lg animate-fade-in">
                        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
                        <label className="block mb-4">
                            <span className="text-gray-700">Name:</span>
                            <input
                                type="text"
                                className="form-input border-2 p-2 mt-1 block w-full border-gray-300 rounded-md"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label className="block mb-4">
                            <span className="text-gray-700">Email:</span>
                            <input
                                type="email"
                                className="form-input border-2 p-2 mt-1 block w-full border-gray-300 rounded-md"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label className="block mb-4">
                            <span className="text-gray-700">Upload New Profile Image:</span>
                            <input
                                type="file"
                                accept="image/*"
                                className="form-input border-2 p-2 mt-1 block w-full border-gray-300 rounded-md"
                                onChange={handleFileChange}
                            />
                        </label>
                        <label className="block mb-4">
                            <span className="text-gray-700">Current Role:</span>
                            <input
                                type="text"
                                className="form-input border-2 p-2 mt-1 block w-full border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                                value={role}
                                disabled
                            />
                        </label>
                        <div className="flex justify-end">
                            <button
                                className="px-4 py-2 bg-purple-600 text-white rounded-md mr-2 hover:bg-purple-700 focus:outline-none"
                                onClick={handleSaveChanges}
                                disabled={savingChanges}
                            >
                                {savingChanges ? 'Saving...' : 'Save Changes'}
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none"
                                onClick={handleCloseModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;

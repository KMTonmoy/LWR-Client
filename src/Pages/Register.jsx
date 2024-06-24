import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash, FaGoogle } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import { imageUpload } from '../api/utils/index';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const {
        createUser,
        signInWithGoogle,
        updateUserProfile,
    } = useAuth();

    const handleGoogleSignIn = async () => {
        setLoading(true);
        try {
            await signInWithGoogle();
            Swal.fire({
                title: 'Signup Successful',
                text: 'You have successfully signed up.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            navigate('/');
        } catch (err) {
            Swal.fire({
                title: 'Signup Failed',
                text: err.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        } finally {
            setLoading(false);
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const imageUrl = await imageUpload(image);
            await createUser(email, password);
            await updateUserProfile(name, imageUrl);
            Swal.fire({
                title: 'Signup Successful',
                text: 'You have successfully signed up.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            navigate('/');
        } catch (err) {
            Swal.fire({
                title: 'Signup Failed',
                text: err.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Sign Up</h2>
                <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            required
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            required
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 focus:outline-none"
                        >
                            {showPassword ? <FaRegEyeSlash className="text-lg" /> : <FaRegEye className="text-lg" />}
                        </button>
                    </div>
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Picture</label>
                        <input
                            id="image"
                            type="file"
                            onChange={handleImageChange}
                            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-lg font-semibold text-white bg-gradient-to-r from-purple-400 to-purple-600 rounded-md hover:from-purple-500 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        {loading ? <span className="loading loading-bars loading-lg"></span> : 'Sign Up'}
                    </button>
                </form>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={handleGoogleSignIn}
                        className="flex items-center px-4 py-2 text-lg font-semibold text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                    >
                        {loading ? <span className="loading loading-bars loading-lg"></span> : <><FaGoogle className="mr-2" />Sign Up with Google</>}
                    </button>
                </div>
                <div className="text-sm text-gray-600 text-center mt-4">
                    Already have an account?{' '}
                    <Link to="/login" className="text-purple-700 hover:underline">Log in here</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;

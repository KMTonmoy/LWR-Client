import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const logout = () => {
        logOut()
    }



    return (
        <motion.div
            className="navbar bg-gradient-to-r from-purple-800 to-indigo-800 text-white px-5 relative z-10"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="navbar-start">
                <div className="dropdown relative">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <motion.ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-white rounded-box w-52 text-gray-800 absolute top-full left-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <li><NavLink to='/Home'>Home</NavLink></li>
                        <li><NavLink to='/Courses'>Courses</NavLink></li>
                        <li><NavLink to='/About'>About</NavLink></li>
                        <li><NavLink to='/Contact'>Contact</NavLink></li>
                    </motion.ul>
                </div>
                <NavLink to='/' className="flex flex-col items-start">
                    <span className='font-bold text-3xl tracking-wide '>LWR</span>
                    <span className="text-white font-semibold text-lg">Learn With Rofique</span>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/' className="text-white">Home</NavLink></li>
                    <li><NavLink to='/Courses' className="text-white">Courses</NavLink></li>
                    <li><NavLink to='/About' className="text-white">About</NavLink></li>
                    <li><NavLink to='/Contact' className="text-white">Contact</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end relative">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full overflow-hidden">
                            {user ? (
                                <img src={user.photoURL} alt="User Avatar" />
                            ) : (
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZv5fMEw3s3nvP0sxLIG8bO6RzCLmqgzW5ww&s" alt="User Avatar" />
                            )}
                        </div>
                    </label>
                    <motion.ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-white rounded-box w-52 text-gray-800 absolute top-full right-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {user ? (
                            <>
                                <li>{user.displayName}</li>
                                <li><NavLink to='/Dashboard'>DashBoard</NavLink></li>
                                <li><NavLink to='/Profile'>Profile</NavLink></li>
                                <li><NavLink to='/Setting'>Settings</NavLink></li>
                                <li><button onClick={logout}>Logout</button></li>
                            </>
                        ) : (
                            <>
                                <li><NavLink to='/Login'>Login</NavLink></li>
                                <li><NavLink to='/Register'>Register</NavLink></li>
                            </>
                        )}
                    </motion.ul>
                </div>
            </div>
        </motion.div>
    );
};

export default Navbar;

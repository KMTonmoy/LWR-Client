import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-gray-800 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Study Resources */}
                    <div className="footer-section">
                        <h6 className="footer-title mb-4">Study Resources</h6>
                        <ul className="footer-links">
                            <li><a href="#!" className="link link-hover block mb-2">Courses</a></li>
                            <li><a href="#!" className="link link-hover block mb-2">Study Guides</a></li>
                            <li><a href="#!" className="link link-hover block mb-2">Tutorials</a></li>
                            <li><a href="#!" className="link link-hover block mb-2">Practice Tests</a></li>
                        </ul>
                    </div>
                    
                    {/* Academic Support */}
                    <div className="footer-section">
                        <h6 className="footer-title mb-4">Academic Support</h6>
                        <ul className="footer-links">
                            <li><a href="#!" className="link link-hover block mb-2">FAQs</a></li>
                            <li><a href="#!" className="link link-hover block mb-2">Contact Us</a></li>
                            <li><a href="#!" className="link link-hover block mb-2">Student Resources</a></li>
                            <li><a href="#!" className="link link-hover block mb-2">Support</a></li>
                        </ul>
                    </div>
                    
                    {/* About */}
                    <div className="footer-section">
                        <h6 className="footer-title mb-4">About</h6>
                        <ul className="footer-links">
                            <li><a href="#!" className="link link-hover block mb-2">About Us</a></li>
                            <li><a href="#!" className="link link-hover block mb-2">Mission</a></li>
                            <li><a href="#!" className="link link-hover block mb-2">Team</a></li>
                            <li><a href="#!" className="link link-hover block mb-2">Partnerships</a></li>
                        </ul>
                    </div>
                    
                    {/* Newsletter */}
                    <div className="footer-section">
                        <h6 className="footer-title mb-4">Newsletter</h6>
                        <form className="flex flex-col md:flex-row">
                            <input type="email" placeholder="Enter your email address" className="input input-bordered join-item mb-2 md:mr-2" />
                            <button type="submit" className="btn btn-primary join-item">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Faq = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="my-10">
                <h1 className="text-3xl font-bold mb-6 text-center my-3">FAQ - Ask Questions</h1>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/4752/direct/1709664714926-1709664714926.png" className="w-full md:w-1/2 rounded-lg shadow-2xl" alt="Helpjuice Logo" />
                        <div className="ml-4 mt-4 lg:mt-0 w-full lg:w-1/2">
                            <div className="collapse collapse-plus bg-gray-100 rounded-lg shadow-md mb-4">
                                <input type="radio" id="faq1" name="my-accordion-3" defaultChecked />
                                <label htmlFor="faq1" className="collapse-title block cursor-pointer text-xl font-medium px-4 py-3">
                                    How do I get started?
                                </label>
                                <div className="collapse-content px-4 pb-3">
                                    <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et porttitor ante.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-gray-100 rounded-lg shadow-md mb-4">
                                <input type="radio" id="faq2" name="my-accordion-3" />
                                <label htmlFor="faq2" className="collapse-title block cursor-pointer text-xl font-medium px-4 py-3">
                                    What payment methods do you accept?
                                </label>
                                <div className="collapse-content px-4 pb-3">
                                    <p className="text-gray-800">Suspendisse potenti. Nullam elementum ex id eros tincidunt vehicula.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-gray-100 rounded-lg shadow-md mb-4">
                                <input type="radio" id="faq3" name="my-accordion-3" />
                                <label htmlFor="faq3" className="collapse-title block cursor-pointer text-xl font-medium px-4 py-3">
                                    Is there a free trial available?
                                </label>
                                <div className="collapse-content px-4 pb-3">
                                    <p className="text-gray-800">Integer maximus velit eu eros ultricies vestibulum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;

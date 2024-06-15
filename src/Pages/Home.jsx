import React from 'react';
import Banner from '../Components/Header/Banner';
import InfoBox from '../Components/InfoBox/InfoBox';
import OurCourses from '../Components/OurCources/OurCourses';
import Faq from '../Components/Faq/Faq';

const Home = () => {
    return (
        <div>
            <Banner />
            <InfoBox></InfoBox>
            <OurCourses></OurCourses>
            <Faq></Faq>
        </div>
    );
};

export default Home;
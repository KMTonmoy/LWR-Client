import React from 'react';
import Banner from '../Components/Header/Banner';
import InfoBox from '../Components/InfoBox/InfoBox';
import OurCourses from '../Components/OurCources/OurCourses';

const Home = () => {
    return (
        <div>
            <Banner />
            <InfoBox></InfoBox>
            <OurCourses></OurCourses>
        </div>
    );
};

export default Home;
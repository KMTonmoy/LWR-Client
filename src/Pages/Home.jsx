import React, { useContext } from 'react';
import Banner from '../Components/Header/Banner';
import InfoBox from '../Components/InfoBox/InfoBox';
import OurCourses from '../Components/OurCources/OurCourses';
import Faq from '../Components/Faq/Faq';
import { AuthContext } from '../providers/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext)
    console.log(user?.email)
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
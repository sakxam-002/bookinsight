
import React from 'react';
import HomeSlider from '../../components/01-homeComponents/homeCarousel';
import './01-home.css'
import ServicesGrid from '../../components/user/homepage-components/servicesGrid';
const Home = () => {
    return (
        <>
        <div className="home-page">
        <HomeSlider />
        </div>
        <ServicesGrid/>
        </>
    )
}

export default Home
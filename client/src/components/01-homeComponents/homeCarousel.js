// src/components/HomeSlider.js
import React from 'react';
import Slider from 'react-slick';
// import { baseUrl } from "./config";

function HomeSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div class="slider-container">
                    <img src='calendar.jpg' alt="Slide 1" />
                </div>
                <div class="slider-container">
                    <img src='punctual.jpg' alt="Slide 2" />
                </div>
                <div class="slider-container">
                    <img src='productive.jpg' alt="Slide 3" />
                </div>
            </Slider>
        </div>
    );
}

export default HomeSlider;

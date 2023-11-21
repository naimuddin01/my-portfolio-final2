import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Banner = (prjImg) => {
    return (
        <>
            <Carousel>
                <div>
                    <img src={prjImg} />
                </div>
            </Carousel>
        </>
    );
};

export default Banner;
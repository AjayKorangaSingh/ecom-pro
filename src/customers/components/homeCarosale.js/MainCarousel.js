import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { homeCaroselData } from './homeCarouselData';


const items = homeCaroselData.map((ele)=>{
    return(
        <div className='imageHandler'>
            <img src={ele.image} alt='ele' className='cursor-pointer -z-10' role='presentation'/>
        </div>
    ) 
})

export const MainCarousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={10000}
        infinite
    />
);
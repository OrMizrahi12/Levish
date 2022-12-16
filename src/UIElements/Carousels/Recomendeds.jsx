import React from 'react'
import '../../css/Carousels/Recomendeds.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { RecomendedsAr } from '../../Data/RecomendedArr';

const Recomendeds = () => {

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    
    return (
        <>
            <div className="imgslider" id='recomenAnchor'>
                <Slider {...settings}>
                    {RecomendedsAr.map((item) => (
                        <div style={{textAlign:"center"}}>
                            <div id="testimonial-slider" class="owl-carousel mx-auto">
                                <div class="testimonial">
                                    <div class="pic">
                                        <img src={item.img} />
                                    </div>
                                    <p class="description">
                                        {item.description}
                                    </p>
                                    <h3 class="title">{item.name}</h3>
                                    <small class="post">- {item.care}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default Recomendeds
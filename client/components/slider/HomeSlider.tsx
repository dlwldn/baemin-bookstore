import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Slider from 'react-slick';

import Slide1 from '../../asset/images/slide-1.gif';
import Slide2 from '../../asset/images/slide-2.gif';
import Slide3 from '../../asset/images/slide-3.gif';
/* Constants =========================================================== */
const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000, 
    slidesToShow: 1,
    slidesToScroll: 1
  };
/* Prop =========================================================== */
type Prop = {};
/* <Slider/> =========================================================== */
const SliderWrap = styled.div`
    width: 100%;
`;

const StyledSlider = styled(Slider)`
    .slick-dots {
        bottom: 15px;
        > li {
            margin: 0 2px;

            button::before {
                font-size: 12px;
            }
        }
    }

    .slick-arrow {
        display: none !important;
    }

    .slick-active {
        > button::before {
            color: #fff !important;
        }
    }
`

const ImageWrap = styled.div`
    height: 500px;
    > div {
        height: 100%;
        > img {
            /* object-fit: cover; */
        }
    }
`

export default function HomeSlider() {
    return (
        <SliderWrap>
            <StyledSlider {...settings}>
                <ImageWrap>
                    <Image className="slide-image" src={Slide1} objectFit="cover"/>
                </ImageWrap>
                <ImageWrap>
                    <Image className="slide-image" src={Slide2} objectFit="cover"/>
                </ImageWrap>
                <ImageWrap>
                    <Image className="slide-image" src={Slide3} objectFit="cover"/>
                </ImageWrap>
            </StyledSlider>
        </SliderWrap>
    );
}
HomeSlider.defaultProps = {};

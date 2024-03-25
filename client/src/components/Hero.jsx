import React from 'react'
import { useColorModeValue } from '@chakra-ui/react';
import { Box, Text, Heading, Button} from '@chakra-ui/react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

// images
import laptop from '../assets/surface-laptop-studio.png';
import mobile from '../assets/Apple-Iphone.png';
import moyoduduza from '../assets/Print-Shirt1.png';
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
  
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", 
          
      }}
      onClick={onClick}
    />
  );
}

export default function Hero() {
    const settings = {
        dots: true,
        infinite: true,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
      };

      
  return (
    <section className="w-full flex justify-between">
        <Slider {...settings} className="md:h-[80vh] h-[100%] w-full">
          <div className=" w-full h-full p-10 text-black">
            <div className="flex justify-around items-center md:flex-row flex-col">
              <div className="md:w-[55%] w-full">
                <Heading color={useColorModeValue('black', 'white')} fontWeight={500} fontSize={{md: '3rem', base:'2rem'}} className='pt-3 md:text-6xl text-4xl font-semibold text-center'>Get Start <br/> Your Favorite Shopping</Heading>
                <Text color={useColorModeValue('black', 'white')} fontWeight={500} fontSize={{md: '1rem', base:'16'}} className='pt-3 text-xl font-semibold text-center'>Save more with coupons & up to 70% off!</Text>
                <div className="flex justify-center mt-5">
                  <Button color={useColorModeValue('black', 'white')} type='button'><Link to="/">Shop Now</Link></Button>
                </div>
              </div>
              <div className=" md:w-[40%] w-full md:h-[70vh] h-[300px] flex justify-center items-center">
                <img src={mobile} alt="" className='max-w-full md:max-h-[100%] max-h-[100%] '/>
              </div>
            </div>
          </div>
          <div className=" w-full h-full p-10 text-black">
            <div className="flex justify-around items-center md:flex-row flex-col">
              <div className="md:w-[55%] w-full">
                <Heading color={useColorModeValue('black', 'white')} fontWeight={500} fontSize={{md: '3rem', base:'2rem'}} className='pt-3 md:text-6xl text-4xl font-semibold text-center'>Get Start <br/> Your Favorite Shopping</Heading>
                <Text color={useColorModeValue('black', 'white')} fontWeight={500} fontSize={{md: '1rem', base:'16'}} className='pt-3 text-xl font-semibold text-center'>Save more with coupons & up to 70% off!</Text>
                <div className="flex justify-center mt-5">
                  <Button color={useColorModeValue('black', 'white')} type='button'><Link to="/">Shop Now</Link></Button>
                </div>
              </div>
              <div className="md:w-[40%] w-full md:h-[70vh] h-[300px] flex justify-center items-center">
                <img src={laptop} alt="" className='max-w-full md:max-h-[100%] max-h-[100%] '/>
              </div>

            </div>
          </div>
          <div className=" w-full h-full p-10 text-black">
            <div className="flex justify-around items-center md:flex-row flex-col">
              <div className="md:w-[55%] w-full">
                <Heading color={useColorModeValue('black', 'white')} fontWeight={500} fontSize={{md: '3rem', base:'2rem'}} className='pt-3 md:text-6xl text-4xl font-semibold text-center'>Get Start <br/> Your Favorite Shopping</Heading>
                <Text color={useColorModeValue('black', 'white')} fontWeight={500} fontSize={{md: '1rem', base:'16'}} className='pt-3 text-xl font-semibold text-center'>Save more with coupons & up to 70% off!</Text>
                <div className="flex justify-center mt-5">
                  <Button color={useColorModeValue('black', 'white')} type='button'><Link to="/">Shop Now</Link></Button>
                </div>
              </div>
              <div className="md:w-[40%] w-full md:h-[70vh] h-[300px] flex justify-center items-center">
                <img src={moyoduduza} alt="" className='max-w-full md:max-h-[100%] max-h-[100%] '/>
              </div>

            </div>
          </div>
        </Slider>
      </section>
  )
}

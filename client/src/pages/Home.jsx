import React from 'react'
import Header from '../components/Header';
import { useColorModeValue } from '@chakra-ui/react';
import { Box, } from '@chakra-ui/react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

// images
import laptop from '../assets/surface-laptop-studio.png';
import mobile from '../assets/Apple-Iphone.png';
import moyoduduza from '../assets/Print-Shirt1.png';
import { Link } from 'react-router-dom';


export default function Home() {

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

  };

  return (
    <div>
      {/* <Header/> */}
      <section className="w-full flex justify-between">
        <Slider {...settings} className="md:h-[80vh] h-[100%] w-full">
          <div className=" w-full h-full p-10 text-slate-800">
            <div className="flex justify-around items-center md:flex-row flex-col">
              <div className="md:w-[55%] w-full">
                <h2 className='pt-3 md:text-6xl text-4xl font-semibold text-center'>Get Start <br/> Your Favorite Shopping</h2>
                <p className='pt-3 text-xl font-semibold text-center'>Save more with coupons & up to 70% off!</p>
                <div className="flex justify-center mt-5">
                  <button type='button ' className='p-2 mb-3 bg-slate-800 rounded w-[130px] text-white font-semibold hover:bg-yellow-500 duration-200 '><Link to="/">Shop Now</Link></button>
                </div>
              </div>
              <div className=" md:w-[40%] w-full md:h-[70vh] h-[300px] flex justify-center items-center">
                <img src={mobile} alt="" className='max-w-full md:max-h-[100%] max-h-[100%] '/>
              </div>
            </div>
          </div>
          <div className=" w-full h-full p-10 text-slate-800">
            <div className="flex justify-around items-center md:flex-row flex-col">
              <div className="md:w-[55%] w-full">
                <h2 className='pt-3 md:text-6xl text-4xl font-semibold text-center'>Get Start <br/> Your Favorite Shopping</h2>
                <p className='pt-3 text-xl font-semibold text-center'>Save more with coupons & up to 70% off!</p>
                <div className="flex justify-center mt-5">
                  <button type='button ' className='p-2 mb-3 bg-slate-800 rounded w-[130px] text-white font-semibold hover:bg-yellow-500 duration-200 '><Link to="/">Shop Now</Link></button>
                </div>
              </div>
              <div className="md:w-[40%] w-full md:h-[70vh] h-[300px] flex justify-center items-center">
                <img src={laptop} alt="" className='max-w-full md:max-h-[100%] max-h-[100%] '/>
              </div>

            </div>
          </div>
          <div className=" w-full h-full p-10 text-slate-800">
            <div className="flex justify-around items-center md:flex-row flex-col">
              <div className="md:w-[55%] w-full">
                <h2 className='pt-3 md:text-6xl text-4xl font-semibold text-center'>Get Start <br/> Your Favorite Shopping</h2>
                <p className='pt-3 text-xl font-semibold text-center'>Save more with coupons & up to 70% off!</p>
                <div className="flex justify-center mt-5">
                  <button type='button ' className='p-2 mb-3 bg-slate-800 rounded w-[130px] text-white font-semibold hover:bg-yellow-500 duration-200 '><Link to="/">Shop Now</Link></button>
                </div>
              </div>
              <div className="md:w-[40%] w-full md:h-[70vh] h-[300px] flex justify-center items-center">
                <img src={moyoduduza} alt="" className='max-w-full md:max-h-[100%] max-h-[100%] '/>
              </div>

            </div>
          </div>
        </Slider>
        {/* <div className=""></div> */}
        {/* <div className="w-[40%] p-5">
        </div> */}
      </section>
      hhhhd
    </div>
  )
}

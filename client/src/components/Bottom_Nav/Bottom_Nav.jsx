import { Text } from '@chakra-ui/react';
import React from 'react';
import { GoHomeFill } from "react-icons/go";
import { LuTag } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import Search from './Search/Search';

export default function Bottom_Nav() {
  return (
    <div className='block md:hidden fixed bottom-0 bg-white w-full py-3 px-4 text-black'>
        <div className="flex justify-between items-center">
            <div className="flex justify-center flex-col items-center text-pink-500 hover:text-black">
                <div className="">
                    <GoHomeFill className='font-semibold text-[17px]'/>
                </div>
                <div className="">
                    <Text className='text-[12px]'>Home</Text>
                </div>
            </div>
            <div className="flex justify-center flex-col items-center hover:text-pink-500">
                <div className="">
                    <LuTag className='font-semibold text-[17px]'/>
                </div>
                <div className="">
                    <Text className='text-[12px]'>Deal</Text>
                </div>
            </div>
            <div className="flex justify-center flex-col items-center hover:text-pink-500">
                <div className="">
                    <MdOutlineShoppingCart className='font-semibold text-[17px]'/>
                </div>
                <div className="">
                    <Text className='text-[12px]'>Order</Text>
                </div>
            </div>
            <div className="flex justify-center flex-col items-center hover:text-pink-500">
                <div className="">
                    {/* <MdSearch className='font-semibold text-[17px]'/> */}
                    <Search/>
                </div>
                <div className="">
                    <Text className='text-[12px]'>Search</Text>
                </div>
            </div>
            <div className="flex justify-center flex-col items-center hover:text-pink-500">
                <div className="">
                    <CgMenuRight className='font-semibold text-[17px]'/>
                </div>
                <div className="">
                    <Text className='text-[12px]'>More</Text>
                </div>
            </div>
        </div>
    </div>
  )
}

import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from 'react-icons/io5';
import { FaCartPlus } from "react-icons/fa";
import {Icon } from '@chakra-ui/react';
import { IoSettingsOutline } from "react-icons/io5";
import { MdSearch } from "react-icons/md";

import { Box, Flex, Text, Input, Button  } from '@chakra-ui/react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

import Sidebar from "./Sidebar";
import Themes from './Themes';
import HeaderAccordion from './HeaderAccordion';

export default function Header() {

    return (
      <>
        <div className=''>
            <Box bg={useColorModeValue('gray.700', 'gray.700')} color={'white'} borderBottomColor={useColorModeValue('', 'white')} borderBottom={'0px'} className="header font-medium text-sm py-2 px-4 flex md:justify-around justify-between items-center">
                <div className="">
                    <Link to='tel:+2347047594667' className='text-sm'>Telephone Enquiry: (+234) 704 7594 667</Link>
                </div>
                <div className="">
                    <div className=" flex gap-x-2">
                        <Link to='#'><FaFacebookF className="text-1xl text-1xl duration-200 hover:-translate-y-1"/></Link>
                        <Link to='#'><FaInstagram className="text-1xl text-1xl duration-200 hover:-translate-y-1"/></Link>
                        <Link to='#'><FaTwitter className="text-1xl text-1xl duration-200 hover:-translate-y-1"/></Link>
                        <Link to='#'><IoLogoYoutube className="text-1xl text-1xl duration-200 hover:-translate-y-1"/></Link>
                    </div>
                </div>
                <Menu className="">
                    <MenuButton display={{base: 'none', md: 'block'}} bg={'transparent'} height={'30px'} color={'white'} _hover={{bg: 'transparent'}} as={Button} _focus={{bg: 'transparent'}} rightIcon={<ChevronDownIcon/>}>Settings</MenuButton>
                    <MenuList p={3} bg={useColorModeValue('white')}>
                        <MenuItem _hover={{bg: 'gray.800',}} bg={useColorModeValue('#000', 'gray.600')} rounded={5} padding={2.5} mb={3} transitionDuration={200} className='hover:-translate-y-1'>
                            <Link to='/' className="">My Account</Link>
                        </MenuItem>
                        <MenuItem _hover={{bg: 'gray.800',}} bg={useColorModeValue('#000', 'gray.600')} rounded={5} padding={2.5} mb={3} transitionDuration={200} className='hover:-translate-y-1'>
                            <Link to='/' className="">Checkout</Link>
                        </MenuItem>
                        <MenuItem _hover={{bg: 'gray.800',}} bg={useColorModeValue('#000', 'gray.600')} rounded={5} padding={2.5} mb={3} transitionDuration={200} className='hover:-translate-y-1'>
                            <Link to='/signin' className=''>Sign In</Link> 
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <div className="shadow-md py-3 px-4 flex flex-wrap justify-between items-center">
                <div className="logo">
                    <h1 className='text-2xl font-medium text'>Ade<span className=''>-Shopify</span></h1>
                </div>
                <div className="w-[30%] rounded hidden md:block">
                    <form className='w-[100%] relative'>
                        <div className="">
                            <Input type="text" placeholder='Search For Products' border={'2px'} color={useColorModeValue('black', 'white')} focusBorderColor='white' borderColor={useColorModeValue('#000', 'gray.700')} outline={'none'} className='font-semibold rounded outline-none p-2 w-[100%]'/>
                            <Box bg={useColorModeValue('#000', 'gray.700')} className="absolute top-0 right-0 flex justify-center items-center w-[45px] h-full rounded-r-md cursor-pointer ">
                                <Icon as={MdSearch} color={useColorModeValue('white', 'black')} fontSize={20}/>
                            </Box>
                        </div>
                    </form>
                </div>
                <div  className="relative w-[130px] rounded font-medium ">
                    <Flex alignItems={'center'}>
                        <Flex alignItems={'center'} cursor={'pointer'}>
                            <Text boxSize={'25px'} bg={useColorModeValue('red.600', '#fff')} color={useColorModeValue('white', 'black')} borderRadius={50} position={'absolute'} top={-1} left={-5} fontSize={16} className='flex items-center justify-center'>0</Text>
                            <Box mr={3}>
                                <Icon as={FaCartPlus} color={useColorModeValue('#000', 'white')}/>
                            </Box>
                            <Box display={{base: 'none', md: 'block'}}>
                                <Themes/>
                            </Box>
                        </Flex>
                        <Sidebar/>
                    </Flex>
                </div>
            </div>
            {/* <HeaderAccordion/> */}
        </div>
      </>
    )
}


{/* */}
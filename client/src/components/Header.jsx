import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from 'react-icons/io5';
import { TbCurrencyNaira } from "react-icons/tb";
import { FaCartPlus } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { MdSearch } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export default function Header() {
    
    return (
      <>
        <div className=''>
            <div className="header1 bg-slate-200 font-semibold text-sm py-2 px-4 flex justify-around items-center md:flex-row flex-col flex-wrap">
                <div className="">
                    <Link to='tel:+2347047594667' className='text-sm'>Telephone Enquiry: (+234) 704 7594 667</Link>
                </div>
                <div className="md:block hidden">
                    <div className=" flex gap-x-2">
                        <Link to='#'><FaFacebookF className="text-1xl text-1xl duration-200 hover:-translate-y-1"/></Link>
                        <Link to='#'><FaInstagram className="text-1xl text-1xl duration-200 hover:-translate-y-1"/></Link>
                        <Link to='#'><FaTwitter className="text-1xl text-1xl duration-200 hover:-translate-y-1"/></Link>
                        <Link to='#'><IoLogoYoutube className="text-1xl text-1xl duration-200 hover:-translate-y-1"/></Link>
                    </div>
                </div>
                <div className="md:block hidden">
                    <div className="flex items-center justify-center gap-x-3">
                        <div className="flex">
                            <div className="relative dropDownCont">
                                <p>Setting</p>
                                <div className="dropDownList flex flex-col items-center justify-center gap-3 absolute md:-left-10 -left-10 mt-2 h-[0px] overflow-hidden duration-200 w-[160px] bg-slate-100 z-10">
                                    <Link to='/' className="p-2 bg-slate-700 hover:bg-slate-800 duration-200 text-white w-full rounded">My Account</Link>
                                    <Link to='/' className="p-2 bg-slate-700 hover:bg-slate-800 duration-200 text-white w-full rounded">Checkout</Link>
                                    <Link to='/signin' className='p-2 bg-slate-700 hover:bg-slate-800 duration-200 text-white w-full rounded'>Sign In</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:hidden block w-full">
                    <div className="flex justify-between w-full">
                        <div className=" flex gap-x-2">
                            <Link to='#'><FaFacebookF className="text-xl animate-bounce delay-0  text-1xl duration-200 hover:-translate-y-1 text-slate-600"/></Link>
                            <Link to='#'><FaInstagram className="text-xl animate-bounce delay-100  text-1xl duration-200 hover:-translate-y-1 text-slate-600"/></Link>
                            <Link to='#'><FaTwitter className="text-xl animate-bounce delay-200  text-1xl duration-200 hover:-translate-y-1 text-slate-600"/></Link>
                            <Link to='#'><IoLogoYoutube className="text-xl animate-bounce delay-300  text-1xl duration-200 hover:-translate-y-1 text-slate-600"/></Link>
                        </div>
                        <div className="flex items-center justify-center gap-x-3">
                            <div className="flex">
                                <div className="relative dropDownCont">
                                    <IoSettingsOutline className="text-xl cursor-pointer font-semibold text-slate-600"/>
                                    <div className="dropDownList flex flex-col items-center justify-center gap-3 absolute right-0 mt-2 h-[0px] overflow-hidden duration-200 w-[160px] bg-slate-100 z-10">
                                        <Link to='/' className="p-2 bg-slate-600 hover:bg-slate-700 duration-200 text-white w-full rounded font-semibold">My Account</Link>
                                        <Link to='/' className="p-2 bg-slate-600 hover:bg-slate-700 duration-200 text-white w-full rounded font-semibold">Checkout</Link>
                                        <Link to='/signin' className='p-2 bg-slate-600 hover:bg-slate-700 duration-200 text-white w-full rounded font-semibold'>Sign In</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 px-4 flex flex-wrap justify-between items-center">
                <div className="logo">
                    <h1 className='text-3xl font-semibold text'>Ade<span className=''>Shopify</span></h1>
                </div>
                <div className="w-[30%] rounded hidden md:block">
                    <form className='w-[100%] relative'>
                        <div className="">
                            <input type="text" placeholder='Search For Products' className='bg-slate-200 text-black font-semibold rounded outline-none p-2 w-[100%]'/>
                            <div className="bg-slate-700 absolute top-0 right-0 flex justify-center items-center w-[45px] h-full rounded-r-md cursor-pointer ">
                                <MdSearch className="text-2xl font-bold text-slate-50 text-center"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div  className="relative p-2 w-[130px] rounded font-semibold text-slate-50 bg-slate-700">
                    <div  className="absolute -top-2 -left-2 w-[25px] h-[25px] bg-slate-700 rounded-full flex justify-center font-semibold">
                        <p className=''>5</p>
                    </div>
                    <div className="dropDownCont">
                        <div className="flex items-center justify-center gap-2">
                            <FaCartPlus className='text-xl'/>
                            <span>|</span>
                            <h2 className='flex items-center'><TbCurrencyNaira className='text-xl'/> <span>5000</span></h2>
                        </div>
                        <div className="dropDownList flex flex-col items-center justify-center gap-3 absolute right-0 mt-2 h-[0px] w-[300px] overflow-hidden duration-200">

                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="bg-slate-700 border-b-2 border-white text-slate-50 flex justify-start gap-3 font-semibold text-1x p-3">
                    <div className="flex gap-3">
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About Us</Link>
                    </div>
                    <div className="flex justify-center gap-4">
                        <div className="dropDownCont2">
                            <div className="flex items-center justify-center gap-2">
                                <h3>Women's Wear</h3>
                            </div>
                            <div className="dropDownList z-10 text-black flex flex-col gap-3 absolute mt-3 h-[0px] w-[50%] shadow-md overflow-hidden duration-200 bg-slate-200">
                                <Link className="py-2 text-slate-50 bg-slate-600 px-4 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Shirt</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Gown</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Sheath Dress</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Skirt</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Cardigan</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Mini Dress</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Wedding Dress</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Hoodie</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Jeans</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Top</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Corset</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Bubble Dress</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Coat</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Bootcut</Link>
                            </div>
                        </div>
                        <div className="dropDownCont2">
                            <div className="flex items-center justify-center gap-2">
                                <h3>Men's Wear</h3>
                            </div>
                            <div className="dropDownList z-10 text-black flex flex-col gap-3 absolute mt-3 h-[0px] w-[50%] shadow-md overflow-hidden duration-200 bg-slate-200">
                                <Link className="py-2 text-slate-50 bg-slate-600 px-4 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Shirt</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Polo Shirt</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Jeans</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Shorts</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Hoodie</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Cardigan</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Gloves</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Boots</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Bathrobe</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Tie</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Baggy</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Singlet</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Long Sleeve Top</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Sandals</Link>
                            </div>
                        </div>
                        <div className="dropDownCont2">
                            <div className="flex items-center justify-center gap-2">
                                <h3>Electronics</h3>
                            </div>
                            <div className="dropDownList text-black z-10 flex flex-col gap-3 absolute mt-3 h-[0px] w-[50%] shadow-md overflow-hidden duration-200 bg-slate-200">
                                <Link className="py-2 text-slate-50 bg-slate-600 px-4 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Air Conditioner</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Air Purifier</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Dish Washer</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Fan</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Kettle</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Iron</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Kitchen Scale</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Eelectric Stove</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Electric Pencil Sharper</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Electric Guitar</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Doorbell Camera</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Dishwasher</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Coffee Maker</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Ceiling fan</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Blender</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Washing Machine</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Alarm Clock</Link>
                                <Link className="py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded">Bluetooth Speaker</Link>
                            </div>
                        </div>
                        <div className="dropDownCont2">
                            <div className="flex items-center justify-center gap-2">
                                <h3>Laptop</h3>
                            </div>
                            <div className="dropDownList z-10 text-black flex flex-col gap-3 absolute mt-3 h-[0px] w-[50%] shadow-md overflow-hidden duration-200 bg-slate-200">
                                <Link className='py-2 text-slate-50 bg-slate-600 px-4 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Hp</Link>
                                <Link className='py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Msi</Link>
                                <Link className='py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Dell</Link>
                                <Link className='py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Acer</Link>
                                <Link className='py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Asus</Link>
                                <Link className='py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Acer</Link>
                                <Link className='py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Apple</Link>
                                <Link className='py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Lenovo</Link>
                                <Link className='py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Microsoft</Link>
                                <Link className='py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>MacBook Air</Link>
                            </div>
                        </div>
                        <div className="dropDownCont2">
                            <div className="flex items-center justify-center gap-2">
                                <h3>Phones</h3>
                            </div>
                            <div className="dropDownList z-10 text-black flex flex-col gap-3 absolute mt-3 h-[0px] w-[50%] shadow-md overflow-hidden duration-200 bg-slate-200">
                                <Link className='py-2 text-slate-50 bg-slate-600 px-4 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Apple</Link>
                                <Link className='py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Samsung</Link>
                                <Link className='py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Xiaomi</Link>
                                <Link className='py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Huawei</Link>
                                <Link className='py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Nokia</Link>
                                <Link className='py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Oppo</Link>
                                <Link className='py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Vivo</Link>
                                <Link className='py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Techno</Link>
                                <Link className='py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Itel</Link>
                                <Link className='py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Infinix</Link>
                                <Link className='py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Alcatel</Link>
                                <Link className='py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>Microsoft</Link>
                                <Link className='py-1 hover:bg-slate-600 hover:text-slate-50 hover:px-4 hover:py-2 duration-200 rounded'>ZTE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Link>Contact Us</Link>
                    </div>
                </div>
            </div>
            <div className=" block md:hidden ">
                <div className="bg-slate-700 border-b-2 border-white p-2 flex justify-between">
                    <div className="w-[90%] rounded">
                        <form className='w-[100%] relative'>
                            <div className="">
                                <input type="text" placeholder='Search For Products' className='bg-slate-200 text-black font-semibold rounded outline-none p-2 w-[100%]'/>
                                <div className="bg-white absolute top-0 right-0 flex justify-center items-center w-[45px] h-full rounded-r-sm cursor-pointer ">
                                    <MdSearch className="text-2xl font-bold text-slate-800 text-center"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="sidebar_cont">
                        <div className="side_menu flex justify-end">
                            <div className="bg-white p-1 rounded">
                                <RiMenu3Fill className='text-3xl cursor-pointer'/>
                            </div>
                        </div>
                        <div className="sidemenu w-0 z-10 fixed top-0 right-0 overflow-hidden duration-300 h-full bg-gray-100">
                            <div className="flex gap-3 flex-col p-3 font-semibold">
                                <Link to='/'>Home</Link>
                                <Link to='/about'>About Us</Link>
                            </div>
                            <div className=" text-black flex justify-start flex-col gap-3 font-semibold text-1x p-3">
                                <div className="flex flex-col gap-4">
                                    <div className="dropDownCont2">
                                        <div className="">
                                            <h3>Womens Wear</h3>
                                        </div>
                                        <div className="dropDownList z-10 text-white slate-50lack flex flex-col gap-3 absolute h-[0px] w-[90%] shadow-md overflow-hidden duration-200 bg-slate-600">
                                            <Link className="py-2 text-white bg-slate-600 px-4 hover:bg-slate-600 hover:text-black hover:px-4 hover:py-2 duration-200 rounded">Shirt</Link>
                                            <Link className="py-1 hover:bg-white hover:px-4 duration-200 rounded">Gown</Link>
                                            <Link className="py-1 hover:bg-white hover:px-4 duration-200 rounded">Sheath Dress</Link>
                                            <Link className="py-1 hover:bg-white hover:px-4 duration-200 rounded">Skirt</Link>
                                            <Link className="py-1 hover:bg-white hover:px-4 duration-200 rounded">Cardigan</Link>
                                            <Link className="py-1 hover:bg-white hover:px-4 duration-200 rounded">Mini Dress</Link>
                                            <Link className="py-1 hover:bg-white hover:px-4 duration-200 rounded">Wedding Dress</Link>
                                            <Link className="py-1 hover:bg-white hover:px-4 duration-200 rounded">Hoodie</Link>
                                            <Link className="py-1 hover:bg-white hover:px-4 duration-200 rounded">Jeans</Link>
                                            <Link className="py-1 hover:bg-white hover:px-4 duration-200 rounded">Top</Link>
                                            <Link className="py-1 hover:bg-white hover:px-4 duration-200 rounded">Corset</Link>
                                            <Link className="py-1 hover:bg-white hover:px-4 duration-200 rounded">Bubble Dress</Link>
                                            <Link className="py-1 hover:bg-white hover:px-4 duration-200 rounded">Coat</Link>
                                            <Link className="py-1 hover:bg-white hover:px-4 duration-200 rounded">Bootcut</Link>
                                        </div>
                                    </div>
                                    <div className="dropDownCont2">
                                        <div className="">
                                            <h3>Mens Wear</h3>
                                        </div>
                                        <div className="dropDownList z-10 slate-50 flex flex-col gap-3 absolute mt-3 h-[0px] w-[90%] shadow-md overflow-hidden duration-200 bg-slate-600">
                                            <Link className="py-2 text-black bg-slate-600 px-4 hover:bg-slate-600 hover:px-4 duration-200 rounded">Shirt</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Polo Shirt</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Jeans</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Shorts</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Hoodie</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Cardigan</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Gloves</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Boots</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Bathrobe</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Tie</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Baggy</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Singlet</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Long Sleeve Top</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Sandals</Link>
                                        </div>
                                    </div>
                                    <div className="dropDownCont2">
                                        <div className="">
                                            <h3>Electronics</h3>
                                        </div>
                                        <div className="dropDownList text-white slate-50 flex flex-col gap-3 absolute mt-3 h-[0px] w-[90%] shadow-md overflow-hidden duration-200 bg-slate-600">
                                            <Link className="py-2 text-black bg-slate-600 px-4 hover:bg-slate-600 hover:px-4 duration-200 rounded">Air Conditioner</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Air Purifier</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Dish Washer</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Fan</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Kettle</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Iron</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Kitchen Scale</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Eelectric Stove</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Electric Pencil Sharper</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Electric Guitar</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Doorbell Camera</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Dishwasher</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Coffee Maker</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Ceiling fan</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Blender</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Washing Machine</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Alarm Clock</Link>
                                            <Link className="py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded">Bluetooth Speaker</Link>
                                        </div>
                                    </div>
                                    <div className="dropDownCont2">
                                        <div className="">
                                            <h3>Laptop</h3>
                                        </div>
                                        <div className="dropDownList z-10 text-white slate-50 flex flex-col gap-3 absolute mt-3 h-[0px] w-[90%] shadow-md overflow-hidden duration-200 bg-slate-600">
                                            <Link className='py-2 text-black bg-slate-600 px-4 hover:bg-slate-600 hover:px-4 duration-200 rounded'>Hp</Link>
                                            <Link className='py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded'>Msi</Link>
                                            <Link className='py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded'>Dell</Link>
                                            <Link className='py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded'>Acer</Link>
                                            <Link className='py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded'>Asus</Link>
                                            <Link className='py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded'>Acer</Link>
                                            <Link className='py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded'>Apple</Link>
                                            <Link className='py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded'>Lenovo</Link>
                                            <Link className='py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded'>Microsoft</Link>
                                            <Link className='py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded'>MacBook Air</Link>
                                        </div>
                                    </div>
                                    <div className="dropDownCont2">
                                        <div className="">
                                            <h3>Phones</h3>
                                        </div>
                                        <div className="dropDownList z-10 text-slate-50 flex flex-col gap-3 absolute mt-3 h-[0px] w-[90%] shadow-md overflow-hidden duration-200 bg-slate-600">
                                            <Link className='py-2 text-black bg-slate-600 px-4 hover:bg-slate-600 hover:px-4 duration-200 rounded'>Apple</Link>
                                            <Link className='py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded'>Samsung</Link>
                                            <Link className='py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded'>Xiaomi</Link>
                                            <Link className='py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded'>Huawei</Link>
                                            <Link className='py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded'>Nokia</Link>
                                            <Link className='py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded'>Oppo</Link>
                                            <Link className='py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded'>Vivo</Link>
                                            <Link className='py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded'>Techno</Link>
                                            <Link className='py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded'>Itel</Link>
                                            <Link className='py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded'>Infinix</Link>
                                            <Link className='py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded'>Alcatel</Link>
                                            <Link className='py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded'>Microsoft</Link>
                                            <Link className='py-1 hover:bg-slate-600 hover:px-4 duration-200 rounded'>ZTE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <Link>Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}


{/* */}
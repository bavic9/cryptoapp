import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


    return (
        <div className=' h-[90px] m-auto px-6 border-b-2 border-gray-500 sticky top-0 left-0 z-10 bg-black'>
            <div className='lg:w-[70vw] m-auto flex justify-between items-center h-full p-4 text-orange'>
                <div className='flex relative'>
                    <h1 className='text-white lg:text-4xl text-xl cursor-pointer'>STAKE<span className='text-orange'>NET</span></h1>
                    <span className='absolute lg:h-[50px] lg:w-[50px] h-[30px] w-[30px] bg-orange rounded-full -z-10 lg:-top-4 -top-2 lg:-left-6 -left-4'></span>
                </div>
                <ul className={click ? ' flex lg:flex-row flex-col text-2xl lg:top-0 absolute top-[90px] right-0 border-l-2 border-gray-500 active w-[65%] h-screen bg-black'
                    : 'lg:flex lg:flex-row hidden justify-start lg:justify-center flex-col lg:text-3xl font-bold lg:top-0 top-[90px] lg:right-0 -right-full lg:border-none border-l-2 border-gray-500 w-6/12 lg:h-fit h-screen'}>
                    <li className='lg:px-4  lg:py-0 p-10 border-b-2 lg:border-none border-gray-500' >
                        <a className=' text-orange font-light px-4 py-8' href='/'>Home</a>
                    </li>
                    <li className='lg:px-4  lg:py-0 p-10 border-b-2 lg:border-none border-gray-500'>
                        <a className=' text-orange font-light px-4 py-8' href='/'><Link to={'/coins'}>Coins</Link></a>
                    </li>
                    <li className='lg:px-4  lg:py-0 p-10 border-b-2 lg:border-none border-gray-500'>
                        <a className=' text-orange font-light px-4 py-8' href='/'>Earn</a>
                    </li>
                    <li className='lg:px-4  lg:py-0 p-10 border-b-2 lg:border-none border-gray-500'>
                        <a className=' text-orange font-light px-4 py-8' href='/'>Contact</a>
                    </li>
                </ul>
                <div className='btn-group'>
                    <button className='w-[100%] lg:px-[32px] md:px-[24px] px-4 lg:py-[14px] md:py-[10px] py-2 border border-orange bg-orange text-white rounded-[24px_4px] font-semibold md:text-2xl text-lg hover:shadow-[rgb(0_0_0_/_15%)_0px_8px_24px]'>Connect Wallet</button>
                </div>
                <div className='hamburger flex cursor-pointer lg:hidden' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#ED760D' }} />) : (<FaBars size={20} style={{ color: '#ED760D' }} />)}

                </div>
            </div>
        </div>
    )
}

export default Navbar
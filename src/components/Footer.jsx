import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer bg-black py-20 px-4'>
            <div className='lg:max-w-[1240px] text-white m-auto grid lg:grid-cols-[repeat(5,1fr)] grid-cols-[repeat(2,1fr)] justify-between p-4'>
                <div className='lg:flex mt-20 flex-col hidden'>
                    <h1 className='text-white'>LO<span className='text-orange'>GO</span></h1>
                </div>
                <div className='flex flex-col'>
                    <h5 className='mt-8 text-2xl text-orange'>Support</h5>
                    <span className='w-[30px] border-b-orange mx-0 my-4 border-b-4 border-solid'></span>
                        <a href='/'>Contact Us</a>
                        <a href='/'>Chat</a>
                        <a href='/'>Help Center</a>
                        <a href='/'>FAQ</a>

                </div>
                <div className='flex flex-col'>
                    <h5 className='mt-8 text-2xl text-orange'>Developers</h5>
                    <span className='w-[30px] border-b-orange mx-0 my-4 border-b-4 border-solid'> </span>
                        <a href='/'>Cloud</a>
                        <a href='/'>Commerce</a>
                        <a href='/'>Pro</a>
                        <a href='/'>API</a>
                   
                </div>
                <div className='flex flex-col'>
                    <h5 className='mt-8 text-2xl text-orange'>Company</h5>
                    <span className='w-[30px] border-b-orange mx-0 my-4 border-b-4 border-solid'> </span>
                        <a href='/'>About</a>
                        <a href='/'>Information</a>
                        <a href='/'>Legal</a>
                        <a href='/'>Privacy</a>
                </div>
                <div className='flex flex-col'>
                    <h5 className='mt-8 text-2xl text-orange'>Social</h5>
                    <span className='w-[30px] border-b-orange mx-0 my-4 border-b-4 border-solid'> </span>
                        <a href='/'><FaFacebook className='text-bG my-1'/></a>
                        <a href='/'><FaTwitter className='text-bG my-1'/></a>
                        <a href='/'><FaLinkedin className='text-bG my-1'/></a>
                        <a href='/'><FaGithub className='text-bG my-1'/></a>
                </div>
            </div>
            
        </div>
    )
}


export default Footer
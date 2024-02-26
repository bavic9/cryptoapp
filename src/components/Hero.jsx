import React from 'react'
import Crypto from '../assets/hero-img.png'

const Hero = () => {
    return (
        <div className='mt-0 bgg'>
            <div className='lg:max-w-[1240px] lg:grid grid-cols-[repeat(2,1fr)] justify-center items-center mx-auto lg:px-16 lg:py-36 space-y-8'>

                {/* Left Side */}
                <div className='p-4 space-y-6 lg:px-0 px-8'>
                    <h1 className='text-white font-bold px-0 py-4 lg:text-[3.5rem] md:text-[2.5rem] text-[2rem] lg:leading-[1.2] md:text-start text-center'>Invest in Cryptocurreny with Your IRA</h1>
                    <p className='text-orange md:text-3xl text-xl font-semibold md:text-start text-center'>Buy & Sell Crypto 24/7</p>
                    <p className='text-white md:text-3xl text-xl font-semibold md:text-start text-center'>Buy, Sell, and store hundreds of cryptocurrencies</p>
                    <div className='px-0 py-8 flex md:flex-row flex-col gap-6'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='border border-orange bg-orange text-white text-[1.1rem] font-semibold cursor-pointer px-8 py-3.5 rounded-[24px_4px] border-solid hover:shadow-[rgb(0_0_0_/_15%)_0px_8px_24px]'>
                            Learn More
                        </button>
                    </div>
                </div>


                {/* Right Side */}
                <div className='lg:p-4 pb-16'>
                    <div className=' w-full flex'>
                        <img src={Crypto} className=' max-w-[80%] m-auto' alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
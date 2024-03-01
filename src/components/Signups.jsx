import React from 'react'
import crypto from '../assets/trade.png'

const Signups = () => {
    return (
        <div>
            <div className='lg:max-w-[1240px] m-auto  lg:grid grid-cols-[repeat(2,1fr)] justify-center items-center px-4 md:py-12 space-y-12 pb-10'>
                {/* left */}
                <div className='text-center'>
                    <img
                        className='w-[300px] m-auto hover:ease-in-out hover:duration-300 lg:hover:scale-110'
                        src={crypto} alt='' />
                </div>

                {/* right */}
                <div className='p-4'>
                    <h1 className='lg:text-start text-center'>Earn passive income with crypto.</h1>
                    <p className='mx-0 my-8 leading-loose text-xl'>
                        Earn up to 300% annual rewards on 30+ digital assets.<br/>

                        Simply CONNECT WALLET containing assets you wish to stake, STAKE Preferred assets and begin performing daily tasks to automatically earn rewards hourly and monthly with NO LOCK UPS and NO LIMITS.<br/>

                        You can automate daily tasks but earn lesser rewards. This is because we get a fee for performing daily tasks for you.
                    </p>
                    <div className='px-0 py-8 flex md:flex-row flex-col gap-6'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='border border-orange bg-orange text-white text-[1.1rem] font-semibold cursor-pointer px-8 py-3.5 rounded-[24px_4px] border-solid hover:shadow-[rgb(0_0_0_/_15%)_0px_8px_24px]'>Learn More</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signups
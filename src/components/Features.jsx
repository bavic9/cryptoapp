import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'

const Features = () => {
    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en'


    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    // console.log(data)

    if (!data) return <div className='featured lg:bg-bG lg:mt-[-5rem] py-12'><div className=' h-[60vh] lg:w-[60%] m-auto pt-28 flex flex-col justify-center text-center pb-8 space-y-12'>
        <h1 className='p-4'>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h1>
        <p className='my-6 px-4'>See all available assets: Cryptocurrencies and NFT's</p>
        <button className='m-auto border border-orange bg-orange text-white text-[1.1rem] font-semibold cursor-pointer px-8 py-3.5 rounded-[24px_4px] border-solid hover:shadow-[rgb(0_0_0_/_15%)_0px_8px_24px]'>See More Coins</button>
    </div></div>

    return (
        <div className='featured w-full lg:bg-bG lg:mt-[-5rem] px-0 pt-32 pb-24 relative'>
            <div className='lg:max-w-[1240px] m-auto lg:grid grid-cols-[repeat(2,1fr)] justify-center items-center p-4 space-y-8 md:space-y-16'>
                {/* Left */}
                <div className='flex flex-col justify-center lg:text-start text-center pb-8 space-y-8'>
                    <h1>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h1>
                    <p className='my-6'>See all available assets: Cryptocurrencies and NFT's</p>
                    <button className='self-start lg:m-0 m-auto border border-orange bg-orange text-white text-[1.1rem] font-semibold cursor-pointer px-8 py-3.5 rounded-[24px_4px] border-solid hover:shadow-[rgb(0_0_0_/_15%)_0px_8px_24px]'>See More Coins</button>
                </div>

                {/* Right */}

                <div className='flex flex-wrap lg:justify-evenly md:grid grid-cols-3 md:ml-[10%]'>
                    <div className='flex flex-col w-[170px] h-[200px] border shadow-[rgb(0_0_0_/_12%)_0px_8px_24px] text-center m-[0.4rem] px-[22px] py-3 rounded-3xl border-solid border-orange hover:shadow-[rgb(0_0_0_/_20%)_0px_8px_24px]'>
                        <div className='flex flex-col'>
                            <img
                                className='w-[50px] m-auto py-[0.2rem]'
                                src={data[0].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[0].name}</h5>
                            <p>${data[0].current_price.toLocaleString()}</p>
                        </div>

                        {data[0].price_change_percentage_24h < 0 ? (
                            <span className='text-red-700 text-[22px]'>
                                <FiArrowDown className='text-4xl justify-center items-center m-auto pt-1.5' />
                                {data[0].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='text-green-700 text-[22px]'>
                                <FiArrowUpRight className='text-4xl justify-center items-center m-auto pt-1.5' />
                                {data[0].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>
                    <div className='flex flex-col w-[170px] h-[200px] border shadow-[rgb(0_0_0_/_12%)_0px_8px_24px] text-center m-[0.4rem] px-[22px] py-3 rounded-3xl border-solid border-orange hover:shadow-[rgb(0_0_0_/_20%)_0px_8px_24px]'>
                        <div className='flex flex-col'>
                            <img
                                className='w-[50px] m-auto py-[0.2rem]'
                                src={data[1].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[1].name}</h5>
                            <p>${data[1].current_price.toLocaleString()}</p>
                        </div>

                        {data[1].price_change_percentage_24h < 0 ? (
                            <span className='text-red-700 text-[22px]'>
                                <FiArrowDown className='text-4xl justify-center items-center m-auto pt-1.5' />
                                {data[1].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='text-green-700 text-[22px]'>
                                <FiArrowUpRight className='text-4xl justify-center items-center m-auto pt-1.5' />
                                {data[1].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>
                    <div className='flex flex-col w-[170px] h-[200px] border shadow-[rgb(0_0_0_/_12%)_0px_8px_24px] text-center m-[0.4rem] px-[22px] py-3 rounded-3xl border-solid border-orange hover:shadow-[rgb(0_0_0_/_20%)_0px_8px_24px]'>
                        <div className='flex flex-col'>
                            <img
                                className='w-[50px] m-auto py-[0.2rem]'
                                src={data[2].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[2].name}</h5>
                            <p>${data[2].current_price.toLocaleString()}</p>
                        </div>

                        {data[2].price_change_percentage_24h < 0 ? (
                            <span className='text-red-700 text-[22px]'>
                                <FiArrowDown className='text-4xl justify-center items-center m-auto pt-1.5' />
                                {data[2].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='text-green-700 text-[22px]'>
                                <FiArrowUpRight className='text-4xl justify-center items-center m-auto pt-1.5' />
                                {data[2].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>
                    <div className='flex flex-col w-[170px] h-[200px] border shadow-[rgb(0_0_0_/_12%)_0px_8px_24px] text-center m-[0.4rem] px-[22px] py-3 rounded-3xl border-solid border-orange hover:shadow-[rgb(0_0_0_/_20%)_0px_8px_24px]'>
                        <div className='flex flex-col'>
                            <img
                                className='w-[50px] m-auto py-[0.2rem]'
                                src={data[3].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[3].name}</h5>
                            <p>${data[3].current_price.toLocaleString()}</p>
                        </div>

                        {data[3].price_change_percentage_24h < 0 ? (
                            <span className='text-red-700 text-[22px]'>
                                <FiArrowDown className='text-4xl justify-center items-center m-auto pt-1.5' />
                                {data[3].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='text-green-700 text-[22px]'>
                                <FiArrowUpRight className='text-4xl justify-center items-center m-auto pt-1.5' />
                                {data[3].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>
                    <div className='flex flex-col w-[170px] h-[200px] border shadow-[rgb(0_0_0_/_12%)_0px_8px_24px] text-center m-[0.4rem] px-[22px] py-3 rounded-3xl border-solid border-orange hover:shadow-[rgb(0_0_0_/_20%)_0px_8px_24px]'>
                        <div className='flex flex-col'>
                            <img
                                className='w-[50px] m-auto py-[0.2rem]'
                                src={data[4].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[4].name}</h5>
                            <p>${data[4].current_price.toLocaleString()}</p>
                        </div>

                        {data[0].price_change_percentage_24h < 0 ? (
                            <span className='text-red-700 text-[22px]'>
                                <FiArrowDown className='text-4xl justify-center items-center m-auto pt-1.5' />
                                {data[4].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='text-green-700 text-[22px]'>
                                <FiArrowUpRight className='text-4xl justify-center items-center m-auto pt-1.5' />
                                {data[4].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>
                    <div className='flex flex-col w-[170px] h-[200px] border shadow-[rgb(0_0_0_/_12%)_0px_8px_24px] text-center m-[0.4rem] px-[22px] py-3 rounded-3xl border-solid border-orange hover:shadow-[rgb(0_0_0_/_20%)_0px_8px_24px]'>
                        <div className='flex flex-col'>
                            <img
                                className='w-[50px] m-auto py-[0.2rem]'
                                src={data[5].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='text-red-700 text-[22px]'>
                                <FiArrowDown className='text-4xl justify-center items-center m-auto pt-1.5' />
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='text-green-700 text-[22px]'>
                                <FiArrowUpRight className='text-4xl justify-center items-center m-auto pt-1.5' />
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
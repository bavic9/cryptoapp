import React from 'react'
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";

const CoinItem = (props) => {
    return (
        <div className='flex justify-evenly items-center bg-slate-200 text-black shadow-[0px_0px_5px_#18191b] mx-4 my-8 px-4 py-[0.7rem] rounded-lg hover:transition-[0.3s] hover:duration-[ease-in-out] hover:cursor-pointer hover:scale-[1.04]'>
            <p>{props.coins.market_cap_rank}</p>
            <div className='flex items-center'>
                <img src={props.coins.image} className='h-10 w-auto mr-2' alt='' />
                <p>{props.coins.symbol.toUpperCase()}</p>
            </div>
            <p>${props.coins.current_price.toLocaleString()}</p>
            {props.coins.price_change_percentage_24h < 0 ? (
                <span className='text-red-700 flex justify-around items-center'>
                    <RiArrowDownSFill className='h-5 w-auto' />
                    {props.coins.price_change_percentage_24h.toFixed(2)}%
                </span>
            ) : (
                <span className='text-green-700 flex justify-around items-center'>
                    <RiArrowUpSFill className='h-5 w-auto' />
                    {props.coins.price_change_percentage_24h.toFixed(2)}%
                </span>
            )}


            {/* <div className='text-red-700 flex justify-around items-center'>
                <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
                <RiArrowDownSFill className='h-5 w-auto' />
            </div> */}
            <p className='hide-mobile hidden lg:flex'>${props.coins.total_volume.toLocaleString()}</p>
            <p className='hide-mobile hidden lg:flex'>${props.coins.market_cap.toLocaleString()}</p>
        </div>
    )
}

export default CoinItem
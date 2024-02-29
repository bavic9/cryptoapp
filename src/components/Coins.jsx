import React from 'react'
import CoinItem from './CoinItem'

const Coins = (props) => {
    return (
        <div className='max-w-[1140px] m-auto py-16'>
            <div>
                <div className='flex justify-between items-center bg-black text-orange shadow-[0px_0px_5px_#18191b] font-semibold mx-4 my-8 px-4 py-[0.7rem] rounded-lg'>
                    <p>#</p>
                    <p className='ml-[-4rem]'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile hidden lg:flex'>Volume</p>
                    <p className='hide-mobile hidden lg:flex'>Mkt Cap</p>
                </div>

                {props.coins.map(coins => {
                    return (
                        <CoinItem coins={coins}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Coins
import React from 'react'
import CoinItem from './CoinItem'

const Coins = (props) => {
    return (
        <div className='max-w-[1140px] m-auto py-16 '>
            <div className='text-center font-semibold px-4 py-8 space-y-8'>
                <h1>Cryptocurrency Prices by Market Cap</h1>
                <p>Total cryptocurrency trading volume in the last day is at $226 Billion. Bitcoin dominance is at 50.6% and Ethereum dominance is at 17.2%. CoinGecko is now tracking 12,927 cryptocurrencies. The largest gainers in the industry right now are Dog-Themed Coins and Elon Musk-Inspired Coins cryptocurrencies.</p>
            </div>
            <div>
                <div className='flex justify-between items-center bg-black text-orange shadow-[0px_0px_5px_#18191b] font-semibold mx-4 my-8 px-4 py-[0.7rem] rounded-lg'>
                    <p>#</p>
                    <p className='ml-[-4rem]'>Coin</p>
                    <p className='ml-[-4rem]'>Price</p>
                    <p className='ml-[-4rem]'>24h</p>
                    <p className='hide-mobile hidden lg:flex'>Volume</p>
                    <p className='hide-mobile hidden lg:flex'>Mkt Cap</p>
                </div>

                {props.coins.map(coins => {
                    return (
                        <CoinItem
                            key={coins.id}
                            priceChange={coins.price_change_percentage_24h}
                            coins={coins} />
                    )
                })}
            </div>
        </div>
    )
}

export default Coins
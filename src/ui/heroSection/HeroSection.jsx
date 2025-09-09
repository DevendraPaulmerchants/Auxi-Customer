import React, { useState } from 'react'
import { MdArrowOutward } from 'react-icons/md';
import BuyMetal from '../../features/buy/BuyMetal';
import SellMetal from '../../features/sell/SellMetal';

const actions = [
    { Id: 1, title: 'Buy', icon: <MdArrowOutward /> },
    { Id: 2, title: 'Sell', icon: <MdArrowOutward /> },
    { Id: 3, title: 'Transfer', icon: <MdArrowOutward /> },
    { Id: 4, title: 'Conversion', icon: <MdArrowOutward /> },
]

const rate = {
    gold: {
        buy: 10909.45,
        sell: 10609.45,
        transfer: 10909.45,
        conversion: 10609.45,
    },
    silver: {
        buy: 109.45,
        sell: 106.45,
        transfer: 109.45,
        conversion: 106.45,
    }
}

function HeroSection() {
    const [metal, setMetal] = useState('AU');
    const [index, setIndex] = useState(1);

    return (
        <div className='flex justify-center flex-wrap lg:flex-nowrap gap-10'>
            <div className='md:mt-2 lg:w-[calc(60%)]'>
                <h2 className='text-[24px] md:text-[40px] font-semibold text-[var(--primary-color)]'>Buy 24K Gold in 24 Seconds.</h2>
                <p className='md:text[21px] text-[var(--primary-color)]'><b>14,135</b> transactions in the last 1 hour.
                    Start investing in gold starting as low as <b>₹10</b></p>
                <div className='mt-2 md:mt-10'>
                    <h2 className='text-[var(--primary-color)] text-[18px] font-semibold'>Secured by</h2>
                    <p className='text-[var(--secondary-color)] md:text-[16px]'>Gold corresponding to every purchase you
                        make is stored in world-class vaults.</p>
                </div>
            </div>
            <div className='lg:w-[calc(40%)] max-w-[500px] shadow-2xl p-4 border-[rgba(38,38,38,0.1)] border-[0.5px] rounded-2xl'>
                <div className='flex gap-4 mb-4 w-full justify-center'>
                    <button
                        className={`w-full text-[yellow] bg-[var(--gold-color)] px-4 py-1 rounded font-semibold cursor-pointer transition duration-300
                        ${metal === 'AU' ? 'ring-1 ring-[var(--gold-color)] ring-offset-2' : ''}`}
                        onClick={() => setMetal('AU')}
                    >
                        Gold
                    </button>

                    <button className={`w-full text-[var(silver] bg-[var(--silver-color)] px-4 py-1 rounded font-semibold cursor-pointer transition duration-300
                        ${metal === 'AG' ? 'ring-1 ring-[var(--silver-color)] ring-offset-2' : ''}`}
                        onClick={() => setMetal('AG')}
                    >Silver</button>
                </div>
                <div className='flex flex-wrap gap-x-8 gap-y-4  border-t-[2px] border-t-[var(--gold-color)] pt-4 pb-4 border-b-[2px] border-b-sky-200'>
                    {actions.map((item) => (
                        <button key={item.Id} className='flex items-center gap-1 cursor-pointer text-[var(--primary-color)] hover:bg-[var(--bg-color)] px-2 rounded'
                            style={index === item.Id ? { backgroundColor: "var(--bg-color)", fontWeight: '500' } : {}}
                            onClick={() => setIndex(item.Id)}
                        >{item.icon} {item.title}</button>
                    ))}
                </div>
                <div>
                    {metal === 'AU' && <>
                        {index === 1 && <BuyMetal rate={rate.gold.buy} metal='AU' />}
                        {index === 2 && <SellMetal rate={rate.gold.sell} metal='AU' />}
                        {index === 3 && <p className='flex items-center justify-center font-semibold text-[var(--primary-color)] text-[20px] mt-[40px]'>Comming soon...</p>}
                        {index === 4 && <p className='flex items-center justify-center font-semibold text-[var(--primary-color)] text-[20px] mt-[40px]'>Comming soon...</p>}
                    </>
                    }
                    {metal === 'AG' && <>
                        {index === 1 && <BuyMetal rate={rate.silver.buy} metal='AG' />}
                        {index === 2 && <SellMetal rate={rate.silver.sell} metal='AG' />}
                        {index === 3 && <p className='flex items-center justify-center font-semibold text-[var(--primary-color)] text-[20px] mt-[40px]'>Comming soon</p>}
                        {index === 4 && <p className='flex items-center justify-center font-semibold text-[var(--primary-color)] text-[20px] mt-[40px]'>Comming soon</p>}
                    </>
                    }
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
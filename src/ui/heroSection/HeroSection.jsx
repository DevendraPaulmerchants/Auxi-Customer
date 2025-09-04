import React, { useState } from 'react'
import { MdArrowOutward } from 'react-icons/md';
import BuyGold from '../../features/buy/gold/BuyGold';

    const actions = [
        { Id: 1, title: 'Buy', icon: <MdArrowOutward /> },
        { Id: 2, title: 'Sell', icon: <MdArrowOutward /> },
        { Id: 3, title: 'Transfer', icon: <MdArrowOutward /> },
        { Id: 4, title: 'Conversion', icon: <MdArrowOutward /> },
    ]
function HeroSection() {
      const[index,setIndex]=useState(1);

    return (
        <div className='flex justify-center gap-10 py-8 px-20'>
            <div className='mt-10 flex-2'>
                <h2 className='text-[40px] font-semibold text-[var(--primary-color)]'>Buy 24K Gold in 24 Seconds.</h2>
                <p className='text-[21px] text-[var(--primary-color)]'><b>14,135</b> transactions in the last 1 hour.
                    Start investing in gold starting as low as <b>₹10</b></p>
                <div className='mt-10'>
                    <h2 className='text-[var(--primary-color)] text-[18px] font-semibold'>Secured by</h2>
                    <p className='text-[var(--secondary-color)] text-[21px]'>Gold corresponding to every purchase you
                        make is stored in world-class vaults.</p>
                </div>
            </div>
            <div className='flex-1 shadow-2xl p-4 border border-[rgba(38,38,38,0.1)] border-[0.5px] rounded-2xl'>
                <div className='flex gap-8 justify-center'>
                    {actions.map((item) => (
                        <button key={item.Id} className='flex items-center gap-1 cursor-pointer text-[var(--primary-color)] hover:bg-[var(--bg-color)] px-2 rounded'
                           style={index === item.Id ? { backgroundColor: "var(--bg-color)",fontWeight:'500' } : {}}
                           onClick={()=>setIndex(item.Id)}
                        >{item.icon} {item.title}</button>
                    ))}
                </div>
                <div>
                    {index === 1 && <BuyGold/>}
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
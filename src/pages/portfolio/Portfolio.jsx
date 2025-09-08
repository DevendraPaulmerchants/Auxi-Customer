import React from 'react';

const portfolio = [
    {
        metalType: 'Gold',
        metalWeight: '0.005g',
        investedAmount: 1020,
        currentValue: 1200,
        metalRate: '10909.45',
    },
    {
        metalType: 'Silver',
        metalWeight: '0.005g',
        investedAmount: 102,
        currentValue: 120,
        metalRate: '109.45',
    }
]

function Portfolio() {
    return (
        <div className=''>
            <h2 className='text-2xl font-bold mb-4 text-[var(--primary-color)]'>My Portfolio</h2>
            {portfolio.map((item) => (
                <div key={item.metalType} className='border border-[var(--primary-color)] p-4 mb-4 rounded-lg shadow-md'>
                    <h3 className='text-xl font-semibold mb-2 text-[var(--primary-color)]'>{item.metalType}</h3>
                    <div className='flex justify-between text-[var(--primary-color)]'>
                        <div>
                            <p>Metal Weight: <b>{item.metalWeight}</b></p>
                            {/* <p>Metal Rate: <b>&#8377;{item.metalRate}</b></p> */}
                        </div>
                        <div className='text-right'>
                            <p>Invested Amount: <b>&#8377;{item.investedAmount}</b></p>
                            <p>Current Value: <b>&#8377;{item.currentValue}</b></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Portfolio;
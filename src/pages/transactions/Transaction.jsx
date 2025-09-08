import React, { useState } from 'react';
import { dateAndTimeFormat } from '../../utils/helper';
import GoldIcon from '/GoldIcon.svg';
import SilverIcon from '/SilverIcon.svg';
import { FcOk } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCloudDownloadOutline } from 'react-icons/io5';

const transaction = [
    {
        transactionId: 'TxnId123456',
        transactiondate: '06-09-2025',
        metalType: 'Gold',
        metalWeight: '0.005g',
        metalRate: '10909.45',
        amount: 1020,
        status: 'Complete'
    },
    {
        transactionId: 'TxnId123456',
        transactiondate: '06-09-2025',
        metalType: 'Silver',
        metalWeight: '0.005g',
        metalRate: '10909.45',
        amount: 1020,
        status: 'Pending'
    },
    {
        transactionId: 'TxnId123456',
        transactiondate: '06-09-2025',
        metalType: 'Gold',
        metalWeight: '0.005g',
        metalRate: '10909.45',
        amount: 1020,
        status: 'Failed'
    },
    {
        transactionId: 'TxnId123456',
        transactiondate: '06-09-2025',
        metalType: 'Silver',
        metalWeight: '0.005g',
        metalRate: '10909.45',
        amount: 1020,
        status: 'Complete'
    },
    {
        transactionId: 'TxnId123456',
        transactiondate: '06-09-2025',
        metalType: 'Gold',
        metalWeight: '0.005g',
        metalRate: '10909.45',
        amount: 1020,
        status: 'Complete'
    },
    {
        transactionId: 'TxnId123456',
        transactiondate: '06-09-2025',
        metalType: 'Silver',
        metalWeight: '0.005g',
        metalRate: '10909.45',
        amount: 1020,
        status: 'Pending'
    }
]

function Transaction() {
    const [status, setStatus] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // Filter the transactions list -----------------------------------------------
    const filteredTransactions = transaction.filter((val) => {
        const statusMatch =
            !status || status === "all" ? true : val.status === status;
        let dateMatch = true;
        if (startDate) {
            dateMatch = new Date(val.transactiondate) >= startDate;
        }
        if (endDate) {
            dateMatch = dateMatch && new Date(val.transactiondate) <= endDate;
        }
        return statusMatch && dateMatch;
    });


    return (
        <div className='pb-10'>
            <div className='border-b-[2px] border-b-[var(--gold-color)] flex justify-center gap-4 py-6'>
                <div>
                    <DatePicker className='border-[2px] border-[var(--gold-color)] rounded outline-none px-2'
                        placeholderText='select start date'
                        maxDate={new Date()}
                        selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div>
                    <DatePicker className='border-[2px] border-[var(--gold-color)] rounded outline-none px-2'
                        placeholderText='select end date'
                        minDate={startDate}
                        maxDate={new Date()}
                        selected={endDate} onChange={(date) => setEndDate(date)} />
                </div>
                <div>
                    <select className='border-[2px] border-[var(--gold-color)] rounded outline-none w-[244px] px-2 py-[1px] t'
                        value={status} onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="" disabled>Select Status</option>
                        <option value="all">All</option>
                        <option value="Complete">Success</option>
                        <option value="Pending">Pending</option>
                        <option value="Failed">Failed</option>
                    </select>
                </div>
            </div>
            {
                filteredTransactions?.length > 0 ?
                    filteredTransactions?.map((item) => (
                        <div key={item.transactionId} className='sm:px-10 px-4 py-2 border-b-[2px] border-[rgba(38,38,38,0.5)] last:border-b-0'>
                            <div className='flex justify-end text-[20px] text-[var(--primary-color)]'>
                                <p className='font-semibold'><IoCloudDownloadOutline cursor='pointer' size={24} title='Download Invoice' /></p>
                            </div>
                            <div className='flex items-center justify-between gap-2'>
                                <div>
                                    <img src={item.metalType === 'Gold' ? GoldIcon : SilverIcon} alt={item.metalType} className='w-[50px] h-[50px] object-fill' />
                                    <p>{item.metalType}</p>
                                </div>
                                <div>
                                    <p>{item.transactionId}</p>
                                    <p>{dateAndTimeFormat(item.transactiondate)}</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div>
                                        <p className='font-semibold'>&#8377; {(item.amount).toFixed(2)}</p>
                                        <p>{parseFloat(item.metalWeight).toFixed(4)}g</p>
                                    </div>
                                    <p className='text-[20px]' title={item.status}>
                                        {item.status === 'Complete' && <FcOk />}
                                        {item.status === 'Pending' && <FcClock />}
                                        {item.status === 'Failed' && <FcHighPriority />}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )) : <p className='text-center mt-10 text-[var(--gold-color)] text-[20px]'>not found</p>
            }
        </div>
    )
}

export default Transaction;
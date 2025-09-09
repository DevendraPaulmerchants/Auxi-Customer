import React, { useState } from 'react';
import { TiEdit } from "react-icons/ti";
import VerifyKyc from '../verify-kyc/VerifyKyc';

const account = [
    {
        name: "Devendra Kumar",
        email: "dev@gmail.com",
        mobile: "8080808080",
        address: "Delhi, India",
        country: "India",
        kyc: "Pending",
        joined: "01 Jan 2023",

    },
    {
        bankAccount: '1234567890',
        ifsc: 'SBIN0001234',
        pan: 'ABCDE1234F',
    }
]

function Account() {
    const [openPanForm, setOpenPanForm] = useState(false);

    const handleOpenPanForm = () => {
        setOpenPanForm(!openPanForm);
    }

    return <>
        <div className='max-w-[700px]'>
            <h2 className='text-2xl text-[var(--primary-color)] font-bold mb-4'>Details</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-[var(--primary-color)]'>
                <div className='p-4 border border-[var(--bg-color)] rounded shadow'>
                    <h3 className='text-xl font-semibold mb-2'>Personal Information</h3>
                    <p><strong>Name:</strong> {account[0].name}</p>
                    <p><strong>Email:</strong> {account[0].email}</p>
                    <p><strong>Mobile:</strong> {account[0].mobile}</p>
                    <p className='flex items-center justify-between'>
                        <sapn><strong>KYC Status:</strong> {account[0].kyc}</sapn>
                        <sapn><TiEdit size={24} title='Edit' cursor='pointer' onClick={handleOpenPanForm} /></sapn>
                    </p>
                    <p><strong>Joined On:</strong> {account[0].joined}</p>
                </div>
                <div className='p-4 border border-[var(--bg-color)] rounded shadow'>
                    <h3 className='text-xl font-semibold mb-2'>Bank Details</h3>
                    <p><strong>Bank Account:</strong> {account[1].bankAccount}</p>
                    <p><strong>IFSC Code:</strong> {account[1].ifsc}</p>
                    <p><strong>PAN:</strong> {account[1].pan}</p>
                </div>
            </div>
        </div>
        {openPanForm && <VerifyKyc close={()=>setOpenPanForm(false)} />}
    </>
}

export default Account;
import React, { useState } from 'react';
import PaulGoldImage from '/LoginLeftIcon.svg';
import Input from '../reUse/Input';
import Button from '../reUse/Button';
import { useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';


function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:");
    };

    return (
        <div className='flex justify-between gap-10 py-4'>
            <div className='w-1/2 h-[500px] flex items-center justify-center bg-[rgba(38,38,38,0.09)] rounded-lg'>
                <div className=''>
                    <img src={PaulGoldImage} alt="Company Logo" className='object-fill h-[400px] w-[400px]' />
                </div>
            </div>
            <div className='w-1/2 border px-6 pt-2 border-[rgba(38,38,38,0.5)] rounded-lg'>
                <button onClick={() => navigate(-1)} className='text-[var(--primary-color)] cursor-pointer'><MdOutlineKeyboardBackspace size={30} /></button>
                <h2 className='text-2xl font-bold mb-4 text-[var(--primary-color)]'>Contact Us</h2>
                <form onSubmit={handleSubmit} className=''>
                    <div className='mb-4'>
                        <label className='block text-[var(--primary-color)] mb-2' htmlFor='name'>Name</label>
                        <Input type='text' id='name' placeholder='Enter name' value={name} setValue={setName} />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-[var(--primary-color)] mb-2' htmlFor='email'>Email</label>
                        <Input type='email' id='email' value={email} setValue={setEmail} />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-[var(--primary-color)] mb-2' htmlFor='mobile'>Mobile</label>
                        <Input type='tel' id='mobile' value={mobile} setValue={setMobile} />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-[var(--primary-color)] mb-2' htmlFor='gender'>Gender</label>
                        <select className='w-full border border-sky-200 px-2 py-1 rounded outline-none' id='gender'
                            value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="" disabled >Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="transgender">Transgender</option>
                        </select>
                    </div>
                    <div className='pt-4'>
                        <Button type='submit' variant="solid" color="primary">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ContactUs;
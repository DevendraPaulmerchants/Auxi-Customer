import React, { useState } from 'react';
import Button from '../../common/reUse/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Mpin() {
    const [mpin, setMpin] = useState('');
    const [confirmMpin, setConfirmMpin] = useState('');
    const [error, setError] = useState('');

    const handleMpinChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 4);
        setMpin(value);
        if (confirmMpin.length > 0) {
            if (value !== confirmMpin) {
                setError('MPIN and Confirm MPIN do not match.');
            } else {
                setError('');
            }
        }
    };

    const handleConfirmMpinChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 4);
        setConfirmMpin(value);
        if (mpin !== value) {
            setError('MPIN and Confirm MPIN do not match.');
        } else {
            setError('');
        }
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (error) {
            alert(error);
            return;
        }
        setError('');
        console.log('PIN set successfully:', mpin);
        toast('PIN set Successfully ✅');
        navigate('/')
    };

    return (
        <div className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-1 text-center text-[var(--primary-color)]">Upgrade your Account Security</h2>
            <p className='text-center mb-4 text-[var(--primary-color)]'>Set a 4-digit PIN for quick and easy access.</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-1 font-medium text-[var(--secondary-color)]">PIN</label>
                    <input
                        type="password"
                        inputMode="numeric"
                        pattern="\d{4}"
                        maxLength={4}
                        value={mpin}
                        onChange={handleMpinChange}
                        className="w-full outline-none border border-sky-200 px-2 py-1 rounded text-center text-lg tracking-widest"
                        autoComplete="new-password"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium text-[var(--secondary-color)]">Confirm PIN</label>
                    <input
                        type="password"
                        inputMode="numeric"
                        pattern="\d{4}"
                        maxLength={4}
                        value={confirmMpin}
                        onChange={handleConfirmMpinChange}
                        className="w-full outline-none border border-sky-200 px-2 py-1 rounded text-center text-lg tracking-widest"
                        autoComplete="new-password"
                        required
                    />
                </div>
                {confirmMpin.length > 0 && error && <p className="text-red-600 mb-2 text-center">{error}</p>}
                <Button type="submit">Proceed</Button>
            </form>
        </div>
    );
}
export default Mpin;
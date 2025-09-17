import React, { useContext, useEffect, useState } from 'react';
import Input from '../../common/reUse/Input';
import Button from '../../common/reUse/Button';
import { AuthContext } from '../../context/AuthContext';
import { formatTime } from '../../utils/helper';

function LogIn() {
    const { setIsLogin } = useContext(AuthContext);
    const [mobile, setMobile] = useState();
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [time, setTime] = useState(150);
    const [otp, setOtp] = useState();


    useEffect(() => {
        if (time > 0 && isOtpSent) {
            const interval = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
            return () => clearTimeout(interval);
        }
    }, [time, isOtpSent]);


    const handleSendOtp = (e) => {
        e.preventDefault();
        setIsOtpSent(true);
        if (time > 0) return;
        setTime(150);
    };
    const handleVerifyOtp = (e) => {
        e.preventDefault();
        console.log('OTP Verified');
        setIsLogin(true);
    }

    const handleResendOtp = (e) => {
        e.preventDefault();
        if (time > 0) {
            alert(`Please wait for ${formatTime(time)} to resend OTP`);
            return;
        }
        setTime(150);
    }


    return (
        <div>
            <p className='text-[var(--secondary-color)] text-5 mb-1'>Login or Sign Up</p>
            <form onSubmit={handleSendOtp}>
                <div className='mb-4 w-full'>
                    <Input type='tel' value={mobile} setValue={setMobile} />
                    {isOtpSent && time >= 0 &&
                        <p className='flex justify-between px-4 pt-1'>
                            <span>{formatTime(time)}</span>
                            <button className='cursor-pointer underline'
                                disabled={time > 0}
                                onClick={handleResendOtp}
                            >Resend OTP</button>
                        </p>
                    }
                </div>
                <div className='text-center mt-10'>
                    <Button disabled={time > 0}>Send OTP</Button>
                </div>
            </form>
            {isOtpSent &&
                <div className='py-4'>
                    <p className='text-[var(--primary-color)] mb-4'>We have sent an OTP to your mobile number</p>
                    <h2 className='text-[var(--secondary-color)] text-5 mb-2 font-semibold'>Verify OTP</h2>
                    <form onSubmit={handleVerifyOtp}>
                        <div className='mb-4 w-full'>
                            <Input type='number' value={otp} setValue={setOtp} maxLength={6} placeholder='Enter OTP' />
                        </div>
                        <div className='text-center mt-10'>
                            <Button >Verify &amp; Proceed</Button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}

export default LogIn;
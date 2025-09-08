import React, { useContext, useState } from 'react';
import { BiArrowBack } from "react-icons/bi";
import GemiGIF from '../../assets/Gemi.mp4';
import AdminLogo from '/AdminLogo.svg';
import Input from '../../common/reUse/Input';
import Button from '../../common/reUse/Button';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function LogIn() {
    const { isLogin, setIsLogin } = useContext(AuthContext);
    const [mobile, setMobile] = useState();
    const navigate = useNavigate();

    const handleLogIn = (e) => {
        e.preventDefault();
        console.log("isLogin", isLogin)
        setIsLogin(true);
        navigate('/')
    }
    return (
        <div className='fixed top-[0px] bg-white left-[0px] w-screen h-screen z-[9]'>
            <div className='bg-[#1a1818] place-items-center py-4 mb-8'>
                <img src={AdminLogo} alt='Company Logo' />
            </div>
            <div className='flex gap-8 mx-auto px-16 justify-center'>
                <div className='w-[500px] h-[480px] shadow-2xl'>
                    <video autoPlay loop muted className='object-fill w-full h-full'>
                        <source src={GemiGIF} type='video/mp4' />
                    </video>
                </div>
                <div className='w-[calc(50%)] border p-4 border-[var(--primary-color)] rounded-2xl'>
                    <button className='mb-4 text-[var(--primary-color)] cursor-pointer'
                        onClick={() => navigate('/')}
                    ><BiArrowBack size={24} /></button>
                    <div className='px-8'>
                        <p className='text-[var(--secondary-color)] text-5 mb-1'>Login or Sign Up</p>
                        <form onSubmit={handleLogIn}>
                            <div className='mb-4 w-full'>
                                <Input type='tel' value={mobile} setValue={setMobile} />
                            </div>
                            <div className='text-center mt-16'>
                                <Button>Continue</Button>
                            </div>
                        </form>
                        <div className='text-center mt-4 underline '>
                            <p className='cursor-pointer'>Terms and Conditions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn
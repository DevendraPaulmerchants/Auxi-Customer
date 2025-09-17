import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLogo from '/AdminLogo.svg';
import GemiGIF from '../../assets/Gemi.mp4';
import LogIn from '../login/LogIn';
import { BiArrowBack } from 'react-icons/bi';
import { AuthContext } from '../../context/AuthContext';
import Mpin from '../mpin/Mpin';

function AuthLayout() {
    const { isLogin, isMpinSet } = useContext(AuthContext);

    const navigate = useNavigate();


    return (
        <div className='fixed overflow-scroll top-[0px] bg-white left-[0px] w-screen h-screen z-[9]'>
            <div className='bg-[#1a1818] place-items-center py-4 mb-8'>
                <img src={AdminLogo} alt='Company Logo' />
            </div>
            <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap gap-8 mx-auto px-4 pb-10 lg:px-10 justify-center'>
                <div className='md:w-1/2 max-w-[501px] h-[250px] w-full md:h-[480px] shadow-2xl rounded-2xl'>
                    <video autoPlay loop muted className='object-fill w-full h-full overflow-hidden'>
                        <source src={GemiGIF} type='video/mp4' />
                    </video>
                </div>
                <div className='md:w-1/2 max-w-[500px] border p-4 border-[var(--primary-color)] rounded-2xl'>
                    <button className='mb-4 text-[var(--primary-color)] cursor-pointer'
                        onClick={() => navigate('/')}
                    ><BiArrowBack size={24} /></button>

                    <div className='px-8'>
                        {!isLogin && <LogIn />}

                        {!isMpinSet && isLogin && <Mpin />}
                        {/* <div className='text-center mt-4 underline '>
                                <p className='cursor-pointer'>Terms and Conditions</p>
                            </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout;
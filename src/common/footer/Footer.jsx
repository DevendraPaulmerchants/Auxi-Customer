import React from 'react';
import FooterLogo from '/LoginLeftIcon.svg';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { LuCopyright } from "react-icons/lu";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='bg-[#1a1818]'>
            <div className='flex p-6 gap-8'>
                <div className='hidden md:block lg:block w-[150px]'>
                    <img src={FooterLogo} alt='Paul Gold' />
                </div>
                <div className='flex justify-between flex-wrap gap-8'>
                    <div className='flex-1 min-w-[200px]'>
                        <h2 className='text-[var(--footer-title-color)] text-xl pb-4'>Paul Gold - A product of Paul Merchants Limited</h2>
                        <p className='text-[rgba(255,255,255,0.6)]'>SCO 829-830, PML House, Sector 22A, Chandigarh,
                            India - 160022</p>
                        <hr style={{
                            border: '1px solid var(--gold-color)',
                            margin: '10px 0'
                        }} />
                        <Link to='/contact-us' className='text-[rgba(255,255,255,0.6)] block hover:bg-[rgba(38,38,38,0.8)] p-1'>Contact Us</Link>
                        <Link to='/about-us' className='text-[rgba(255,255,255,0.6)] block hover:bg-[rgba(38,38,38,0.8)] p-1'>About Us</Link>
                        <Link to='/privacy-policy' className='text-[rgba(255,255,255,0.6)] block hover:bg-[rgba(38,38,38,0.8)] p-1'>Privacy Policy</Link>
                        <Link to='/terms-and-conditions' className='text-[rgba(255,255,255,0.6)] block hover:bg-[rgba(38,38,38,0.8)] p-1'>Terms & Conditions</Link>
                    </div>
                    <div className='flex-1 min-w-[200px]'>
                        <h2 className='text-[var(--footer-title-color)] text-xl pb-4'>Email</h2>
                        <a href="mailto:care@auxivault.com"><p className='text-[rgba(255,255,255,0.6)] pb-2'>care@auxivault.com</p></a>
                        <a href="mailto:info@auxivault.com"><p className='text-[rgba(255,255,255,0.6)]'>info@auxivault.com</p></a>
                        <h3 className='text-[var(--footer-title-color)] pt-4 pb-1'>For Corporate sales related queries</h3>
                        <a href="mailto:corporate.sales@auxivault.com"><p className='text-[rgba(255,255,255,0.6)]'>corporate.sales@auxivault.com</p></a>

                    </div>
                    <div className='flex-1 min-w-[200px]'>
                        <h2 className='text-[var(--footer-title-color)] text-xl pb-4'>Toll Free</h2>
                        <p className='text-[rgba(255,255,255,0.6)] pb-2'>1800-313-2928XX</p>
                        <p className='text-[rgba(255,255,255,0.6)] pb-2'>(9AM-8PM IST, Mon-Sat)</p>
                        <p className='text-[rgba(255,255,255,0.6)]'>Accessible from Indian (+91) numbers only</p>
                    </div>
                    <div className='flex-1 min-w-[200px]'>
                        <h2 className='text-[var(--footer-title-color)] text-xl pb-4'>Follow Us</h2>
                        <div className='flex items-center gap-4 text-white'>
                            <a href='#' className='bg-[#383D38] rounded-full p-2'><FaFacebookF /></a>
                            <a href='#' className='bg-[#383D38] rounded-full p-2'><FaInstagram /></a>
                            <a href='#' className='bg-[#383D38] rounded-full p-2'><FaLinkedinIn /></a>
                            <a href='#' className='bg-[#383D38] rounded-full p-2'><BsTwitterX /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center gap-2 justify-center py-6 border-t-[2px] border-[var(--footer-title-color)]'>
                <LuCopyright color='#E2AE2E' />
                <h2 className='text-[#FFE1B6]'>Paul Gold - PML {new Date().getFullYear()}, All Rights Reserved</h2>
            </div>
        </div>
    )
}

export default Footer;
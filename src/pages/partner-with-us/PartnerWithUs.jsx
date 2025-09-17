import React, { useState } from 'react'
import Button from '../../common/reUse/Button';
import Input from '../../common/reUse/Input';

function PartnerWithUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const user={
    name:name,
    email:email,
    message:message
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    setName('');
    setEmail('');
    setMessage('');
    console.log("Form submitted:",user);
  }

  return (
    <div className='my-10 shadow-[15px_16px_0_0_rgba(38,38,38,0.1)] w-fit mx-auto p-4 border border-[rgba(38,38,38,0.25)] border-[1px] rounded-2xl'>
      <h1 className='text-center font-semibold text-[var(--primary-color)]'>Let’s Do Business Together</h1>
      <p className='text-center text-[var(--primary-color)]'>Sign up today and become part of our growing merchant community</p>
        <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[var(--primary-color)] text-sm font-bold mb-2" htmlFor="name">
              Name  
            </label>
            <Input
              id="name"
              value={name}
              setValue={setName}
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-[var(--primary-color)] text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              setValue={setEmail}
              placeholder="your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-[var(--primary-color)] text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-sky-200 rounded-lg outline-none"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <Button type="submit">Submit</Button>
          </div>
        </form>
    </div>
  )
}

export default PartnerWithUs;
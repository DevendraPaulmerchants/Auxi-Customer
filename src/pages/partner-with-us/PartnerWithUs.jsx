import React, { useState } from 'react'
import Button from '../../common/reUse/Button';
import Input from '../../common/reUse/Input';

function PartnerWithUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div>
      <h1 className='text-center text-[var(--primary-color)]'>Partner With Us Page</h1>
      <p className='text-center text-[var(--primary-color)]'>This is the Partner With Us page content.</p>
        <form className="max-w-md mx-auto mt-8">
          <div className="mb-4">
            <label className="block text-[var(--primary-color)] text-sm font-bold mb-2" htmlFor="name">
              Name  
            </label>
            <Input
              id="name"
              value={name}
              setName={setName}
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
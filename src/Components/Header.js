import React from 'react'
import fortebet from '../assets/images/fortebet.webp'

export default function Header() {
  return (
    <div>
      <div className='text-[10px] flex justify-between'>
      <div className='text-white flex space-x-2 '>
        <div className='py-1 px-6 border-[1px] border-gray-600'>time: {new Date().toLocaleTimeString()}</div>
        <div className='py-1 bg-[#3b3c3f] px-6'>CONTACT US</div>
        <div className='py-1 bg-[#3b3c3f] px-6'>DEPOSITS & WITHDRAWALS</div>
      </div>
      <div className='text-white flex space-x-2'>
        <div className='py-1 px-6 bg-[#3b3c3f]'>HOW TO REGISTER</div>
        <div className='py-1 px-6 bg-[#fe7c01]'>REGISTER NOW</div>
        <div className='py-1 px-10 bg-[#3b3c3f]'>LOST PASSWORD</div>
        <div className='py-1 px-6 bg-[#3b3c3f]'>EN</div>
      </div>
      </div>
      <div className='flex justify-between my-3'>
        <div><img className='h-[50px] mt-[-14px]' src={fortebet} /></div>
        <div className='flex space-x-2'>
            <div><input className='px-2' type="text" name='username' /></div>
            <div><input className='px-2' type="password" name='password' /></div>
            <div><input className='px-10 bg-[#fe7c01] text-white' type="button" value="LOGIN" /></div>
        </div>
      </div>
    </div>
  )
}

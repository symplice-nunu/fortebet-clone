import React from 'react'
import { BiPin } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'

export default function RightSidebar() {
  return (
    <div className='mx-3'>
        <div className='flex space-x-[1px]'>
            <div className='bg-[#5f3822] text-white px-6 text-[11px] py-2'>BET SLIP 1</div>
            <div className='bg-[#5f3822] text-white px-6 text-[11px] py-2'>2</div>
            <div className='bg-[#5f3822] text-white px-6 text-[11px] py-2'>3</div>
            <div className='bg-[#5f3822] text-white px-2 text-[11px] py-2'><BiPin className='text-[16px]' /></div>
        </div>
        <div className='flex space-x-[1px] my-[1px]'>
            <div className='bg-[#5f3822] px-[96px] py-2 text-white text-[11px]'>AKO</div>
            <div className='bg-[#3b3c3f]  px-2 py-2 text-white'><AiFillDelete className='text-[16px]' /></div>
        </div>
        <div className='text-center text-white bg-[#5f3822] py-5 space-y-5'>
            <div className='text-[11px] '>
                <div>YOUR TICKET NO. 1</div>
                <div>IS STILL EMPTY</div>
            </div>
            <div className='text-[11px]'>
                <div >Click on the appropriate odds to add it into</div>
                <div>your ticket.</div>
            </div>
        </div>
        <div className='px-3 bg-[#36393c] mt-2 py-5'>
            <div className='text-white text-[12px] mb-1'>Ticket number</div>
            <div><input type="text"  className='w-full' name="" /></div>
            <div><input type="button" className='mt-3 bg-[#454647] w-full text-[#b9babb] py-1' value="CHECK TICKET" /></div>
        </div>
    </div>
  )
}

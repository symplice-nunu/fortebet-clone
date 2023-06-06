import React from 'react'
import { ScheduleBetTimeData } from './Data/ScheduleBetTimeData'

export default function ScheduleBetTime() {
  return (
    <div className='w-[265px]'>
        <div className='flex ml-3 mb-3 text-white flex-wrap'>
        {
            ScheduleBetTimeData.map((item) => {
                return (
                    <div>
                        <div className={`${item.Size === '1' ? 'bg-[#101112] w-[60px] text-center' : item.Size === '2' ? 'bg-[#101112] w-[88px] text-center' : item.ScheduleBetTime === 'ALL' ? 'text-[#ff8401] bg-[#1d1e1f]  w-[60px] text-center' : 'bg-[#101112]'} text-[12px]  px-2 py-1 h-7 mr-[1px] mb-[1px]`}>
                        {item.ScheduleBetTime}
                    </div>
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

import React from 'react'
import { ScheduleBetTimeData } from './Data/ScheduleBetTimeData'
import { TopBetData } from './Data/TopBetData'
import { AiOutlineDelete } from 'react-icons/ai'
import { LeaguesData } from './Data/LeaguesData'
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
    <div className='ml-6 mb-3 text-white text-[13px]'>TOP BETS</div>
    <div className='ml-3 w-[210px]'>
        {
           TopBetData.map((item) => {
            return (
                <div className={`${item.Name === 'Champions League' ? 'text-[#ff8401]' : 'text-white'} flex space-x-2 cursor-pointer bg-[#36393c] mb-[1px] p-1`}>
                    <div>{item.Flag}</div>
                    <div className='text-[12px]'>{item.Name}</div>
                </div>
            )
           })
        }
    </div>
    <div className='ml-3 w-[210px] text-[12px] font-bold flex justify-between px-3 text-white bg-[#36393c] py-1 my-2'>
        <div>MY SELECTION ( 0 )</div>
        <div className='mt-1 '><AiOutlineDelete /></div>
    </div>
    <div className='ml-3 w-[210px]'>
        {
           LeaguesData.map((item) => {
            return (
                <div className={`text-white flex space-x-2 cursor-pointer justify-between bg-[#36393c] mb-[1px] p-1`}>
                    <div className='flex'>
                    <div>{item.LeagueIcon}</div>
                    <div className='text-[12px] mx-2'>{item.LeagueName}</div>
                    </div>
                    <div>{item.LeagueRightIcon}</div>
                </div>
            )
           })
        }
    </div>
    </div>
  )
}

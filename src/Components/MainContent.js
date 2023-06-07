import React from 'react'
import bigChance from '../assets/images/chance.png'
import { LastMinutesOddsData } from './Data/LastMinutesOddsData'
import { OddsData } from './Data/OddsData'


export default function MainContent() {
  return (
    <div>
        <div><img src={bigChance} /></div>
        <div className='text-white text-[14px] flex space-x-[1px] mt-3'>
            <div className='bg-[#4c4d4d] w-[190px] p-2'>LAST MINUTE ODDS</div>
            <div className='bg-[#36393c] w-full h-[37px]'></div>
        </div>
        <div className='bg-[#4c4d4d] text-white p-2 py-3 text-[12px] flex justify-between'>
            <div>Events</div>
            <div>
                
                <div className='flex'>
                    <div className='px-5 '>1</div>
                    <div className='px-5 '>X</div>
                    <div className='px-5 '>2</div>
                    <div className='px-3 '>1X</div>
                    <div className='px-6 '>X2</div>
                    <div className='px-3 '>12</div>
                    <div className='px-2 '>Time</div>
                    <div className='px-3 '></div>
                </div>
            </div>
        </div>
           {
            LastMinutesOddsData.map((item, index) => {
                return(
                    <div key={index} className={`${index % 2 === 0 ? 'bg-[#36393c]' : '#3b3e41'} flex justify-between text-white text-[12px]  mb-[1px]`}>
                    <div className='flex space-x-4  p-2 py-2 '>
                    <div className='text-[20px] mt-2'>{item.vsIcon}</div>
                    <div>
                        <div>{item.vs}</div>
                        <div>{item.league}</div>
                    </div>
                    </div>
                    <div className='flex '>
                        <div className='bg-[#404346] px-3 text-[#f3904f] pt-4'>{item.vs1}</div>
                        <div className=' px-3 text-[#f3904f] pt-4'>{item.vsX}</div>
                        <div className='bg-[#404346] px-3 text-[#f3904f] pt-4'>{item.vs2}</div>
                        <div className=' px-3 text-[#f3904f] pt-4'>{item.vs1X}</div>
                        <div className='bg-[#404346] px-3 text-[#f3904f] pt-4'>{item.vsX2}</div>
                        <div className=' px-3 text-[#f3904f] pt-4'>{item.vs12}</div>
                        <div>
                            <div>{item.vsTime}</div>
                            <div className='text-[#ffd6b8]'>{item.vsSubTime}</div>
                        </div>
                        <div className='px-3 pt-4'>{item.vsTimeIcon}</div>
                    </div>
                </div>
                )
            })
           }
    </div>
  )
}

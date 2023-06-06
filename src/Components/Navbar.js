import React from 'react'
import { NavbarData } from './Data/NavbarData'

export default function Navbar() {
  return (
    <div>
        <div className='flex text-white space-x-[1px] mx-3 mb-3 text-[14px]'>
            {
                NavbarData.map((item) => {
                    return(
                        <div className={`${item.NavTitle === 'SPORTSBOOK'  ? 'bg-[#1d1e1f] text-[#ff8401]' : item.NavTitle === 'BEST SHOTS' ? 'bg-[#101112] w-[230px]' : item.NavTitle === 'VIRTUAL SOCCER' ? 'bg-[#101112] w-[310px]' : 'bg-[#101112]'} hover:text-[#ff8401] py-3 px-4 hover:bg-[#1d1e1f]`}>
                            <div className=''>{item.NavTitle}</div>
                        </div>
                    )
                })
            }
            <div className='bg-[#101112] w-full'></div>
        </div>
    </div>
  )
}

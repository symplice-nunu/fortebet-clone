import React from 'react'
import {BettingType} from './Data/BettingType'

export default function Footer() {
  return (
    <div>
        <div className=''>
        <div className='flex space-x-2 py-6 text-white bg-[#151718]'>
            {
                BettingType.map((item) => {
                    return(
                        <div className={`${item.ColorT === 'off' ? 'bg-[#151718]' : 'bg-[#53321e]'} flex  space-x-2 px-2 py-2 text-[10px]`}>
                        <div>{item.BettingIcon}</div>
                        <div>{item.BettingType}</div>
                        </div>
                    )
                })
            }
        </div>
        <div className='text-center py-5 flex flex-row space-x-5'>

        <div className='text-white text-left'>
            <div>SPORT BETTING</div>
            <div className='mt-4 text-[10px] text-[#777a81]'>
            <div>Deposits and withdrawals</div>
            <div>Today offer PDF</div>
            <div>Full offer PDF</div>
            </div>
        </div>
        <div className='h-[180px] w-[1px] bg-[#777a81]'></div>
        <div className='text-white text-left'>
            <div>LIVE BETTING</div>
            <div className='mt-4 text-[10px] text-[#777a81]'>
            <div>In play</div>
            <div>Schedule</div>
            </div>
        </div>
        <div className='h-[180px] w-[1px] bg-[#777a81]'></div>
        <div className='text-white text-left'>
            <div>TOP BETS</div>
            <div className='mt-4 text-[10px] text-[#777a81]'>
            <div>Elite European Leagues</div>
            <div>European Cups</div>
            <div>Champions League</div>
            <div>South America</div>
            <div>Tennis French Open</div>
            <div>Conference League</div>
            <div>Germany Bundesliga</div>
            <div>Netherlands Eredivisie</div>
            <div>South America Cup</div>
            </div>
        </div>
        <div className='h-[180px] w-[1px] bg-[#777a81]'></div>
        <div className='text-white text-left'>
            <div>COMPANY</div>
            <div className='mt-4 text-[10px] text-[#777a81]'>
            <div>About Us</div>
            <div>Contact Us</div>
            <div>Terms & Conditions</div>
            <div>Register</div>
            <div>VIP</div>
            <div>Privacy policy</div>
            </div>
        </div>
        <div className='h-[180px] w-[1px] bg-[#777a81]'></div>
        <div className='text-white text-left'>
            <div>SOCIAL MEDIA</div>
            <div className='mt-4 text-[10px] text-[#777a81]'>
            <div>Facebook</div>
            </div>
        </div>
        </div>
    </div>
    <div className='text-center text-white text-[13px] bg-[#232427] py-10'>Fortebet Ltd Rwanda is licence from Ministry of Trade and Industry for sport betting at Rwanda , and the owner of Fortebet brand at Rwanda.</div>
    </div>
  )
}

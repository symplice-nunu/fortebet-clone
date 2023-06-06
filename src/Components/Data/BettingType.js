
import { AiOutlineMobile } from 'react-icons/ai'
import { FaHome } from 'react-icons/fa'
import airtel from '../../assets/images/airtel.png'
import mtn from '../../assets/images/mtn.png'
export const BettingType = [
    {
        ColorT: 'off',
        BettingIcon: '',
        BettingType: 'No minors allowed',
    },
    {
        ColorT: 'off',
        BettingIcon: <AiOutlineMobile className='mt-[2px]' />,
        BettingType: 'MOBILE SITE',
    },
    {
        ColorT: 'on',
        BettingIcon: <FaHome className='mt-[2px]' />,
        BettingType: 'DEPOSIT AT BRANCH',
    },
    {
        ColorT: 'on',
        BettingIcon: <img className='w-6' src={mtn} />,
        BettingType: 'MTN MOBILE MONEY',
    },
    {
        ColorT: 'on',
        BettingIcon: <img className='w-6 h-4' src={airtel} />,
        BettingType: 'AIRTEL MONEY',
    },
    {
        ColorT: 'off',
        BettingIcon: '',
        BettingType: 'Betting can be addictive and psychologically harmful.',
    }
]

import { AiOutlineMobile } from 'react-icons/ai'
import { FaHome } from 'react-icons/fa'
export const BettingType = [
    {
        ColorT: 'off',
        BettingIcon: '',
        BettingType: 'No minors allowed',
    },
    {
        ColorT: 'off',
        BettingIcon: <AiOutlineMobile />,
        BettingType: 'MOBILE SITE',
    },
    {
        ColorT: 'on',
        BettingIcon: <FaHome />,
        BettingType: 'DEPOSIT AT BRANCH',
    },
    {
        ColorT: 'on',
        BettingIcon: 'icon',
        BettingType: 'MTN MOBILE MONEY',
    },
    {
        ColorT: 'on',
        BettingIcon: 'icon',
        BettingType: 'AIRTEL MONEY',
    },
    {
        ColorT: 'off',
        BettingIcon: '',
        BettingType: 'Betting can be addictive and psychologically harmful.',
    }
]
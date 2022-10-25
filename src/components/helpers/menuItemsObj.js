import tradeIcon from "../../assets/images/trade-menu-icon-mobile-active.svg";
import earnIcon from "../../assets/images/earn-menu-icon-mobile.svg";
import winIcon from "../../assets/images/win-menu-icon-mobile.svg";
import nftIcon from "../../assets/images/nft-menu-icon-mobile.svg";


export const menuItemsObj =

[
    {
        title: 'Trade',
        url: '/trade',
        img: tradeIcon,
        submenu: [
            {
                title: 'Swap',
                url: 'swap'  // dynamic nested route
            },
            {
                title: 'Limit',
                url: 'limit'
            },
            {
                title: 'Liquidity',
                url: 'liquidity'
            },
            {
                title: 'Perpetual',
                url: 'perpetual'
            }
        
        ]
    },
    {
        title: 'Earn',
        url: '/earn',
        img: earnIcon,
        submenu: [
            {
                title: 'Farms',
                url: 'farms'
            },
            {
                title: 'Pools',
                url: 'pools'
            }
        ]
    },
    {
        title: 'Win',
        url: '/win',
        img: winIcon,
        submenu: [
            {
                title: 'Trading Competition',
                url: 'trading-competion'
            },
            {
                title: 'Prediction',
                url: 'prediction'
            },
            {
                title: 'Lottery',
                url: 'lottery'
            }
        ]
    },
    {
        title: 'NFT',
        url: '/nft',
        img: nftIcon,
        submenu: [
            {
                title: 'Overview',
                url: 'overview'
            },
            {
                title: 'Collections',
                url: 'collections'
            },
            {
                title: 'Activity',
                url: 'activity'
            }
        ]
    }, {
        title: '...',
        url: '/info',
  
        submenu: [
            {
                title: 'Info',
                url: 'info'
            },
            {
                title: 'IFO',
                url: 'ifo'
            },
            {
                title: 'Voting',
                url: 'voting'
            },
            {
                title: 'Leaderboard',
                url: 'leaderboard'
            },
            {
                title: 'Blog',
                url: 'blog'
            },
            {
                title: 'Docs',
                url: 'docs'
            }
        ]
        
        },
    ]
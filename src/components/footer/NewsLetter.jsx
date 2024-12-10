// import React from 'react'
import PlayStore from '../../assets/play-store-badge.svg'
import AppStore from '../../assets/app-store-badge.svg'
import Insta from '../../assets/instagram (1).png'
import Fb from '../../assets/communication.png'
import Telegram from '../../assets/telegram.png'
// import Twitter from '../../assets/twitter (1).png'
import Yt from '../../assets/youtube.png'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsLetter'>

       <div className="newsletter_inner">


       <div className='follow_us_section'>
            <p className='news_heading mb-[20px]'>FOLLOW US</p>
            <div className='social_icons_container'>
                <img className='social_icons' src={Insta} alt="" />
                <img className='social_icons' src={Fb} alt="" />
                <img className='social_icons' src={Telegram} alt="" />
                <img className='social_icons' src={Yt} alt="" />
                {/* <img className='social_icons' src={Twitter} alt="" /> */}
            </div>
            
        </div>

        <div className='input_email_section'>
            <p className='news_heading'>CRYPTO VENTURES NEWSLETTER</p>
            <div className='flex flex-row'>
                <input className='subscribe_input' type="email" placeholder='Enter Your Email Here'/>
                <button className='subscribe_btn'>Subscribe</button>
            </div>
           
        </div>


        <div className='mobile_apps_section'>
            <p className='news_heading'>MOBILE APPS</p>
            <div className='flex flex-row gap-[20px]'>
                <img src={PlayStore} alt="" />
                <img src={AppStore} alt="" />
            </div>
        </div>

       </div>

       <div className="newsletter_outer">

        <div>
            <p>Terms of services and Privacy policy</p>
            <p>© CryptoVentures 2024</p>
        </div>


        <p>Crypto Ventures covers fintech, blockchain and Bitcoin bringing you the latest crypto news and analyses on the future of money.</p>
        
       </div>

    </div>
  )
}

export default NewsLetter
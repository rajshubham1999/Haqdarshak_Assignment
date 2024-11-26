import React from 'react'
import './Page2.css'
import image from '../../assets/icon2.png'

function Page2() {
  return (
    <div className='containerpage2'>
        <div className='upperbox'>
            <div className='heading'>
                <p>Getting</p> 
                <p>benefits is</p>
                <p>now easy !</p>
            </div>
        </div>
        <div className='pink'>
            
        </div>
        <div className='image'>
            <img src={image} alt="people"/>
        </div>
    </div>
  )
}

export default Page2
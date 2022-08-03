import React from 'react'
import './header.css'
import logo from './salelogo.png'
export default function Header(){
    return(
        <div className='Header'>
            <div className='Title'> 
             </div>
             <img alt='logo'
             src={logo} className='image'/>
             <button className='Home'> Home</button>
            <button className='Profile'> My Profile</button>
            <button className='Cart'> My Cart</button>
           
            <input type="text" className="text"></input>
            <button className='Search'> Search</button>
            
        </div>
    )
}
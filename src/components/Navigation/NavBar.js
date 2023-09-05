import React from 'react'
import "./navBar.css"


export default function NavBar() {
  return (
    <div className='navbarbox'>
        <div className="navbarleft">
            <span className='logo'>facebook</span>
        </div>


        <div className="navbarcenter">
            <div className="searchbarbox">
            <input type='text' className='searchinput' placeholder='search for your frend'/>
            </div>
        </div>
        <div className="navbarright">
            <div className="navbarlinks">
                <span className="navbarlink">HomePage</span>
                <span className="navbarlink">profile</span>
            </div>
            <div className="nacbaricons">
                <div className="navbaricon"> 

                 </div>
                <div className="navbaricon">  </div>
                <div className="navbaricon">  </div>
            </div>
            <div className="pic">
                <img src="/images/1.png" alt="" className="profileimage" />
            </div>
            </div>
    </div>
  )
}

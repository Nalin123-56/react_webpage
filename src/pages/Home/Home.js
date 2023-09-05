import React from 'react'
import NavBar from '../../components/Navigation/NavBar'
import Leftpane from '../../components/Leftpane/Leftpane'
import Postpane from '../../components/Postpane/Postpane'
import Rightpane from '../../components/Rightpane/Rightpane'
import "./home.css"

export default function Home() {
  return (
    
    <div>
      <NavBar/>
       <div className='bottemcontainer'>
        <Leftpane/>
        <Postpane/>
        <Rightpane/>

       </div>
    </div>
    
    
  
    
  )
}

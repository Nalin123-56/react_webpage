import React from 'react'
import "./leftpane.css"
import MessageIcon from '@mui/icons-material/Message';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FeedIcon from '@mui/icons-material/Feed';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Leftpane() {
  return (
    <div className='leftpanebox'>
     <div className="leftpanecontainer">
      <div className="leftpanemenu">
        <li className="leftpanemenuitem">
         <MessageIcon className='leftpanemenuicon'/>
         <spam className="leftpanemenutext">Massages</spam>
        </li>
        <li className="leftpanemenuitem">
         <GroupIcon className='leftpanemenuicon'/>
         <spam className="leftpanemenutext">Group</spam>
        </li>
        <li className="leftpanemenuitem">
         <RssFeedIcon className='leftpanemenuicon'/>
         <spam className="leftpanemenutext">Feed</spam>
        </li>
        <li className="leftpanemenuitem">
         <FlagIcon className='leftpanemenuicon'/>
         <spam className="leftpanemenutext">Pages</spam>
        </li>
        <li className="leftpanemenuitem">
         <CalendarMonthIcon className='leftpanemenuicon'/>
         <spam className="leftpanemenutext">Events</spam>
        </li>
        <li className="leftpanemenuitem">
         <BuildIcon className='leftpanemenuicon'/>
         <spam className="leftpanemenutext">Setting</spam>
        </li>
        <li className="leftpanemenuitem">
         <SportsEsportsIcon className='leftpanemenuicon'/>
         <spam className="leftpanemenutext">Games</spam>
        </li>
        <li className="leftpanemenuitem">
         <FeedIcon className='leftpanemenuicon'/>
         <spam className="leftpanemenutext">News</spam>
        </li>
        <li className="leftpanemenuitem">
         <WorkOutlineIcon className='leftpanemenuicon'/>
         <spam className="leftpanemenutext">Jobs</spam>
        </li>
        <li className="leftpanemenuitem">
         <AddShoppingCartIcon className='leftpanemenuicon'/>
         <spam className="leftpanemenutext">Market</spam>
        </li>
        <hr></hr>
        <div className="pagesyouliked">
          <h3>pages you liked</h3>
        </div>
       <div className="pagelist">
       <li className="pagelistitem">
          <img src="/images/1.png" alt="" className="pagepic" />
          <span className='pagename'>F e e L s :</span>
        </li>
        <li className="pagelistitem">
          <img src="/images/1.png" alt="" className="pagepic" />
          <span className='pagename'>F e e L s :</span>
        </li>
        <li className="pagelistitem">
          <img src="/images/1.png" alt="" className="pagepic" />
          <span className='pagename'>F e e L s :</span>
        </li>
        <li className="pagelistitem">
          <img src="/images/1.png" alt="" className="pagepic" />
          <span className='pagename'>F e e L s :</span>
        </li>
        <li className="pagelistitem">
          <img src="/images/1.png" alt="" className="pagepic" />
          <span className='pagename'>F e e L s :</span>
        </li>
        <li className="pagelistitem">
          <img src="/images/1.png" alt="" className="pagepic" />
          <span className='pagename'>F e e L s :</span>
        </li>
        <li className="pagelistitem">
          <img src="/images/1.png" alt="" className="pagepic" />
          <span className='pagename'>F e e L s :</span>
        </li>
       </div>
      </div>
     </div>
      </div>
  )
}

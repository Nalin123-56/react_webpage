import React from 'react'
import "./addpost.css"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function Addpost() {
  return (
    <div className='addpost'>
        <div className="addpostcontainer">
            <div className="addposttop">
                <img src='/images/1.png' alt='' className='addpostpic'/>
                <input type='text' placeholder='what is your mind...?' className='addpostinput'/>
            </div>
            <hr className='posthr'/>
            <div className="addpostbottom">
                <div className="addpostoptions">
                    <div className="addpostoption">
                    <InsertPhotoIcon fontSize='' htmlColor='orange'  className='addphoto'/>
                <span className="addpostoptiontext"><small>Add photo/video</small></span>
                    </div>
                    <div className="addpostoption">
                    <AddLocationAltIcon fontSize='' htmlColor='red' className='addphoto'/>
                <span className="addpostoptiontext"><small>Add location</small></span>
                    </div>
                    <div className="addpostoption">
                    <LocalOfferIcon fontSize='' htmlColor='blue' className='addphoto'/>
                <span className="addpostoptiontext"><small>Add tag</small></span>
                    </div>
                    <div className="addpostoption">
                    <LiveTvIcon htmlColor='tomato' fontSize="" className='addphoto'/>
                <span className="addpostoptiontext"><small>Go live</small></span>
                    </div>
                </div>
                <button className="postbutton">post</button>
            </div>
        </div>
    </div>
  )
}

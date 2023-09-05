import React from 'react'
import "./post.css"

export default function Post() {
  return (
    
        <div className="post">
            <div className="postcontainer">
                <div className="posttop">
                    <img src="/images/2.jpg" width="50px" alt="" className="postimage" />
                    <spam className="postusername">Nalin priyankara</spam>
                    <spam className="posttime">5min ago</spam>
                </div>
                <div className="postcenter">
                    <div className="postcaption">hellow</div>
                    <img src="/images/2.jpg" width="100%" alt="" className="postedimage" />
                </div>
                <div className="postbottom">
                    <div className="postbottomleft">
                        <img src="/images/like.png" width="30px" alt="" className="reactpost"/>
                        <img src="/images/heart.png" width="45px" alt="" className="reactpost"/>
                        <img src="/images/haha.jpeg" width="20px" alt="" className="reactpost"/>
                        <spam className="likecount">you and 173 other</spam>
                    </div>
                    <div className="postbottomright">
                        <span className="commentcount">
                            15 comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    

  )
}

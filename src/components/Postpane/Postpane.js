import React from 'react'
import "./postpane.css"
import Addpost from '../Addpost/Addpost'
import Post from '../Post/Post'

export default function Postpane() {
  return (
    <div className='postpanebox'>
      <Addpost/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

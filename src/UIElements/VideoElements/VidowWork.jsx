import React from 'react'
import ReactPlayer from 'react-player'
import '../../css/Video/videoWork.css'
const VidowWork = () => {
  return (
    <div>
        <ReactPlayer width={350} controls={false} className="mx-auto VidoeStyle" url={"https://youtube.com/shorts/hEm6kAHCJNk?feature=share"}/>
    </div>
  )
}

export default VidowWork
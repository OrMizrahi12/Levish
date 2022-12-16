import React, { useEffect } from 'react'
import '../../css/TxtElements/TitleAnim.css'


const TitleAnim = ({title}) => {

  return (
    <div class="banner">
        <div class="overlay">
            <h1 id='titleAnimation' className='titleAnimation'>{title}</h1>
        </div>
 </div>
  )
}

export default TitleAnim
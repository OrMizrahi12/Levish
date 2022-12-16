import React from 'react'
import '../../css/TxtElements/Explanation.css';

const Explanation = ({text}) => {
  return (
    <div>
        <br />
        <br />
        <div className='wraper1'>
        <div className='textRight'>
        <p className='textStyle text-break' >{text}</p>
        </div>
        </div>
    </div>
  )
}

export default Explanation
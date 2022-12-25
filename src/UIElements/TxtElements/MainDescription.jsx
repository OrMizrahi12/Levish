import React from 'react'
import '../../css/TxtElements/MainDescription.css'

const MainDescription = ({title, description, perfectSolution}) => {
  return (
    <div id='wraperDescription' className='wraperDescription elementCenter'>
       <h3 className=' display-6 fw-bold' id='MyHAnimation' style={{ color: "rgb(25,100,57)" }}>{title}</h3>
       <p className='m-3 bold'>{description}  <span className='lineUnder'>{perfectSolution}</span>      
      </p>
    </div>
  )
}

export default MainDescription
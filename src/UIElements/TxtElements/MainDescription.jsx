import React from 'react'
import '../../css/TxtElements/MainDescription.css'

const MainDescription = ({title, description}) => {
  return (
    <div id='wraperDescription' className='wraperDescription elementCenter'>
       <h3 className=' display-4 fw-bold' id='MyHAnimation' style={{ color: "rgb(25,100,57)" }}>{title}</h3>
       {/* <h4 className='m-3 display-6 fw-bold' style={{ color: "rgb(25,100,57)" }}> {description}</h4> */}
       <p className='m-3 bold'>{description} <span className='lineUnder'>הפתרון המושלם עבורך</span>
      
      </p>

    </div>
  )
}

export default MainDescription
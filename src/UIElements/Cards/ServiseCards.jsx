import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/Cards/ServiseCards.css'
import { serviseArr } from '../../Data/Home/ServisArr'

const ServiseCards = () => {
  const navigate = useNavigate();
  return (
    <div className='cardServisSenter'>
        {
            serviseArr.map(element =><div class="card mx-auto">
            <div class="card-image">
              <img class="" src={element.img} alt=""/>
            </div>
            <div class="card-content">
              <div class="card-text">
                <div class="card-title">
                 {element.title}
                </div>
                <div class="card-subtitle">
                  {element.suvTitle}
                </div>
                <div class="card-sentence">
                  {element.shortDescription}
                </div>
                <div class="card-buttons">
                  <a class="card-button" href='#' onClick={()=>navigate(element.toPage)}>{element.btnContent}</a>
                </div>
              </div>
            </div>
          </div>)
          
        }

  </div>
  )
}

export default ServiseCards
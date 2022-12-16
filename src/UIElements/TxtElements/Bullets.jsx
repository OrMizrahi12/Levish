import React from 'react'
import BulletImg from '../../Images/Logo.png'
import '../../css/TxtElements/Bullet.css'
import { bulltsArr } from '../../Data/BulletsArr'

const Bullets = () => {
  return (
    <div className='bulletCard'>
    <div className='elementRight'>
        <br />
        {
          bulltsArr.map(element => <>
                  <span className='textBulletCss'>{element}</span>
        <img className='singleBullt' src={BulletImg}  />
        <br  />
          </> )
        }

    </div>
    </div>
  )
}

export default Bullets
import React from 'react'
import '../../css/Cards/SelfAppearance.css'
import img from '../../Images/serviseImg/FreckelsServiseImg.jpg'

const SelfAppearance = () => {
  return (
    <div>
    <div className='weraperAppearanceImg'>
    <img className='appearanceImg' src={img} />
    <p className='txtPatern mx-auto'>
      ,היי אני נועה<br />
       אני עוסקת באיפור קבוע מאז שאני זוכרת את עצמי. 
      אני נותנת שירות ללא פשרות למעל 30 לקוחות מרוצות בחודש. אשמח שתיהי הלקוחה המרוצה ההבאה שלי
     </p>
    </div>
    </div>
  )
}

export default SelfAppearance
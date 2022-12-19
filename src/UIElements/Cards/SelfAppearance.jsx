import React from 'react'
import '../../css/Cards/SelfAppearance.css'
import img from '../../Images/NoaImg.jpg'


const SelfAppearance = () => {

  return (
    <div>
    <div className='weraperAppearanceImg'>
    <img className='appearanceImg' src={img} />
    <p className='txtPatern mx-auto'>
      ,היי אהובה שמי נועה<br />
      אני אמנית איפור קבוע והדגשת תווי פנים בשיטות אירופאיות יחודיות וחדישות. אני אוהבת לתת שירות וטיפול ללא פשרות - בשביל שאת תיהי הכי מרוצה שאפשר. 
      מחכה לך בקליניקה שלי 
      <br />🖤
     </p>
    </div>
    </div>
  )
}

export default SelfAppearance
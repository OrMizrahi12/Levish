import React from 'react'
import DownArrow from '../UIElements/BtnElements/DownArrow'
import Recomendeds from '../UIElements/Carousels/Recomendeds'
import SecondTitleAnim from '../UIElements/TxtElements/SecondTitleAnim'
import TitleAnim from '../UIElements/TxtElements/TitleAnim'
import '../css/Home.css'
import ServiseCards from '../UIElements/Cards/ServiseCards'
import WordInMiddleOfLine from '../UIElements/TxtElements/WordInMiddleOfLine'
import Bullets from '../UIElements/TxtElements/Bullets'
import { txtHome } from '../Data/Home/TxtHome'
import QandR from '../UIElements/TxtElements/QandR'
import { arrQandR_H } from '../Data/Home/QandRHomeArr'
import MyAccordion from '../UIElements/TxtElements/MyAccordion '
import CallMeBtn from '../UIElements/BtnElements/CallMeBtn'
import Form from '../UIElements/Forms/Form'
import Steps from '../UIElements/Cards/Steps'
import { arrStepsHome } from '../Data/Home/StepsArrHome'


const Home = () => {
  return (
    <div>
      <div style={{marginTop: 30}}>
       <TitleAnim title={"LEVISH"} />
       <SecondTitleAnim secondTitle={"מתמחים באיפור קבוע"} />
        <a href="#ourServise"><DownArrow  /></a>
        <br /><br /><br /><br />
        <p  className='showServiseP'>גלה את השרותים  שלנו</p>
        <br /><br />
        <div id='ourServise' style={{marginTop:80}}>
        <WordInMiddleOfLine value={"אנחנו מתמחים ב"} />
        </div>
        <div style={{marginTop: 130}} >
        <ServiseCards /> 
        </div>
        <div style={{marginTop:80}}>
        <WordInMiddleOfLine value={"מה זה איפור קבוע"} />
        </div>
        <div style={{marginTop:60}}>
          <MyAccordion explenationText={txtHome} />
        </div>
        <div style={{marginTop:80}}>
        <WordInMiddleOfLine value={"למה כדאי אצלנו"} />
        </div>
        <div style={{marginTop:60}}>
        <Bullets  /> 
        </div>
        <div style={{marginTop:80}}>
        <WordInMiddleOfLine value={"יש לי כמה שאלות"} />
        </div>
        <div style={{marginTop:69}}>
         <QandR QandRArr={arrQandR_H} /> 
        </div>
        <div  style={{marginTop:80}}>
          <WordInMiddleOfLine value={"תהליך"} />
        </div>
        <div style={{marginTop:80}}>
        <Steps arrStep={arrStepsHome} />
        </div>
        <div style={{marginTop:80}}>
        <WordInMiddleOfLine value={"?רוצה שנדבר"} />
        </div>
        <div style={{marginTop:40}} >
          <CallMeBtn ActionText={"התקשרי אליי"} />
        </div>
        <div style={{marginTop:-120}}>
        <WordInMiddleOfLine value={"או"} />
        </div>
        <div>
          <Form /> 
        </div>
      </div>
    </div>
  )
}

export default Home 
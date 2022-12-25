import React from 'react'
import Form from '../../UIElements/Forms/Form'
import WordInMiddleOfLine from '../../UIElements/TxtElements/WordInMiddleOfLine'
import MainDescription from '../../UIElements/TxtElements/MainDescription'
import ShowGallery from '../../UIElements/Carousels/ShowGallery'
import { ArrImajes } from '../../Data/Freckels/Cust_F_arr'
import CallMeBtn from '../../UIElements/BtnElements/CallMeBtn'
import Bullets from '../../UIElements/TxtElements/Bullets'
import QandR from '../../UIElements/TxtElements/QandR'
import { arrQandR_F } from '../../Data/Freckels/QandRFreckelsArr'
import { txtFreckels, txtSolve } from '../../Data/Freckels/TxtFreckels'
import MyAccordion from '../../UIElements/TxtElements/MyAccordion '
import Steps from '../../UIElements/Cards/Steps'
import SelfAppearance from '../../UIElements/Cards/SelfAppearance'
import VidowWork from '../../UIElements/VideoElements/VidowWork'
import MainImg from '../../UIElements/Cards/MainImg'
import mainImg from '../../Images/FrecelsImges/FImgjpg.jpg'


const MainFreckels = () => {
  return (
    <div>
      <MainDescription title={"איפור קבוע נמשים"} description={txtSolve} perfectSolution={"הפתרון המושלם עבורך"} />
      <MainImg MainImg={mainImg} />
      <div style={{ marginTop: 40 }}>
        <SelfAppearance /> 
      </div>
      <div id='ourServise' style={{ marginTop: 80 }}>
      <WordInMiddleOfLine value={"הצצה לטיפולים"} />
        </div>
        <div style={{ marginTop: 80 }}>
        <VidowWork />
        </div>
        <div id='ourServise' style={{ marginTop: 80 }}>
          <WordInMiddleOfLine value={"הלקוחות המרוצות שלי"} />
        </div>
        <div style={{ marginTop: 80 }}>
        <ShowGallery arr={ArrImajes} />
        </div>
      <div style={{ marginTop: 80 }}>
        <WordInMiddleOfLine value={"בואי נדבר"} />
      </div>
      <div style={{ marginTop: 50 }}>
        <CallMeBtn ActionText={"התקשרי אליי"} />
      </div>
      <div style={{ marginTop: -120 }}>
        <WordInMiddleOfLine value={"או"} />
        <Form />
      </div>
      <div style={{ marginTop: 70 }}>
        <WordInMiddleOfLine value={"?מה זה בכלל"} />
        <br />
        <MyAccordion explenationText={txtFreckels} />
      </div>
      <div style={{ marginTop: 70 }}>
        <WordInMiddleOfLine value={"?רגע, למה אצלך"} />
      </div>
      <div style={{ marginTop: 70 }}>
        <Bullets />
      </div>
      <div style={{ marginTop: 70 }}>
        <WordInMiddleOfLine value={"יש לי כמה שאלות"} />
      </div>
      <div style={{ marginTop: 70 }}>
        <QandR QandRArr={arrQandR_F} />
      </div>
      <div style={{ marginTop: 80 }}>
        <WordInMiddleOfLine value={"? ומה התהליך"} />
      </div>
      <div style={{ marginTop: 80 }}>
        <Steps />
      </div>
      <div style={{ marginTop: 80 }}>
        <WordInMiddleOfLine value={"?רוצה לשמוע יותר"} />
      </div>
      <div style={{ marginTop: 50 }}>
        <CallMeBtn ActionText={"התקשרי עכשיו"} />
      </div>
      <div style={{ marginTop: -120 }}>
        <WordInMiddleOfLine value={"או"} />
        <Form />
      </div>
    </div>
  )
}

export default MainFreckels
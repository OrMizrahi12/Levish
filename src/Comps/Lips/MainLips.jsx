import React from 'react'
import Bullets from '../../UIElements/TxtElements/Bullets'
import CallMeBtn from '../../UIElements/BtnElements/CallMeBtn'
import Form from '../../UIElements/Forms/Form'
import MainDescription from '../../UIElements/TxtElements/MainDescription'
import ShowGallery from '../../UIElements/Carousels/ShowGallery'
import WordInMiddleOfLine from '../../UIElements/TxtElements/WordInMiddleOfLine'
import QandR from '../../UIElements/TxtElements/QandR'
import { arrQandR_L } from '../../Data/Lips/QandRLipsArr'
import { txtLips } from '../../Data/Lips/TxtLips'
import MyAccordion from '../../UIElements/TxtElements/MyAccordion '
import Steps from '../../UIElements/Cards/Steps'
import { arrStepsLips } from '../../Data/Lips/StepsArrLips'
import { txtSolve } from '../../Data/Lips/TxtLips'
import { ArrImajesLips } from '../../Data/Lips/Cust_L_arr'
import SelfAppearance from '../../UIElements/Cards/SelfAppearance'
import VidowWork from '../../UIElements/VideoElements/VidowWork'

const MainLips = () => {
  return (
    <div>
      <MainDescription title={"היי את"} description={txtSolve}  perfectSolution={"הפתרון המושלם עבורך"} />
      <ShowGallery arr={ArrImajesLips} />
      <div style={{ marginTop: 40 }}>
        <SelfAppearance /> 
      </div>
      <div id='ourServise' style={{ marginTop: 80 }}>
          <WordInMiddleOfLine value={"מעניקה למטופלות שלי הכל"} />
        </div>
        <div style={{ marginTop: 80 }}>
        <VidowWork />
        </div>
      <div style={{ marginTop: 60 }}>
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
        <MyAccordion explenationText={txtLips} />
      </div>
      <div style={{ marginTop: 70 }}>
        <WordInMiddleOfLine value={"למה דווקא אצלי"} />
      </div>
      <div style={{ marginTop: 70 }}>
        <Bullets />
      </div>
      <div style={{ marginTop: 70 }}>
        <WordInMiddleOfLine value={"אוקי, יש לי שאלה"} />
      </div>
      <div style={{ marginTop: 70 }}>
        <QandR QandRArr={arrQandR_L} />
      </div>
      <div style={{ marginTop: 80 }}>
        <WordInMiddleOfLine value={"תהליך"} />
      </div>
      <div style={{ marginTop: 80 }}>
        <Steps arrStep={arrStepsLips} />
      </div>
      <div style={{ marginTop: 80 }}>
        <WordInMiddleOfLine value={"?שנדבר"} />
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

export default MainLips
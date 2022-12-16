import React from 'react'
import CallMeBtn from '../../UIElements/BtnElements/CallMeBtn'
import Form from '../../UIElements/Forms/Form'
import MainDescription from '../../UIElements/TxtElements/MainDescription'
import WordInMiddleOfLine from '../../UIElements/TxtElements/WordInMiddleOfLine'
import Steps from '../../UIElements/Cards/Steps'
import QandR from '../../UIElements/TxtElements/QandR'
import { arrQandR_H } from '../../Data/Home/QandRHomeArr'
import ServiseCards from '../../UIElements/Cards/ServiseCards'
const ContactUs = () => {
  return (
    <div>
      <MainDescription title={"צרי איתי קשר"} description={"בשבילך בטלפון, וואצפ או דרך השארת פרטים"} />
      <div style={{ marginTop: 50 }}>
        <CallMeBtn ActionText={"התקשרי אליי"} />
      </div>
      <div style={{ marginTop: -120 }}>
        <WordInMiddleOfLine value={"אפשר גם"} />
      </div>
      <Form />
      <div style={{ marginTop: 70 }}>
        <WordInMiddleOfLine value={"?מה התהליך"} />
      </div>
      <div style={{ marginTop: 70 }} >
        <Steps />
      </div>
      <div style={{ marginTop: 70 }}>
        <WordInMiddleOfLine value={"יש לי כמה שאלות"} />
      </div>
      <div style={{ marginTop: 70 }}>
        <QandR QandRArr={arrQandR_H} />
      </div>
      <div style={{ marginTop: 70 }}>
        <WordInMiddleOfLine value={"?במה את מתמחה"} />
      </div>
      <div style={{ marginTop: 100 }}>
        <ServiseCards />
      </div>
      <div style={{ marginTop: 70 }}>
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

export default ContactUs
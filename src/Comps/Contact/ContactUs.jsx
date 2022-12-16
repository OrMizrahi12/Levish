import React from 'react'
import CallMeBtn from '../../UIElements/BtnElements/CallMeBtn'
import Form from '../../UIElements/Forms/Form'
import MainDescription from '../../UIElements/TxtElements/MainDescription'
import Recomendeds from '../../UIElements/Carousels/Recomendeds'
import WordInMiddleOfLine from '../../UIElements/TxtElements/WordInMiddleOfLine'

const ContactUs = () => {
  return (
    <div>
      <MainDescription title={"צרי איתי קשר"}  description={"..בשבילך ב"}/>
      <div style={{marginTop: 50}}>
      <CallMeBtn ActionText={"התקשרי אליי"} />
      </div>
      <div style={{marginTop:-120}}>
      <WordInMiddleOfLine value={"אפשר גם"}/>
      </div>
      <Form />
      <div style={{marginTop: 70}}>
     <WordInMiddleOfLine value={"מטופלות ממליצות"} />
     </div>
     <div style={{marginTop: 70}} >
      <Recomendeds />
     </div>
    </div>
  )
}

export default ContactUs
import React from 'react'
import { useNavigate } from 'react-router-dom'
import WordInMiddleOfLine from '../UIElements/TxtElements/WordInMiddleOfLine'

const ThanksPage = () => {
    const navigate = useNavigate();
    return (
        <div className='App'>
            <p className='' style={{ color: "rgb(25,100,57)", fontSize: 30 }}>תודה על פנייתך</p>
            <p className='' style={{ color: "rgb(25,100,57)", fontSize: 30 }}>אנחנו נשמור על קשר</p>
            <div style={{ marginTop: 70 }}>
                <WordInMiddleOfLine value={"? שנמשיך לטייל באתר"} />
            </div>
            <div style={{ marginTop: 70 }}>
                <button style={{
                    padding: 10,
                    backgroundColor: "rgb(228,167,171)",
                    borderRadius: 10,
                    color:"rgb(25,100,57)",
                    fontWeight:"bold",
                    letterSpacing:2, 
                    boxShadow:"0px 2px 6px black"
                }}
                onClick={() => navigate("/")}
                 >{"<<"}גלי עוד שרותים
                </button>
            </div>
        </div>
    )
}

export default ThanksPage
import React, { useEffect, useState } from 'react'
import '../../css/Cards/LevishPopup.css'

let sec = 0;
let popUpTimer;
const LevishPopup = () => {

    const [model, setModel] = useState(true);

    const ToggleModel = () => setModel(!model);

    if (!model) {
        document.body.classList.add("active-popup");
    }
    else {
        document.body.classList.remove("active-popup");
    }

    const PopUpTimeing = () => {
        popUpTimer = setInterval(callbackInterval, 1000)
    }

    const callbackInterval = () => {
        sec++;
        if (sec == 10) {
            setModel(!model);
            clearInterval(popUpTimer);
        }
    }

    useEffect(() => {
        PopUpTimeing();
    }, [])

    return (
        <div>
            <div hidden={model} className="popup-box mx-auto">
                <div className="box">
                    <button className='btnClose' onClick={ToggleModel}>X</button>

                    <h1 className='PopUpTitle'>? חדשה פה</h1>
                    <p className='popUpTxt'>קבלי מתנת היכרות של 2 טיפולי מיקרופיגמנטציה <span className='markPriceTxtPopup'> ב800 שח בלבד</span> </p>
                    <h3 className='PopUpTitle1 '>! אני רוצה את ההטבה</h3>
                    <div className="wrapBtnPopUp">
                        <button onClick={()=> window.open("https://api.whatsapp.com/send?phone=+972556869701&text=היי נועה, אני מתעניינת לגבי...")} className="whatsAppBtnPopUp"> 
                        WhatsApp</button>
                        <button onClick={()=> window.open('tel:+97255-6869701')} className="callMeBtnPopUp">Call Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LevishPopup
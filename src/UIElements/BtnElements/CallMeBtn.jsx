import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/BtnElements/CallMeBtn.css'

const CallMeBtn = ({ActionText}) => {
    const navigate = useNavigate();
    return (
        <div className='elementCenter' id='contactAnchor' >
            <a href='tel:+972556869701'>
            <button id='MyCallMeBtn' className='MyCallMeBtn m-3' onClick={()=> navigate("/TanksPage")}>
                {ActionText}
            </button>
            </a>
            <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default CallMeBtn
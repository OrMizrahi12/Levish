import React from 'react'
import '../../css/BtnElements/CallMeBtn.css'

const CallMeBtn = ({ActionText}) => {
    return (
        <div className='elementCenter' id='contactAnchor' >
            <a href='tel:+972556869701'>
            <button id='MyCallMeBtn' className='MyCallMeBtn m-3 '>
                {ActionText}
            </button>
            </a>
            <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default CallMeBtn
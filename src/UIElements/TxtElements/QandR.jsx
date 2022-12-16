import React from 'react'
import '../../css/TxtElements/QandR.css'
import BulletLevish from '../../Images/FrecelsImges/BulletLevish.png'
import Qside from '../../Images/Qside.png'


const QandR = ({ QandRArr }) => {
    return (
        <div id='qAndRAnchor'>
            {
                QandRArr.map(element => <>

                    {
                        element.entity == "Q" ? <div className="msg msg_to">
                            <div className='sender'>
                                <span class="icon"> <img className='QImg' src={Qside} /> </span>
                            </div>
                            <div class="content">{element.mark} {element.content} </div>
                        </div> : <div className="msg msg_from">
                            <div class="recepient">
                                <span class="icon"> <img className='Aimg' src={BulletLevish} /> </span>
                            </div>
                            <div class="content">{element.content}</div>
                        </div>
                    }
                </>
                )
            }

        </div>
    )
}

export default QandR

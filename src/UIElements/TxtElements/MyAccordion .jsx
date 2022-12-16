import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Explanation from './Explanation';
import '../../css/TxtElements/MyAccordion.css'

const MyAccordion = ({ explenationText }) => {
        
    return (
        <Accordion defaultActiveKey="0" id='explainAnchor'>
            <Accordion.Item eventKey="0">
                <Accordion.Header></Accordion.Header>
                <Accordion.Body>
                 <Explanation text={explenationText} />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default MyAccordion 
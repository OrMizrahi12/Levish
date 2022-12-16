import React from 'react'
import { arrSteps } from '../../Data/StepsArr'

const Steps = () => {
    return (
        <div class="container my-5" id='stepsAnchor'>
                <div class="col-12 col-md-6 mx-auto">
                    {
                        arrSteps.map((step, i) =>
                                <div style={{borderLeft:"solid 4px rgb(25,100,57",borderRadius:10  }} class="bg-light position-relative px-3 my-5">
                                    <div class="font-weight-bold circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white"
                                        style={{ width: 60, height: 60, top: -30, borderWidth: 4, backgroundColor: "rgb(228, 167, 171)" }}>
                                        {i + 1}
                                    </div>
                                    <div class="px-3 text-center pb-3">
                                        <h4 style={{ color: "rgb(25,100,57)" }}>{step.stepTitle}</h4>
                                        <p style={{ color: "rgb(25,100,57)" }} class="font-weight-light my-3">{step.stepDescription}</p>
                                    </div>
                                </div>
                        )
                    }
                </div>
        </div>
    )
}

export default Steps
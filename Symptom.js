import React from 'react'
import './Symptom.css'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
export default function Symptom() {
    return (
        <div className="container">
            <div className="sub-container">
                <img src="https://image.freepik.com/free-vector/coughing-person-with-coronavirus_23-2148485525.jpg"/>
                <div className="sympton-container">
                    <h1>Symptoms Covid-19</h1><br/>
                        <h3><KeyboardArrowRightIcon/>Most common symptoms:</h3>
                            <p>•fever<br/>•dry cough<br/>•tiredness</p>
                        <h3><KeyboardArrowRightIcon/> Less common symptoms:</h3>
                            <p>•aches and pains<br/>•sore throat<br/>•diarrhoea<br/>•conjunctivitis<br/>•headache<br/>•loss of taste or smell<br/>•a rash on skin, or discolouration of fingers or toes</p>
                        <h3><KeyboardArrowRightIcon/>Serious symptoms:</h3>
                            <p>•difficulty breathing or shortness of breath<br/>•chest pain or pressure<br/>•loss of speech or movement</p>
                </div>
            </div>
        </div>
    )
}

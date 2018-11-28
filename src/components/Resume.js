import React, { Component } from 'react'
import '../App.css'
import resume from './img/Resume.jpg'

export default class Resume extends Component {
    render() {
        return(
            <div className="page"  style={{marginLeft: 400, marginRight: 400}}>
                <div className={"img"} >
                    <img src={resume}   />
            </div>
            </div>
        )
    }
}
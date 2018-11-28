import React, { Component } from 'react'
import '../App.css'
import { Carousel } from 'react-responsive-carousel';
import pic1 from './img/pic1.jpg'
import pic2 from './img/pic2.JPG'
import pic3 from './img/pic3.JPG'

export default class Home extends Component {


    render() {
        return (
<div className="home">

            <Carousel autoPlay showThumbs={false} showArrows={false} infiniteLoop emulateTouch showStatus={false} >
                <div className="homePicture">
                    <img  src={pic1}   />
                </div>
                <div className={"homePicture"}>
                    <img src={pic2} />
                </div>
                <div className={"homePicture"}>
                    <img src={pic3} />
                </div>
            </Carousel>
    <h3 className="display-6">About me</h3>
    <p>I am currently a web developer looking for a full time job in the industry.
        I graduated with an AS in computer science in 2018 and am currently interning at Mentor Global Consultants</p>
</div>

        );
    }
}



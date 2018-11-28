import React, { Component } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (


            <div className="d-flex justify-content-around align-items-center" style={{marginTop: 30}}>


                <h1 className="d-flex display-4" style={{paddingTop: -20}}>Brandon Foley</h1>

                <Link to="/">
                    <button type="button" className="btn btn-outline-dark">Home</button>
                </Link>
                <Link to="/resume">
                    <button type="button" className="btn btn-outline-dark">Resume</button>
                </Link>
                <Link to="/contact">
                    <button type="button" className="btn btn-outline-dark">Contact</button>
                </Link>

            </div>


        )
    }

}

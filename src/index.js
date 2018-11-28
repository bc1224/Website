import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter, Route} from "react-router-dom";
import App from '../src/App'
import "react-responsive-carousel/lib/styles/carousel.min.css";


ReactDOM.render(
    <BrowserRouter>
            <Route path="/" component={App} />
    </BrowserRouter>
    ,
    document.getElementById('root' ));






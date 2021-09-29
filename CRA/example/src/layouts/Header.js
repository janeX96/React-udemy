import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import image1 from '../images/img1.jpg'
import image2 from '../images/img2.jpg'
import image3 from '../images/img3.jpg'
import '../styles/Header.css'

const Header = () => {
    //losowanie obrazka
    // const images = [image1,image2,image3]
    // const index = Math.floor(Math.random() * 3)

    // const img = images[index]
    return ( 
        <>
            <Switch>
                <Route path="/" exact render={()=> (
                <img src={image1} alt="city"/>
                )}/>
                <Route path="/products" render={()=> (
                    <img src={image2} alt="city"/>
                )}/>
                <Route path="/contact" render={()=> (
                    <img src={image3} alt="city"/>
                )}/>
                <Route path="/admin" render={()=> (
                    <img src={image3} alt="city"/>
                )}/>
                 <Route render={()=> (
                    <img src={image1} alt="city"/>
                )}/>
            </Switch>

            {/* <img src={img} alt="header"/> */}
        </>
    );
}
 
export default withRouter(Header);
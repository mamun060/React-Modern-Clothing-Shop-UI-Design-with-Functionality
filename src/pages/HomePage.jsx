import React, { Component, Fragment } from 'react'
import Navbar from '../components/Navbar';
import Announcment from '../components/Announcment';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <Announcment />
                <Navbar />
            </Fragment>
         );
    }
}
 
export default HomePage;
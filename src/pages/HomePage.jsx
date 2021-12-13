import React, { Component, Fragment } from 'react'
import Navbar from '../components/Navbar';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <Navbar />
            </Fragment>
         );
    }
}
 
export default HomePage;
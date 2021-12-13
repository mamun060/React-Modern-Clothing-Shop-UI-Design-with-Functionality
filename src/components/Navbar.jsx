import React, { Component, Fragment } from 'react'
import styled from 'styled-components';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <Container>
                    navber
                </Container>
            </Fragment>
         );
    }
}
 
export default Navbar;

// eslint-disable-next-line no-unused-vars
const Container = styled.div`
height: 60px;
background-color:#000;
color: #fff;
`

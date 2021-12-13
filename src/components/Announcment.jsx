import { Component } from 'react'
import styled from "styled-components";

class Announcment extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Container>Super Deal! Free Shipping on Orders Over $50</Container>
         );
    }
}
 
export default Announcment;

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
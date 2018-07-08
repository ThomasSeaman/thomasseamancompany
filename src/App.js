import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';
import Footer from './Components/Footer/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Row>
        <Col s={12} className='title'>Thomas Seaman Company</Col>
      </Row>
      <Row>
      <Col s={12} className='companyDescription'>Orange Country Judical Reciever</Col>
    </Row>
    <Row>
      <Col s={12} className='companyDescription'>Cases</Col>
    </Row>
    <Row>
      <Col s={4} className='companyDescription'>Construction</Col>
      <Col s={4} className='companyDescription'>Rents and Profits</Col>
      <Col s={4} className='companyDescription'>Operating Companies</Col>
    </Row>
    <Row>
      <Col s={4} className='companyDescription'>Assisted Living</Col>
      <Col s={4} className='companyDescription'>Regulatory</Col>
      <Col s={4} className='companyDescription'>Other Notable Cases</Col>
    </Row>
    <Row>
      <Col s={4} className='companyDescription'>About</Col>
      <Col s={4} className='companyDescription'>Contact</Col>
      <Col s={4} className='companyDescription'>Team</Col>
    </Row>
    <Footer></Footer>
      </div>
    );
  }
}


export default App;

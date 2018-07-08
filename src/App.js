import React, { Component } from 'react';
// import { Col, Row } from 'react-materialize';
import Title from './Components/Title/Title';
import CompanyDescription from './Components/CompanyDescription/CompanyDescription';
import Cases from './Components/Cases/Cases';
import CaseCards from './Components/CaseCards/CaseCards';
import Information from './Components/Information/Information';
import BottomNav from './Components/BottomNav/BottomNav';
import Nav from './Components/Nav/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <Title></Title>
        <CompanyDescription></CompanyDescription>
        <Cases></Cases>
        <CaseCards></CaseCards>
        <Information></Information>
        <BottomNav></BottomNav>
      </div>
    );
  }
}


export default App;

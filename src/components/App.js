/* eslint-disable constructor-super */
/* eslint-disable no-empty-function */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './Calculator';
import Quote from './Quote';
import Home from './Home';
// import Nav from './Nav';
// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  constructor() {
  }

  render() {
    return (
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

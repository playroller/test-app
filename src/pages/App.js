import React, { Component } from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './home';
import Icon from './icon';



export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/icon'} element={<Icon />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
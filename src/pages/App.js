import React, { Component } from 'react';

import IconButton from '@mui/material/Button';

import AbcIcon from '@mui/icons-material/Abc';

import './../style/App.css'



export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<IconButton>
      <AbcIcon />
    </IconButton>)};
}
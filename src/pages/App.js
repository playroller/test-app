import React, { Component } from 'react';

import IconButton from '@mui/material/Button';

import AbcIcon from '@mui/icons-material/Abc';

import './../style/App.css'



export default class App extends Component {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    alert('うしたぷにきあくん');
  }

  render() {
    return (<IconButton onClick={this.onClick}>
      <AbcIcon />
    </IconButton>)};
}
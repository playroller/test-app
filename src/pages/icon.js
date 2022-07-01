import React, { Component } from 'react';

import IconButton from '@mui/material/Button';

import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import './style/icon.css';

import Link from './../components/link';



export default class App extends Component {
  constructor(props) {
    super(props);
  }

  onClick(text) {
    alert(text);
  }

  render() {
    return (
    <div>
      <Link link='/' text='ホームに戻る' linkStyle={{fontSize: 20}} />
      <br />

      <IconButton onClick={() => this.onClick('うしたぷにきあくん笑')}>
        <ChatIcon />
      </IconButton>
      <IconButton onClick={() => this.onClick('うっくっく')}>
        <MoreVertIcon />
      </IconButton>
    </div>)
  };
}
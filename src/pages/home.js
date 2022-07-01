import React, { Component } from "react";

import Link from './../components/link';



export default class home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>React勉強記録のページ</h1>
        <Link link='/icon' text='Material-UI/icon' linkStyle={{fontSize: 20}} />
      </div>
    );
  }
}
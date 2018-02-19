import React, { Component } from "react";

import api from './api';
import Employees from "./components/Employees";


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    api.get().then(json => this.setState({ data: json }));
  }

  render() {
    return (
      <div>
        <h1>Employees</h1>
        <div className="header-bar" />
        <Employees />
      </div>
    );
  }
}


export default App;

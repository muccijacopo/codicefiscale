import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form/Form";
import CodiceFiscale from "./components/CodiceFiscale/CodiceFiscale";

class App extends Component {
  state = {
    codiceFiscale: "",
  };

  onCodiceFiscaleChange = (cf: string) => {
    this.setState({
      codiceFiscale: cf,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Generatore Codice fiscale</h1>
        <Form codiceFiscaleChange={this.onCodiceFiscaleChange} />
        <CodiceFiscale codiceFiscale={this.state.codiceFiscale} />
      </div>
    );
  }
}

export default App;

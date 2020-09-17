import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form/Form";
import CodiceFiscale from "./components/CodiceFiscale/CodiceFiscale";

import { takeFirstConsontants } from "./utils/cf-utils";

class App extends Component {
  state = {
    codiceFiscalePartials: {
      name: "",
      lastname: "",
    },
  };

  onFormChange = (key: string, value: string) => {
    let cfPartial: string = "";
    if (key === "name" || key === "lastname") {
      cfPartial = takeFirstConsontants(value);
    }

    if (cfPartial) {
      this.setState({
        codiceFiscalePartials: {
          ...this.state.codiceFiscalePartials,
          [key]: cfPartial,
        },
      });
    }

    console.log(this.state);
  };

  render() {
    const { name, lastname } = this.state.codiceFiscalePartials;
    const codiceFiscaleComplete = name + lastname;
    return (
      <div className="App">
        {/* <h1>Generatore Codice fiscale</h1> */}
        <Form formChange={this.onFormChange} />
        <CodiceFiscale codiceFiscale={codiceFiscaleComplete} />
      </div>
    );
  }
}

export default App;

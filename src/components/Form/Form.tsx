import React, { Component } from "react";

import "./Form.css";
import { Input } from "./Input";

import { takeFirstConsontants } from "../../utils/cf-utils";

interface Props {
  codiceFiscaleChange: (cf: string) => void;
}

class Form extends Component<Props> {
  onValueChanged(event: Event, name: string) {
    const value = (event.target as HTMLInputElement).value;
    this.setState({
      [name]: value,
    });

    const filteredValue = takeFirstConsontants(value);
    if (filteredValue) this.props.codiceFiscaleChange(filteredValue);
    // this.props.codiceFiscaleChange(filtered);
  }

  state = {
    name: "Nome",
    lastname: "Cognome",
    gender: "Maschio",
    city: "Roma",

    codiceFiscale: "",
  };

  render() {
    return (
      <form className="Form">
        <div className="row">
          <Input
            name="name"
            value={this.state.name}
            valueChanged={(e) => this.onValueChanged(e, "name")}
          />
          <Input
            name="lastname"
            value={this.state.lastname}
            valueChanged={(e) => this.onValueChanged(e, "lastname")}
          />
        </div>
        <Input
          name="gender"
          value={this.state.gender}
          valueChanged={(e) => this.onValueChanged(e, "gender")}
        />
        <Input
          name="city"
          value={this.state.city}
          valueChanged={(e) => this.onValueChanged(e, "city")}
        />
      </form>
    );
  }
}

export default Form;

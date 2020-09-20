import React, { Component } from "react";
import "./App.css";

import Form, { IDate } from "./components/Form/Form";
import CodiceFiscale from "./components/CodiceFiscale/CodiceFiscale";

import {
  takeFirstConsontants,
  monthToCode,
  Month,
  generateDayGenderPart,
  getCityCode,
  generateControlCode,
} from "./utils/cf-utils";

class App extends Component {
  state = {
    gender: "",
    day: null,
    codiceFiscalePartials: {
      name: "",
      lastname: "",
      monthDate: "",
      yearDate: "",
      dayGender: "",
      city: "",
      controlCode: "",
    },
  };

  joinPartials = () => {
    const {
      name,
      lastname,
      yearDate,
      monthDate,
      dayGender,
      city,
      controlCode,
    } = this.state.codiceFiscalePartials;
    return (
      name + lastname + yearDate + monthDate + dayGender + city + controlCode
    );
  };

  setPartial(key: string, value: string) {
    this.setState({
      codiceFiscalePartials: {
        ...this.state.codiceFiscalePartials,
        [key]: value,
      },
    });

    const cfComplete = this.joinPartials();
    if (cfComplete.length >= 15) {
      const controlCode = generateControlCode(cfComplete);
      this.setState({
        codiceFiscalePartials: {
          ...this.state.codiceFiscalePartials,
          controlCode,
        },
      });
    }
  }

  onFormChange = (key: string, value: string | number) => {
    let cfPartial: string = "";
    if (key === "name" || key === "lastname")
      cfPartial = takeFirstConsontants(value as string);
    if (key === "yearDate") cfPartial = value.toString().slice(-2);
    if (key === "monthDate") cfPartial = monthToCode(value as number);
    if (key === "dayDate") {
      cfPartial = generateDayGenderPart(+value, this.state.gender);
      this.setState({
        day: +value,
      });
      key = "dayGender";
    }
    if (key === "gender") {
      cfPartial = generateDayGenderPart(this.state.day, value as string);
      this.setState({
        gender: value,
      });
      key = "dayGender";
    }
    if (key === "city") {
      cfPartial = getCityCode(value as string);
    }

    this.setPartial(key, cfPartial);
  };

  render() {
    const codiceFiscaleComplete = this.joinPartials();
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

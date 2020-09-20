import React, { Component } from "react";

import "./Form.css";
import { Input } from "./Input";

import { getValidFormat } from "./form-utils";

interface Props {
  formChange: (key: string, value: string) => void;
}

export interface IDate {
  day: number | null;
  month: number | null;
  year: number | null;
}

const genderValues = ["M", "F"];

class Form extends Component<Props> {
  state = {
    name: "",
    lastname: "",
    gender: "",
    city: "",
    dayDate: "",
    monthDate: "",
    yearDate: "",
  };

  handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    this.setState({
      [target.name]: target.value,
    });
    this.props.formChange(target.name, target.value);
  };

  render() {
    const {
      name,
      lastname,
      dayDate,
      monthDate,
      yearDate,
      gender,
      city,
    } = this.state;
    return (
      <form className="Form">
        <div className="row">
          <Input
            name="name"
            value={name}
            valueChanged={this.handleChange}
            placeholder="Mario"
          />
          <Input
            name="lastname"
            placeholder="Rossi"
            value={lastname}
            valueChanged={this.handleChange}
          />
          <Input
            name="gender"
            placeholder="M"
            value={gender}
            valueChanged={this.handleChange}
          />
        </div>
        <div className="row">
          <Input
            name="dayDate"
            placeholder="11"
            value={dayDate}
            valueChanged={this.handleChange}
          />
          <Input
            name="monthDate"
            placeholder="09"
            type="number"
            value={monthDate}
            valueChanged={this.handleChange}
          />
          <Input
            name="yearDate"
            placeholder="2001"
            type="number"
            value={yearDate}
            valueChanged={this.handleChange}
          />
        </div>

        <Input
          name="city"
          placeholder="Roma"
          value={city}
          valueChanged={this.handleChange}
        />
      </form>
    );
  }
}

export default Form;

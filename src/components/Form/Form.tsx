import React, { useState } from "react";

import { getValidFormat } from "../../utils/form";
import { CodiceFiscaleForm } from "../../models/codicefiscale.model";
import { Input } from "./Input";

import "./Form.scss";

interface Props {
  onFormChanges: (formValues: CodiceFiscaleForm) => void;
}

export interface IDate {
  day: number | null;
  month: number | null;
  year: number | null;
}

const Form = ({ onFormChanges }: Props) => {
  const [form, setForm] = useState<CodiceFiscaleForm>({
    name: "",
    lastname: "",
    gender: "",
    city: "",
    dayDate: "",
    monthDate: "",
    yearDate: "",
  });

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    const formattedValue = getValidFormat(name, value);
    const updatedForm = {
      ...form,
      [name]: formattedValue,
    };
    setForm(updatedForm);
    onFormChanges(updatedForm);
  };

  const { name, lastname, gender, dayDate, monthDate, yearDate, city } = form;
  return (
    <form className="Form">
      <div className="row">
        <Input
          name="name"
          value={name}
          valueChanged={handleChange}
          placeholder="Mario"
          style={{ width: "45% " }}
        />
        <Input
          name="lastname"
          placeholder="Rossi"
          value={lastname}
          valueChanged={handleChange}
          style={{ width: "45% " }}
        />
        <Input
          name="gender"
          placeholder="M"
          value={gender}
          valueChanged={handleChange}
          style={{ width: "10% " }}
        />
      </div>
      <div className="row">
        <Input
          name="dayDate"
          placeholder="11"
          value={dayDate}
          valueChanged={handleChange}
          style={{ width: "15%" }}
        />
        <Input
          name="monthDate"
          placeholder="09"
          type="number"
          value={monthDate}
          valueChanged={handleChange}
          style={{ width: "15%" }}
        />
        <Input
          name="yearDate"
          placeholder="2001"
          type="number"
          value={yearDate}
          valueChanged={handleChange}
          style={{ width: "30%" }}
        />
        <Input
          name="city"
          placeholder="Roma"
          value={city}
          valueChanged={handleChange}
          style={{ width: "40% " }}
        />
      </div>
    </form>
  );
};

export default Form;

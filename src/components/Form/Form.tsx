import React, { useState } from 'react';

import { getValidFormat } from '../../utils/form';
import { CodiceFiscaleForm } from '../../models/codicefiscale.model';
import { Input } from './Input';

import classes from './Form.module.scss';

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
    name: '',
    lastname: '',
    gender: '',
    city: '',
    dayDate: '',
    monthDate: '',
    yearDate: '',
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
    <form className={classes.form}>
      <div className={classes.row}>
        <label>Cognome</label>
        <Input name="lastname" placeholder="Rossi" value={lastname} valueChanged={handleChange} />
      </div>
      <div className={classes.row}>
        <label>Nome</label>
        <Input name="name" value={name} valueChanged={handleChange} placeholder="Mario" />
      </div>
      <div className={classes.row}>
        <label>Sesso</label>
        <Input name="gender" placeholder="M" value={gender} valueChanged={handleChange} />
      </div>
      <div className={classes.row}>
        <label>Data di nascita</label>
        <Input
          name="dayDate"
          placeholder="11"
          value={dayDate}
          valueChanged={handleChange}
          style={{ width: '100px' }}
        />
        <Input
          name="monthDate"
          placeholder="09"
          type="number"
          value={monthDate}
          valueChanged={handleChange}
          style={{ width: '100px' }}
        />

        <Input
          name="yearDate"
          placeholder="2001"
          type="number"
          value={yearDate}
          valueChanged={handleChange}
          style={{ width: '150px' }}
        />
      </div>
      <div className={classes.row}>
        <label>Città</label>
        <Input name="city" placeholder="Roma" value={city} valueChanged={handleChange} />
      </div>
    </form>
  );
};

export default Form;

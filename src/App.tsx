import React, { useState } from "react";
import "./App.css";

import Form, { IDate } from "./components/Form/Form";
import CodiceFiscale from "./components/CodiceFiscale/CodiceFiscale";

import {
  takeFirstConsontants,
  monthToCode,
  generateDayGenderPart,
  getCityCode,
  generateControlCode,
} from "./utils/codicefiscale";
import {
  CodiceFiscaleForm,
  CodiceFiscalePartials,
} from "./models/codicefiscale.model";

const App = () => {
  const [
    codiceFiscalePartials,
    setCfPartials,
  ] = useState<CodiceFiscalePartials>({
    name: "",
    lastname: "",
    monthDate: "",
    yearDate: "",
    dayGender: "",
    city: "",
    controlCode: "",
  });

  const joinPartials = (partials: CodiceFiscalePartials) => {
    const {
      name,
      lastname,
      yearDate,
      monthDate,
      dayGender,
      city,
      controlCode,
    } = partials;
    return (
      lastname + name + yearDate + monthDate + dayGender + city + controlCode
    );
  };

  const updatePartials = (formValues: CodiceFiscaleForm) => {
    const codiceFiscalePartialsUpdated: CodiceFiscalePartials = {
      name: takeFirstConsontants(formValues.name),
      lastname: takeFirstConsontants(formValues.lastname),
      yearDate: formValues.yearDate.toString().slice(-2),
      monthDate: monthToCode(+formValues.monthDate),
      dayGender: generateDayGenderPart(+formValues.dayDate, formValues.gender),
      city: getCityCode(formValues.city),
      controlCode: "",
    };
    const controlCode = generateControlCode(
      joinPartials(codiceFiscalePartialsUpdated)
    );
    if (controlCode) {
      codiceFiscalePartialsUpdated.controlCode = controlCode;
    }

    setCfPartials(codiceFiscalePartialsUpdated);
  };

  const onFormChanges = (formValues: CodiceFiscaleForm) => {
    updatePartials(formValues);
  };

  const codiceFiscaleComplete = joinPartials(codiceFiscalePartials);
  const isCodiceFiscaleReady = codiceFiscaleComplete.length === 16;

  console.log("render");
  return (
    <div className="App">
      <header>
        <h1>Generatore Codice Fiscale</h1>
      </header>
      <Form onFormChanges={onFormChanges} />
      <CodiceFiscale
        codiceFiscale={codiceFiscaleComplete}
        isReady={isCodiceFiscaleReady}
      />
    </div>
  );
};

export default App;

import React, { useState } from "react";

import Form from "./components/Form/Form";
import CodiceFiscale from "./components/CodiceFiscale/CodiceFiscale";
import Footer from "./components/Footer/Footer";

import {
  monthToCode,
  generateDayGenderPart,
  getCityCode,
  generateControlCode,
  generateFirstNamePartial,
  generateLastNamePartial,
} from "./utils/codicefiscale";
import {
  CodiceFiscaleForm,
  CodiceFiscalePartials,
} from "./models/codicefiscale.model";
import Header from "./components/Header/Header";

import "./App.scss";

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
      name: generateFirstNamePartial(formValues.name),
      lastname: generateLastNamePartial(formValues.lastname),
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

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Form onFormChanges={onFormChanges} />
        <CodiceFiscale
          codiceFiscale={codiceFiscaleComplete}
          isReady={isCodiceFiscaleReady}
        />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;

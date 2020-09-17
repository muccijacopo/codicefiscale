import React from "react";

import "./CodiceFiscale.css";

const CodiceFiscale: React.FC<{ codiceFiscale: string }> = (props) => {
  return <p className="CF">{props.codiceFiscale.toUpperCase()}</p>;
};

export default CodiceFiscale;

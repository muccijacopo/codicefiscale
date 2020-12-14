import React from "react";

import "./CodiceFiscale.css";

const cfColors = ["#fff", "#32b843"];

const CodiceFiscale: React.FC<{ codiceFiscale: string; isReady: boolean }> = (
  props
) => {
  const onClick = (e: any) => {
    const target = e.target as HTMLInputElement;
    target.select();
    document.execCommand("copy");
  };
  return (
    <input
      className="codice-fiscale"
      type="text"
      onClick={onClick}
      defaultValue={props.codiceFiscale.toUpperCase()}
      style={props.isReady ? { color: cfColors[1] } : { color: cfColors[0] }}
      readOnly
    />
  );
};

export default CodiceFiscale;

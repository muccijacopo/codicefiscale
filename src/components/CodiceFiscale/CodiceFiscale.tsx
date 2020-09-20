import React from "react";

import "./CodiceFiscale.css";

const CodiceFiscale: React.FC<{ codiceFiscale: string }> = (props) => {
  const onClick = (e: any) => {
    const target = e.target as HTMLInputElement;
    target.select();
    document.execCommand("copy");
  };
  return (
    <input
      className="cf"
      type="text"
      onClick={onClick}
      value={props.codiceFiscale.toUpperCase()}
    />
  );
};

export default CodiceFiscale;

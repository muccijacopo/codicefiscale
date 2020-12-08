export const getValidFormat = (key: string, value: string) => {
  if (value === "") return "";
  if (key === "gender") {
    if (
      value !== "" &&
      value.toLowerCase() !== "m" &&
      value.toLowerCase() !== "f"
    )
      return "M";
  }

  if (key === "dayDate" || key === "monthDate" || key === "yearDate") {
    let formattedValue = parseInt(value);
    if (!formattedValue) return "";
    if (key === "dayDate") {
      if (formattedValue < 0 || formattedValue > 31) return "1";
    }
    if (key === "monthDate") {
      if (formattedValue < 0 || formattedValue > 12) return "1";
    }

    return formattedValue;
  }

  return value.toUpperCase();
};

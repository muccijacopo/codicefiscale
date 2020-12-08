import comuni from "../data/comuni.json";
import caratteriValoriPariMap from "../data/carattere_valore_pari.json";
import caratteriValoriDispariMap from "../data/carattere_valore_dispari.json";
import codiceControlloMap from "../data/codice_di_controllo.json";

export type Month =
  | "gennaio"
  | "febbraio"
  | "marzo"
  | "aprile"
  | "maggio"
  | "giugno"
  | "luglio"
  | "agosto"
  | "settembre"
  | "ottobre"
  | "novembre"
  | "dicembre";

const MONTH_CODE = ["A", "B", "C", "D", "E", "H", "L", "M", "P", "R", "S", "T"];

export const monthToCode = (month: number) => {
  if (month < 1 || month > 12) return "";
  return MONTH_CODE[month - 1];
};

export const generateFirstNamePartial = (name: string) => {
  const consontants = name.match(/[^a,e,i,o,u, ]/gi) || [];
  const vowels = name.match(/[a,e,i,o,u]/gi) || [];
  if (!consontants.length && !vowels.length) return "";

  const consontantsLength = consontants.length;
  const vowelsLength = vowels.length;

  if (consontantsLength > 3) {
    return consontants[0] + consontants[2] + consontants[3];
  }
  if (consontantsLength > 2) {
    return consontants[0] + consontants[1] + consontants[2];
  }

  const remainingSpace = 3 - consontantsLength;
  const extraCharactersLength = remainingSpace - vowelsLength;

  let partialAry = consontants.concat(vowels.slice(0, remainingSpace));
  if (extraCharactersLength > 0) {
    const extraCharacters = Array(extraCharactersLength).fill("X") as string[];
    partialAry = partialAry.concat(extraCharacters);
  }
  return partialAry.join("");
};

export const generateLastNamePartial = (name: string) => {
  const consontants = name.match(/[^a,e,i,o,u, ]/gi) || [];
  const vowels = name.match(/[a,e,i,o,u]/gi) || [];
  if (!consontants.length && !vowels.length) return "";

  const consontantsLength = consontants.length;
  const vowelsLength = vowels.length;

  if (consontantsLength > 2) {
    return consontants.slice(0, 3).join("");
  }

  const remainingSpace = 3 - consontantsLength;
  const extraCharactersLength = remainingSpace - vowelsLength;

  let partialAry = consontants.concat(vowels.slice(0, remainingSpace));
  if (extraCharactersLength > 0) {
    const extraCharacters = Array(extraCharactersLength).fill("X") as string[];
    partialAry = partialAry.concat(extraCharacters);
  }
  return partialAry.join("");
};

export const generateDayGenderPart = (day: number, gender: string) => {
  if (!day || day > 31) return "";
  if (gender?.toLowerCase() === "f") day = day + 40;
  return day < 10 ? `0${day}` : `${day}`;
};

export const getCityCode = (city: string) => {
  const result = comuni.find(
    (c) => c.comune.toLowerCase() == city.toLowerCase()
  );
  if (result) return result.codice;
  return "";
};

export const generateControlCode = (cf: string) => {
  if (cf.length < 15) return "";
  if (cf.length === 16) cf = cf.slice(0, -1);

  const cfAry: string[] = cf.split("");
  const evenCFCharacters = cfAry.filter((_, i) => (i + 1) % 2 === 0);
  const oddCFCharacters = cfAry.filter((_, i) => (i + 1) % 2 !== 0);

  const evenCFCharactersConverted = evenCFCharacters.map((char) => {
    const find = +caratteriValoriPariMap.find(
      (cv) => cv.Carattere.toLowerCase() === char.toLowerCase()
    )?.Valore!;
    return find;
  });
  const oddCFCharactersConverted = oddCFCharacters.map(
    (char) =>
      +caratteriValoriDispariMap.find(
        (cv) => cv.Carattere.toLowerCase() === char.toLowerCase()
      )?.Valore!
  );

  const sum =
    evenCFCharactersConverted.reduce((acc, el) => acc + el) +
    oddCFCharactersConverted.reduce((acc, el) => acc + el);

  return codiceControlloMap.find((c) => +c.Resto == sum % 26)?.Lettera!;
};

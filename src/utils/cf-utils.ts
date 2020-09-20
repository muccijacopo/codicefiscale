import comuni from "../assets/comuni.json";
import caratteriValoriPariMap from "../assets/carattere_valore_pari.json";
import caratteriValoriDispariMap from "../assets/carattere_valore_dispari.json";
import codiceControlloMap from "../assets/codice_di_controllo.json";

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

// const MONTH_CODE = {
//   gennaio: "A",
//   febbraio: "B",
//   marzo: "C",
//   aprile: "D",
//   maggio: "E",
//   giugno: "H",
//   luglio: "L",
//   agosto: "M",
//   settembre: "P",
//   ottobre: "R",
//   novembre: "S",
//   dicembre: "T",
// };

const MONTH_CODE = ["A", "B", "C", "D", "E", "H", "L", "M", "P", "R", "S", "T"];

export const monthToCode = (month: number) => {
  if (month < 1 || month > 12) return "";
  return MONTH_CODE[month - 1];
};

export const takeFirstConsontants = (name: string) => {
  let result = name.match(/[^a,e,i,o,u]/g)?.slice(0, 3);
  if (!result) return "";
  if (result?.length < 3) {
    const aeiou = name.match(/[a,e,i,o,u]/g) as string[];
    if (aeiou) {
      for (let i = 0; i <= 3; i++) {
        result.push(aeiou[i]);
        if (result.length === 3) break;
        // else result.push("x");
      }
    }
  }
  return result.join("");
};

export const generateDayGenderPart = (day?: number | null, gender?: string) => {
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
  console.log(cf);
  if (cf.length < 15) return "";
  if (cf.length === 16) cf = cf.slice(0, -1);
  const cfAry: string[] = cf.split("");
  const evenCFCharacters = cfAry.filter((c, i) => i % 2 === 0);
  const oddCFCharacters = cfAry.filter((c, i) => i % 2 !== 0);

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

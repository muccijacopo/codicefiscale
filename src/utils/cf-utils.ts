import comuni from "../assets/comuni.json";

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
  console.log(day);
  return day < 10 ? `0${day}` : `${day}`;
};

export const getCityCode = (city: string) => {
  const result = comuni.find(
    (c) => c.comune.toLowerCase() == city.toLowerCase()
  );
  console.log(result);
  if (result) return result.codice;
  return "";
};

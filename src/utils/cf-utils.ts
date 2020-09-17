const vowels = ["a", "e", "i", "o", "u"];

export const takeFirstConsontants = (name: string) => {
  return name
    .match(/[^a,e,i,o,u]/g)
    ?.slice(0, 3)
    .join("");
};

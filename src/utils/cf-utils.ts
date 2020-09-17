export const takeFirstConsontants = (name: string) => {
  let result = name.match(/[^a,e,i,o,u]/g)?.slice(0, 3);
  if (!result) return "";
  if (result?.length < 3) {
    const aeiou = name.match(/[a,e,i,o,u]/g) as string[];
    if (aeiou) result.push(...aeiou);
    else result.push("x");
  }

  console.log(result);
  return result.join("");
};

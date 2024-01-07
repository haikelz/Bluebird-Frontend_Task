export const toCamelCase = (str: string) =>
  str
    .split("-")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");

export const idrToNumber = (str: string) =>
  Number(str.split(" ")[1].split(".").join(""));

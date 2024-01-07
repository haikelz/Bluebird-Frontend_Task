export const toCamelCase = (str: string) =>
  str
    .split("-")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");

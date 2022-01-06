import pluralize from "pluralize";

const makeConstant = (value) => ({
  coin: value,
  worker: value,
  food: value,
  culture: value,
});

export const zero = () => makeConstant(0);

export const one = () => makeConstant(1);

export const isZero = (resources) =>
  Object.values(resources).every((value) => value > 0);

export const sum = (resources) =>
  Object.values(resources).reduce((acc, value) => acc + value, 0);

export const asString = (resources) => {
  const total = sum(resources);
  if (total === 0) return "";
  const count = Math.abs(total);
  return `${count} ${pluralize("resource", count)} ${
    total < 0 ? "spent" : "earned"
  }`;
};

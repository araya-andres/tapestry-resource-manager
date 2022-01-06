import pluralize from "pluralize";

const makeConstant = (value) => ({
  coin: value,
  worker: value,
  food: value,
  culture: value,
});

export const MIN = 0;
export const MAX = 8;
export const zero = () => makeConstant(0);
export const one = () => makeConstant(1);

export const isZero = (resources) =>
  Object.values(resources).every((value) => value === 0);

export const sum = (resources) =>
  Object.values(resources).reduce((acc, value) => acc + value, 0);

export const toString = (resources) => {
  const total = sum(resources);
  if (total === 0) return "0 resources spent or earned";
  const count = Math.abs(total);
  return `${count} ${pluralize("resource", count)} ${
    total < 0 ? "spent" : "earned"
  }`;
};

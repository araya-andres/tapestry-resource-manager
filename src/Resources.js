import pluralize from "pluralize";

const makeConstant = (value) => ({
  coin: value,
  worker: value,
  food: value,
  culture: value,
});

export const MIN = 0;
export const MAX = 8;
export const ZERO = makeConstant(0);
export const ONE = makeConstant(1);

export const isZero = (resources) =>
  Object.values(resources).every((value) => value === 0);

export const toString = (resources) => {
  const values = Object.values(resources);
  const spent = values
    .filter((x) => x < 0)
    .reduce((acc, value) => acc - value, 0);
  const earned = values
    .filter((x) => x > 0)
    .reduce((acc, value) => acc + value, 0);
  return (
    `${spent} ${pluralize("resource", spent)} spent, ` +
    `${earned} ${pluralize("resource", earned)} earned.`
  );
};

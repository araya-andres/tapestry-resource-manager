import pluralize from "pluralize";

const makeConstant = (value) => ({
  coin: value,
  worker: value,
  food: value,
  culture: value,
});

const ZERO = makeConstant(0);

export const min = () => 0;
export const max = () => 8;
export const zero = () => ZERO;
export const one = () => makeConstant(1);

export const isZero = (resources) =>
  Object.values(resources).every((value) => value === 0);

export const toString = (diff) => {
  const values = Object.values(diff);
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

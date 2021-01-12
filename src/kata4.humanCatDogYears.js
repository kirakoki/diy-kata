const humanCatDogYears = number => {
  const earlyYears = 9 + 15;
  const catYear = earlyYears + (number - 2) * 4;
  const dogYear = earlyYears + (number - 2) * 5;

  return [number, catYear, dogYear];
};

module.exports = humanCatDogYears;

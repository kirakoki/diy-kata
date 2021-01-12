const numberToReversedDigits = number => {
  const reversedArray = number
    .toString()
    .split("")
    .reverse();
  return reversedArray.map(val => Number(val));
};

module.exports = numberToReversedDigits;

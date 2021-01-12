const joinNames = namesObj => {
  const namesArr = namesObj.map(val => val.name);
  const lastWord = namesArr.pop();
  return `${namesArr.join(", ")} & ${lastWord}`;
};

module.exports = joinNames;

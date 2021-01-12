const { joinNames } = require("../src");

const obj = [
  {
    name: "Bart"
  },
  {
    name: "Lisa"
  },
  {
    name: "Maggie"
  }
];

const obj2 = [
  {
    name: "Ahmet"
  },
  {
    name: "Mehmet"
  },
  {
    name: "Fatma"
  },
  {
    name: "Huseyin"
  },
  {
    name: "Sidika"
  },
  {
    name: "Cengiz"
  }
];

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(obj)).toEqual("Bart, Lisa & Maggie");
    expect(joinNames(obj2)).toEqual(
      "Ahmet, Mehmet, Fatma, Huseyin, Sidika & Cengiz"
    );
  });
});

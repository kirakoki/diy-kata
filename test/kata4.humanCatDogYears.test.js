const { humanCatDogYears } = require("../src");

describe("Calculate human, cat, dog years", () => {
  it("should return an array of human, cat and dog years when passed human years", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
  });
});

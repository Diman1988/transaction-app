const pointsCalculator = require("./pointsCalculator");

describe("pointsCalculator", () => {
  it("should return 0 when usd is 0", () => {
    expect(pointsCalculator(0)).toBe(0);
  });

  it("should return 0 when usd is 50", () => {
    expect(pointsCalculator(50)).toBe(0);
  });

  it("should return 90 when usd is 120", () => {
    expect(pointsCalculator(120)).toBe(90);
  });

  it("should return 0 when usd is 49", () => {
    expect(pointsCalculator(49)).toBe(0);
  });

  it("should return 49 when usd is 99", () => {
    expect(pointsCalculator(99)).toBe(49);
  });

  it("should return 50 when usd is 100", () => {
    expect(pointsCalculator(100)).toBe(50);
  });

  it("should return 52 when usd is 101", () => {
    expect(pointsCalculator(101)).toBe(52);
  });

  it("should return 150 when usd is 150", () => {
    expect(pointsCalculator(150)).toBe(150);
  });

  it("should return 152 when usd is 151", () => {
    expect(pointsCalculator(151)).toBe(152);
  });

  it("should return 0 when usd is -1", () => {
    expect(pointsCalculator(-1)).toBe(0);
  });

  it("should return 0 when usd is 1", () => {
    expect(pointsCalculator(1)).toBe(0);
  });

  it("should handle large numbers correctly", () => {
    expect(pointsCalculator(10000)).toBe(19850);
  });

  it("should handle fractional numbers for 99.99 correctly", () => {
    expect(pointsCalculator(99.99)).toBe(49);
  });

  it("should handle fractional numbers for 50.99 correctly", () => {
    expect(pointsCalculator(50.99)).toBe(0);
  });
});

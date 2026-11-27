const test = require("node:test");
const assert = require("node:assert/strict");
const getMonthName = require("./Quiz");

test("returns January for 1", () => {
  assert.equal(getMonthName(1), "January");
});

test("returns May for 5", () => {
  assert.equal(getMonthName(5), "May");
});

test("returns December for 12", () => {
  assert.equal(getMonthName(12), "December");
});

test("returns all 12 months in order", () => {
  const expected = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  expected.forEach((name, i) => {
    assert.equal(getMonthName(i + 1), name);
  });
});

test("returns 'Invalid Month' for 13", () => {
  assert.equal(getMonthName(13), "Invalid Month");
});

test("returns 'Invalid Month' for 0", () => {
  assert.equal(getMonthName(0), "Invalid Month");
});

test("returns 'Invalid Month' for negative numbers", () => {
  assert.equal(getMonthName(-3), "Invalid Month");
});
const Intern = require("../lib/Intern");

test("sets school with constructor", () => {
  const testValue = "CWRU";
  const e = new Intern("jordan", 1, "jordan@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() returns \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("jordan", 1, "jordan@gmail.com", "CWRU");
  expect(e.getRole()).toBe(testValue);
});

test("uses getSchool() to get school", () => {
  const testValue = "CWRU";
  const e = new Intern("jordan", 1, "jordan@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});

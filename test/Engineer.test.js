const Engineer = require("../lib/Engineer");

test("sets github with constructor", () => {
  const testValue = "githubName";
  const e = new Engineer("Mary", 1, "mary@gmail.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() returns \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Mary", 1, "mary@gmail.com", "githubName");
  expect(e.getRole()).toBe(testValue);
});

test("uses getGithub() to get github username", () => {
  const testValue = "githubName";
  const e = new Engineer("mary", 1, "mary@gmail.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});

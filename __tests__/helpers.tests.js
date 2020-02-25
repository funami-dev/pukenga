import { getTendency } from "../src/utils/helpers";

test("getTendency DOWNS", () => {
  expect(getTendency({ skill: 1, requiredSkill: 2 })).toBe("DOWN");
  expect(getTendency({ skill: 3, requiredSkill: 4 })).toBe("DOWN");
  expect(getTendency({ skill: 0, requiredSkill: 4 })).toBe("DOWN");
});

test("getTendency UPS", () => {
  expect(getTendency({ skill: 3, requiredSkill: 1 })).toBe("UP");
  expect(getTendency({ skill: 4, requiredSkill: 3 })).toBe("UP");
});

test("getTendency EQUAL", () => {
  expect(getTendency({ skill: 3, requiredSkill: 3 })).toBe("EQUAL");
  expect(getTendency({ skill: 4, requiredSkill: 4 })).toBe("EQUAL");
  expect(getTendency({ skill: 0, requiredSkill: 0 })).toBe("EQUAL");
});

test("getTendency CLEAR", () => {
  expect(getTendency({ skill: undefined, requiredSkill: 3 })).toBe("CLEAR");
  expect(getTendency({ skill: 4, requiredSkill: undefined })).toBe("CLEAR");
  expect(getTendency({ skill: 0 })).toBe("CLEAR");
  expect(getTendency({ requiredSkill: 1 })).toBe("CLEAR");
  expect(getTendency([])).toBe("CLEAR");
  expect(getTendency("")).toBe("CLEAR");
  expect(getTendency(true)).toBe("CLEAR");
  expect(getTendency(false)).toBe("CLEAR");
  expect(getTendency(undefined)).toBe("CLEAR");
});

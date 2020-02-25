export const getTendency = data => {
  if (typeof data !== "object") {
    return "CLEAR";
  }

  const { skill, requiredSkill } = data;
  if (typeof skill === "undefined" || typeof requiredSkill === "undefined") {
    return "CLEAR";
  }
  if (skill === requiredSkill) {
    return "EQUAL";
  }
  return skill > requiredSkill ? "UP" : "DOWN";
};

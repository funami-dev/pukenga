import { createSelector } from "reselect";

const DEFAULT_HEAD = [
  { label: "Skill" },
  { label: "Level" },
  { label: "Präferenz" }
];
const EXTENDED_HEAD = [
  { label: "RiskLevel" },
  { label: "Relevanz" },
  { label: "Match" }
];
const FRONTEND_PRESET = [
  { skill: "HTML5", relevanz: 4, riskLevel: 4 },
  { skill: "Javascript", relevanz: 4, riskLevel: 4 },
  { skill: "Vue", relevanz: 4, riskLevel: 4 },
  { skill: "CSS / SCSS / LESS / SASS", relevanz: 4, riskLevel: 4 },
  { skill: "React", relevanz: 3, riskLevel: 4 },
  { skill: "Typescript", relevanz: 3, riskLevel: 4 },
  { skill: "React-Native", relevanz: 3, riskLevel: 4 },
  { skill: "Electron", relevanz: 3, riskLevel: 4 },
  { skill: "now", relevanz: 3, riskLevel: 4 },
  { skill: "Jest", relevanz: 3, riskLevel: 4 },
  { skill: "Storybook", relevanz: 3, riskLevel: 4 },
  { skill: "nodejs", relevanz: 3, riskLevel: 3 },
  { skill: "Canvas", relevanz: 3, riskLevel: 3 },
  { skill: "git", relevanz: 3, riskLevel: 3 },
  { skill: "Svelte", relevanz: 3, riskLevel: 3 },
  { skill: "CypressJS", relevanz: 3, riskLevel: 3 },
  { skill: "REST/CRUD", relevanz: 3, riskLevel: 2 },
  { skill: "Cordova", relevanz: 3, riskLevel: 1 },
  { skill: "Angular", relevanz: 3, riskLevel: 1 },
  { skill: "Docker", relevanz: 2, riskLevel: 4 },
  { skill: "NestJS", relevanz: 2, riskLevel: 4 },
  { skill: "Puppeteer", relevanz: 2, riskLevel: 4 },
  { skill: "SQL", relevanz: 2, riskLevel: 2 },
  { skill: "MongoDB", relevanz: 2, riskLevel: 2 },
  { skill: "DB Backup/Restore", relevanz: 2, riskLevel: 1 },
  { skill: "PHP", relevanz: 2, riskLevel: 1 },
  { skill: "AngularJS", relevanz: 2, riskLevel: 1 },
  { skill: "AWS", relevanz: 1, riskLevel: 3 },
  { skill: "Azure", relevanz: 1, riskLevel: 2 },
  { skill: "Firebase", relevanz: 0, riskLevel: 3 },
  { skill: "XSLT", relevanz: 0, riskLevel: 1 },
  { skill: "Java (Spring)", relevanz: 0, riskLevel: 1 },
  { skill: "Swift", relevanz: 0, riskLevel: 1 },
  { skill: "Objective C", relevanz: 0, riskLevel: 1 }
];

let DEFAULT_STATE = {
  head: DEFAULT_HEAD,
  currentApplicationId: null,
  requiredSkillsPresets: [FRONTEND_PRESET],
  requiredSkills: [...FRONTEND_PRESET],
  applicants: [
    {
      id: "e3ce26a4-739e-dawe-b038-30229fe9c342",
      name: "Malle Fitz",
      links: [],
      head: [...DEFAULT_HEAD, ...EXTENDED_HEAD],
      skillmatrix: [
        { skill: "HTML5", level: 4, intended: 4 },
        { skill: "Javascript", level: 4, intended: 4 },
        { skill: "Vue", level: 4, intended: 4 },
        { skill: "CSS / SCSS / LESS / SASS", level: 4, intended: 4 },
        { skill: "React", level: 3, intended: 4 },
        { skill: "Typescript", level: 3, intended: 4 },
        { skill: "React-Native", level: 3, intended: 4 },
        { skill: "Electron", level: 3, intended: 4 },
        { skill: "now", level: 3, intended: 4 },
        { skill: "Jest", level: 3, intended: 4 },
        { skill: "nodejs", level: 3, intended: 3 },
        { skill: "Canvas", level: 3, intended: 3 },
        { skill: "git", level: 3, intended: 3 },
        { skill: "Svelte", level: 3, intended: 3 },
        { skill: "Angular", level: 3, intended: 3 },
        { skill: "CypressJS", level: 3, intended: 3 },
        { skill: "REST/CRUD", level: 3, intended: 2 },
        { skill: "Cordova", level: 3, intended: 1 },
        { skill: "Docker", level: 2, intended: 4 },
        { skill: "NestJS", level: 2, intended: 4 },
        { skill: "Puppeteer", level: 2, intended: 4 },
        { skill: "SQL", level: 2, intended: 2 },
        { skill: "MongoDB", level: 2, intended: 2 },
        { skill: "DB Backup/Restore", level: 2, intended: 1 },
        { skill: "PHP", level: 2, intended: 1 },
        { skill: "AngularJS", level: 2, intended: 1 },
        { skill: "AWS", level: 1, intended: 3 },
        { skill: "Azure", level: 1, intended: 2 },
        { skill: "Firebase", level: 0, intended: 3 },
        { skill: "XSLT", level: 0, intended: 1 },
        { skill: "Java (Spring)", level: 0, intended: 1 },
        { skill: "Swift", level: 0, intended: 1 },
        { skill: "Objective C", level: 0, intended: 1 }
      ]
    },
    {
      id: "e3ce26a4-739e-4a8d-b038-30229fe9c342",
      name: "Manni Mocker",
      links: [
        { label: "github", href: "github.com/facebook" },
        { label: "codepen", href: "codepen.io" }
      ],
      head: [...DEFAULT_HEAD, ...EXTENDED_HEAD],
      skillmatrix: [
        { skill: "Vue", level: 4, intended: 3 },
        { skill: "React", level: 4, intended: 4 },
        { skill: "design", level: 2, intended: 4 },
        { skill: "Angular", level: 3, intended: 3 },
        { skill: "zdog", level: 3, intended: 3 }
      ]
    },
    {
      id: "e34426a4-739e-499d-b038-30229fe9c366",
      name: "Dora Desing Dummy",
      links: [
        { label: "github", href: "github.com/facebook" },
        { label: "codepen", href: "codepen.io" }
      ],
      head: [...DEFAULT_HEAD, ...EXTENDED_HEAD],
      skillmatrix: [
        { skill: "Vue", level: 1, intended: 2 },
        { skill: "React", level: 1, intended: 2 },
        { skill: "design", level: 4, intended: 4 },
        { skill: "Angular", level: 0, intended: 1 },
        { skill: "zdog", level: 2, intended: 3 }
      ]
    }
  ]
};

const applicants = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "SET_APPLICATION_ID":
      return { ...state, currentApplicationId: action.id };
    case "SET_REQUIRED_SKILl_LEVEL":
      const { payload } = action;
      return {
        ...state,
        requiredSkills: state.requiredSkills.map(el =>
          el.skill === payload.type.value
            ? {
                ...el,
                [payload.type.type]: payload.value
              }
            : el
        )
      };
    default:
      return state;
  }
};

// TODO
export const currentApplication = createSelector(
  applicants,
  ({ applicants, currentApplicationId }) => {
    console.log({ applicants, currentApplicationId });
    return applicants.filter(el => el.id === currentApplicationId);
  }
);

export default applicants;

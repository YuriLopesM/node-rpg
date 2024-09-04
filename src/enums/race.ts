const Race = {
  MIDDLE_AGE: "Middle Age",
  SCI_FI: "Sci-Fi",
} as const;

type RaceType = (typeof Race)[keyof typeof Race];

export { Race, type RaceType };

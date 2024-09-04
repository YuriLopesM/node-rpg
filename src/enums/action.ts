const Action = {
  ATTACK: "Attack",
  DEFEND: "Defend",
  CAST_SPELL: "Cast",
  CAST_ULTIMATE: "Ultimate",
  SKIP: "Skip",
} as const;

type ActionType = (typeof Action)[keyof typeof Action];

export { Action, type ActionType };

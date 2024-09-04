const Role = {
  ROGUE: 'Rogue',
  WARRIOR: 'Warrior',
  MAGE: 'Mage',
  MARKSMAN: 'Marksman'
} as const

type RoleType = typeof Role[keyof typeof Role]

export { Role, type RoleType }


const ROLE = {
  ADMIN: 'admin',
  BASIC: 'basic'
}

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: 'Laercio', role: ROLE.ADMIN },
    { id: 2, name: 'Scully', role: ROLE.BASIC },
    { id: 3, name: 'Mulder', role: ROLE.BASIC }
  ],
  projects: [
    { id: 1, name: "Laercio's Project", userId: 1 },
    { id: 2, name: "Scully's Project", userId: 2 },
    { id: 3, name: "Mulder's Project", userId: 3 }
  ]
}
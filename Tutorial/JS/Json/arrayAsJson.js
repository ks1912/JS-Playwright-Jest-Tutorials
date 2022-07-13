const jsonData = [
  {
    name: "Molecule Man",
    age: 29,
    secretIdentity: "Dan Jukes",
    powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
  },
  {
    name: "Madame Uppercut",
    age: 39,
    secretIdentity: "Jane Wilson",
    powers: ["Million tonne punch", "Damage resistance", "Superhuman reflexes"],
  },
];

for (let i = 0; i < jsonData.length; i++) {
  console.log(Object.keys(jsonData[i]));
  console.log(Object.values(jsonData[i]));
}

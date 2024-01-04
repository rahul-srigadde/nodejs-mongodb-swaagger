const modelschema = {
  Parents: {
    father: "Simon Doe",
    mother: "Marie Doe",
  },
  User: {
    name: "Jhon Doe",
    age: 29,
    parents: {
      $ref: "#/definitions/Parents",
    },
    diplomas: [
      {
        school: "XYZ University",
        year: 2020,
        completed: true,
        internship: {
          hours: 290,
          location: "XYZ Company",
        },
      },
    ],
  },
  AddUser: {
    $name: "Jhon Doe",
    $age: 29,
    about: "",
  },
};

module.exports = modelschema;

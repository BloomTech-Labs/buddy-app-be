exports.seed = function(knex) {
  return knex("users").insert([
    {
      id: 1,
      first_name: "May",
      last_name: "Blue",
      password: "pass",
      email: "test@gmail.com",
      location: "55555"
    },
    {
      id: 2,
      first_name: "Tommy",
      last_name: "Red",
      password: "pass",
      email: "test2@gmail.com",
      location: "66666"
    }
  ]);
};

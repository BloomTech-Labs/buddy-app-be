exports.seed = function(knex) {
  return knex("users").insert([
    {
      id: 1,
      first_name: "May",
      password: "pass",
      email: "test@gmail.com",
      location: "55555"
    },
    {
      id: 2,
      first_name: "Tommy",
      password: "pass",
      email: "test2@gmail.com",
      location: "66666"
    }
  ]);
};

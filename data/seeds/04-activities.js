exports.seed = function(knex) {
  return knex("activities").insert([
    {
      id: 1,
      name: "Playing basketball",
      notes: "Bring white and black shirts",
      date: "10/10/2019",
      time: "8:00 AM",
      guest_limit: null,
      organizer_id: 1,
      interest_id: 1,
      location: "845 Gran Park, Santa Barbara, CA 94721"
    },
    {
      id: 2,
      name: "Paint and wine night",
      notes: "Look for the blue dress with stars",
      date: "10/23/2019",
      time: "7:30 PM",
      guest_limit: null,
      organizer_id: 1,
      interest_id: 2,
      location: "1273 Redstone St, Santa Cruz, CA 16143"
    },
    {
      id: 3,
      name: "Sea of Thieves LAN",
      notes: "Bring your own pcs",
      date: "10/24/2019",
      time: "6:30 PM",
      guest_limit: null,
      organizer_id: 2,
      interest_id: 4,
      location: "2737 Corner St, Sacramento, CA 48476"
    },
    {
      id: 4,
      name: "Break Bad marathon",
      notes: "Bring your own snacks",
      date: "10/31/2019",
      time: "8:15 PM",
      guest_limit: null,
      organizer_id: 1,
      interest_id: 5,
      location: "23 Mulligan Park, Cleveland, OH 87401"
    },
    {
      id: 5,
      name: "Beer fest",
      notes: "Meet near the west entrance",
      date: "11/3/2019",
      time: "5:35 PM",
      guest_limit: null,
      organizer_id: 2,
      interest_id: 3,
      location: "3547 Briar Rd, Chicago, IL 54684"
    }
  ]);
};

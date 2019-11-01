const request = require("supertest");

const db = require("../../data/dbconfig.js");

const server = require("../server.js");
const Interests = require("./interests");

// allows testing to be authorized
let token;
const user = { email: "test@example.com", password: "******" };
beforeAll(done => {
  request(server)
    .post("/auth/signup")
    .send({
      ...user,
      first_name: "Tester",
      last_name: "Test",
      location: "12345"
    })
    .then(result => {
      request(server)
        .post("/auth/signin")
        .send(user)
        .end((err, response) => {
          token = response.body.token; // save the token!
          done();
        });
    });
});

describe("interests", () => {
  beforeEach(async () => {
    await db("interests").truncate();
  });

  describe("GET /interests", () => {
    it("should return status 200", () => {
      return request(server)
        .get("/interests")
        .set("Authorization", `${token}`)
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});

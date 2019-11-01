const request = require("supertest");

const db = require("../../data/dbconfig.js");

const server = require("../server.js");

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
  beforeEach(() => db.seed.run());

  describe("GET /interests", () => {
    it("should return status 200", async () => {
      //   return request(server)
      //     .get("/interests")
      //     .set("Authorization", `${token}`)
      //     .then(res => {
      //       expect(res.status).toBe(200);
      //       expect(res.body).toHaveLength(5);
      //     });

      const res = await request(server)
        .get("/interests")
        .set("Authorization", `${token}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(5);
    });
  });

  describe("GET /interests/:interestid", () => {
    it("should return Sports", () => {
      return request(server)
        .get("/interests/1")
        .set("Authorization", `${token}`)
        .then(res => {
          //   expect(res.body).toStrictEqual({ id: 1, name: "Sports" });
          expect(res.body).toBe("Sports");
        });
    });
  });
});

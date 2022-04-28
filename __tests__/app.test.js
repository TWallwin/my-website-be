const app = require("../app.js");
const seed = require("../db/seeds/seed");
const data = require("../db/data/test-data/viewData");
const db = require("../db/connection.js");
const request = require("supertest");

beforeEach(() => {
  return seed(data);
});
afterAll(() => db.end());
describe("app", () => {
  test("404 - path does not exist", () => {
    return request(app)
      .get("/a")
      .expect(404)
      .then(({ body: { msg } }) => {
        expect(msg).toBe("path does not exist");
      });
  });
  describe("GET - /api/views", () => {
    test("200 - returns a list of view time stamps and ids", () => {
      return request(app)
        .get("/api/views")
        .expect(200)
        .then(({ body: { views } }) => {
          expect(views).toHaveLength(4);
          views.forEach((view) => {
            expect(view).toEqual(
              expect.objectContaining({
                created_at: expect.any(String),
                view_id: expect.any(Number),
              }),
            );
          });
        });
    });
  });
  describe("POST - /api/views", () => {
    test("201 - creates a new view at current time and returns the new view", () => {
      return request(app)
        .post("/api/views")
        .expect(201)
        .then(({ body: { view } }) => {
          expect(Object.keys(view)).toHaveLength(2);
        });
    });
  });
  describe("GET - /api", () => {
    test("200 - returns an object listing the endpoints from this api", () => {
      return request(app)
        .get("/api")
        .expect(200)
        .then(({ body: { endpoints } }) => {
          expect(typeof endpoints).toBe("object");
        });
    });
  });
});

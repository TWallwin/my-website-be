module.exports = {
  GET: {
    "/api": {
      description: "returns a list of endpoints",
      "expected output": "",
    },
    "/views": {
      description: "returns an array of view dates and ids on a key of views",
      "expected output": {
        views: [
          { created_at: "2020-07-09T20:11:00.000Z", view_id: 1 },
          { created_at: "2020-07-09T20:11:00.001Z", view_id: 2 },
          { created_at: "2020-07-09T20:11:00.002Z", view_id: 3 },
        ],
      },
    },
  },
  POST: {
    "/views": {
      description:
        "creates a new view at current time and returns view created",
      "expected input": null,
      "expected output": {
        view: { created_at: "2022-10-09T20:11:00.002Z", view_id: 4 },
      },
    },
  },
};

"use strict";

const db = require("../models/");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tweets",
      [
        {
          user: "user1",
          tweet: "test tweet1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user: "user2",
          tweet: "test tweet2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user: "user3",
          tweet: "test tweet3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};

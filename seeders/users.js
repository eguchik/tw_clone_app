"use strict";

const db = require("../models/");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          user: "Hachi",
          password:
            "$2b$10$dgijCTrjjvcV6E02MP4h9.T1evk3EoRuFyJa0ezuF0Oukd8LXd9xm",
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

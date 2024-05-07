'use strict';

const bcrypt = require ("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert ("Users",[{
    name: "Jose",
    lastname: "Martinez",
    password: bcrypt.hashSync("12345",10),
    role:"user",
    email: "josesito@gmail.com",
    createdAt: new Date(),
    updatedAt: new Date()
   }] )
  },

  async down (queryInterface, Sequelize) {
   
  }
};



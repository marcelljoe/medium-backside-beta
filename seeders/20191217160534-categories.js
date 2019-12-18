'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('categories', [{
        id: 1,
        name: "HOME"
      },
      {
        id: 2,
        name: "ONEZERO"
      },
        {
          id: 3,
          name: "ELEMENTAL"
        }, 
        {
          id: 4,
          name: "GEN"
        },
        {
          id: 5,
          name: "ZORA"
        },
        {
          id: 6,
          name: "FORGE"
        },
        {
          id: 7,
          name: "HUMAN PARTS"
        },
        {
          id: 8,
          name: "MARKER"
        },
        {
          id: 9,
          name: "LEVEL"
        },
        {
          id: 10,
          name: "HEATED"
        },
        {
          id: 11,
          name: "MODELLING"
        },
        {
          id: 12,
          name: "MORE"
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

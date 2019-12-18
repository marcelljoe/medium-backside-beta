'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        fullname: 'Marcell Jonathan',
        username: 'marcelljoe',
        email: 'mrcljnthn@gmail.com',
        password: 'whitenigga',
        is_active:'0'
      },
      { 
        fullname: 'Corrine Purtill',
        username: 'cpurtill',
        email: 'cpurtill@gmail.com',
        password: 'corrinenigga',
        is_active: '0'
      },
      {
        fullname: 'Silvia Bastos',
        username: 'sbastos',
        email: 'sbastos@gmail.com',
        password: 'silvianigga',
        is_active: '0'
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

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('articles', [{
        title: "A Nude 'Playboy' Photo Has Been a Mainstay in Testing Tech for Decades  ",
        author_id: 1,
        content: "",
        category_id: 2,
        img:''
      },
      {
        title: "Stop Obsessing About Focus: Here's What Your Mind Really Needs",
        author_id: 2,
        content: "",
        category_id: 3,
        img: ''
      },
      {
        title: "The Self-Helo Movement That Is Upending American Christianity",
        author_id: 3,
        content: "",
        category_id: 5,
        img: ''
      },
      {
        title: "Three Magical Phrases to Comfort a Dying Person",
        author_id: 1,
        content: "",
        category_id: 4,
        img: ''
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

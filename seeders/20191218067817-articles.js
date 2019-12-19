'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('articles', [{
        title: "How to write event handlers in React",
        author_id: 1,
        content: "Learn how to declare event handlers in this article by Adam Boduch, a seasoned web application developer with a breadth of experience...",
        category_id: 2,
        img:'https://cdn-images-1.medium.com/fit/c/152/156/1*ivjksIhvAs7TUXbQCxAU0A.jpeg'
      },
      {
        title: "I Know What's Wrong With Trump",
        author_id: 2,
        content: "Let me introduce myself.",
        category_id: 6,
        img: 'https://cdn-images-1.medium.com/fit/c/152/156/1*ivjksIhvAs7TUXbQCxAU0A.jpeg'
      },
      {
        title: "Netflix isn't killing cinemas, Hollywood is...",
        author_id: 3,
        content: "Learn how to declare event handlers in this article by Adam Boduch, a seasoned web application developer with a breadth of experience...",
        category_id: 5,
        img: 'https://cdn-images-1.medium.com/fit/c/152/156/1*ivjksIhvAs7TUXbQCxAU0A.jpeg'
      },
      {
        title: "Four Magical Phrases to Comfort a Healthy Person",
        author_id: 1,
        content: "Idont know about this. It's just a dummy contents.",
        category_id: 2,
        img: 'https://cdn-images-1.medium.com/fit/c/152/156/1*ivjksIhvAs7TUXbQCxAU0A.jpeg'
      },
      {
        title: "Five Magical Phrases to Stress a Dying Person",
        author_id: 1,
        content: "Idont know about this. It's just a dummy contents.",
        category_id: 2,
        img: 'https://cdn-images-1.medium.com/fit/c/152/156/1*ivjksIhvAs7TUXbQCxAU0A.jpeg'
      },
      {
        title: "Six Magical Phrases to Stress a Healthy Person",
        author_id: 1,
        content: "Idont know about this. It's just a dummy contents.",
        category_id: 2,
        img: 'https://cdn-images-1.medium.com/fit/c/152/156/1*ivjksIhvAs7TUXbQCxAU0A.jpeg'
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

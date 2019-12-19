'use strict';
module.exports = (sequelize, DataTypes) => {
  const articles = sequelize.define('articles', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    img: DataTypes.STRING,
    author_id: DataTypes.INTEGER
  }, {});
  articles.associate = function(models) {
    // associations can be defined here

    articles.belongsTo(models.categories, {
      foreignKey: "category_id"
    })
    articles.belongsTo(models.users, {
      foreignKey: "author_id"
    })
    
  };
  return articles;
};
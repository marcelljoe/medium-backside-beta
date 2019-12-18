'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    user_id: DataTypes.INTEGER,
    article_id: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
  };
  return comment;
};
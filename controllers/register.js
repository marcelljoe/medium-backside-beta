const jwt = require("jsonwebtoken");

const models = require("../models");
const users = models.users;


exports.register = (req, res) => {
  //check if email and pass match in db tbl user
  users.create(req.body).then(users => {
      const token = jwt.sign({ id: users.id }, "theToken");
      const email = users.email;
      res.send({
        users,
        email,
        token
      });
  });
};

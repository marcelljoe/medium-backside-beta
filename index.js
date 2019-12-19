require('express-group-routes');

//instantiate express module
const express = require('express');

//use express in app variable
const app = express();

//init bodyparser
const bodyParser = require('body-parser');
//define the server port
const port = 4000;

const CategoryController = require('./controllers/categories');
const ArticleController = require('./controllers/articles');

app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Method", "*");
  next();
})

//create the homepage route
app.get('/', (req, res) => {
    res.send("Hello Express!")
})

app.group("/api/v1", router => {
  router.get("/ctgs", CategoryController.index);
  router.get("/ctg/:id", CategoryController.show);
  router.post("/ctg", CategoryController.store);
  router.patch("/ctg/:id", CategoryController.update);
  router.delete("/ctg/:id", CategoryController.delete);

  router.get("/arts", ArticleController.index);
  router.get("/artsl", ArticleController.latest);
  router.get("/art/:id", ArticleController.show);
  router.post("/art", ArticleController.store);
  router.patch("/art/:id", ArticleController.update);
  router.delete("/art/:id", ArticleController.delete);

});



//when the nodejs app exed, make it lesten the port
app.listen(port, () => console.log(`Listening on port ${port}!`))
const models = require('../models')
const articles = models.articles

exports.index = (req, res) => {
    articles.findAll({
    }).then(articles => res.send(articles))
}

exports.show = (req, res) => {
    articles.findOne({ id: req.params.id }).then(articles => res.send(articles))
}

exports.store = (req, res) => {
    articles.create(req.body).then(articles => {
        res.send({
            message: "success",
            articles
        })
    })
}

exports.update = (req, res) => {
    Todo.update(
        req.body,
        { where: { id: req.params.id } }
    ).then(todo => {
        res.send({
            message: "success",
            todo
        })
    })
}

exports.delete = (req, res) => {
    Todo.destroy({ where: { id: req.params.id } }).then(todo => {
        res.send({
            message: "success",
            todo
        })
    })
}
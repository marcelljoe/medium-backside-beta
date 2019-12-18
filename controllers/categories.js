const models = require('../models')
const categories = models.categories

exports.index = (req, res) => {
    categories.findAll({
    }).then(categories => res.send(categories))
}

exports.show = (req, res) => {
    categories.findOne({ id: req.params.id }).then(categories => res.send(categories))
}

exports.store = (req, res) => {
    Todo.create(req.body).then(todo => {
        res.send({
            message: "success",
            todo
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
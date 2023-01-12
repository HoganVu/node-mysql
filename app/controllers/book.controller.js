var Book = require('../models/book.model');
exports.get_list = function (req,res) {
    Book.get_all(function(data){
        res.send({result : data});
    })
}

exports.detail = function (req,res) {
    var data = Book.getById(req.params.id)
    res.send({result : data})
}
const Book = function(book) {
    this.id = book.id,
    this.name = book.name
}

Book.get_all = function (result) {
    var data = [
        {"id": 1, "name":"Book name 1"},
        {"id": 2, "name":"Book name 2"},
        {"id": 3, "name":"Book name 3"},
        {"id": 4, "name":"Book name 4"},
        {"id": 5, "name":"Book name 5"},
    ];

    result(data)
}

Book.getById = function (id) {
    var data = {"id": id,"name": "Gods of War"}

    return data;
}

module.exports = Book;
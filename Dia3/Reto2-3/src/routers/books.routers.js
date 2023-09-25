const {Router} = require("express");
const routers = Router();
const booksCtrl = require("../controller/books.controller");

routers.get('/libroid', booksCtrl.getbookid);
routers.get('/libros', booksCtrl.getbooks);
routers.post('/libros', booksCtrl.postbooks)
routers.put('/libros', booksCtrl.putbooks)
routers.delete('/libros', booksCtrl.deletebooks)

module.exports = routers
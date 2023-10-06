const express = require("express");
const app = express();
const Book = require('../models/book');

let books = [
    new Book("Juedo de tronos","Fantasia", "George R.R Martin", 15.99, "https://imagessl4.casadellibro.com/a/l/t5/64/9788496208964.jpg", 1, 0 ),
    new Book("Memorias de Idhun","Fantasia", "Laura Gallego", 24.99, "https://www.lauragallego.com/wp-content/uploads/2004/09/idhun_portada.jpg", 2, 0 ),
    new Book("La cámara secreta","Fantasia", "JK Rowling", 17.99, "https://imagedelivery.net/QDkyDSqaJI1JEO0MqH_3SQ/60a007e7-31e9-439c-be44-10704c15c800/default", 3, 0 ),
    new Book("El hobbit","Fantasia", "Tolkien", 17.99, "https://proassetspdlcom.cdnstatics2.com/usuaris/libros/fotos/357/original/portada_el-hobbit_j-r-r-tolkien_202207271130.jpg", 4, 0 ),
];

const getbookid = (req, res) =>{
    let getbook = books.find(book => book.id_book == req.query.id_book)
    console.log(getbook)

    if(getbook){ res.send({error: false, codigo: 200, mensaje: 'Libro encontrado', data: getbook})
} else {res.send({error: true, codigo: 404, mensaje: "Libro no encontrado"})}

}

const getbooks = (req,res) => {
    let answer;
    if(books){
        answer = {error: false, codigo: 200, mensaje: 'Libros encontrados', data: books}
    }else {
        answer = {error: true, codigo: 404, mensaje: 'Los libros no existen'}
    } 
    res.send(answer);
}

const postbooks = (req,res) => {
    let post;
    if(req.body){
        const {title, type, author, price, photo, id_book, id_user } = req.body;
        const newbook = new Book(title, type, author, price, photo,id_book, id_user);
        books.push(newbook);
        post= {error:false, codigo:200, mensaje:"Libro añadido correctamente", data: books}
        console.log(newbook);
    }else{
        post = {error:true, codigo:404, mensaje:"No se pudo añadir el libro"}
    }
    res.send(post);
}

const putbooks = (req, res) =>{
    let put = '';
    let bookmod;

    if(req.body.id_book){
        bookmod = books.find(value => value.id === req.body.id);
        console.log(bookmod);
        if(!-1){
            bookmod.title = req.body.title
            bookmod.type = req.body.type
            bookmod.author = req.body.author
            bookmod.price = req.body.price
            bookmod.photo = req.body.photo
            bookmod.id_book = req.body.id_book
            bookmod.id_user = req.body.id_user
            put = {error:false, codigo: 200, mensaje: "El libro se ha modificado corrextamente", data:bookmod}
        }else{
            put = {error:true, codigo: 404, mensaje: "No se pudo modificar libro"}
        }
    }
}

const deletebooks = (req, res) =>{
    books= books.filter(book => book.id_book != req.body.id_book)
    console.log("Entro al delete")
    res.send({error:false, codigo: 200, mensaje: "libro borrado"})
}

module.exports ={getbookid, getbooks, postbooks, putbooks, deletebooks}
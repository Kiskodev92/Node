const express = require("express");
const app = express();
const Book = require('../models/book');

let books = [
            new Book ("300 recetas sencillas", "cocina", "Arguillano", 20, "aqui hay foto", 1, 0),
            new Book ("200 recetas medias", "cocina", "Arguillano", 11, "aqui hay 2foto", 2, 0),
            new Book ("100 recetas complicadas", "cocina", "Arguillano", 45, "aqui hay 3foto", 3, 0)
];

const getbookid = (req, res) =>{
    let getbook = books.find(book => book.id_book == req.query.id_book)
    console.log(getbook)

    if(getbook){ res.send("Libro encontrado")
} else {res.send({error: true, codigo: 404, mensaje: "Libro no encontrado"})}
}

const getbooks = (req,res) => {
    let answer;
    if(books){
        answer = req.query
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
    }else{
        post = {error:true, codigo:404, mensaje:"No se pudo añadir el libro"}
    }
    res.send(post);
}

const putbooks = (req, res) =>{
    let put = '';
    let bookmod;

    if(req.body.id_book){
        bookmod = books.find(value => value.id == req.body.id);
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
    let delbook = false;

    books.deletebooks.forEach((book,i) => {
        if(req.body.id_book == book.id_book){
            books.splice(i,1);
            delbook = true;
        }
    });
    if (delbook){
        res.send("Se ha eliminado el libro seleccionado correctamente");
    } else { 
        res.send({error: true, codigo: 404, mensaje: "Libro no encontrado"})
    }
}

module.exports ={getbookid, getbooks, postbooks, putbooks, deletebooks}
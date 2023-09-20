const express = require("express");
const app = express();
const Book = require('../models/book');

let books = null;

const getbookid = (req, res) =>{
    let getbook;
    books.getbookid.forEach((book,i)=>{
        if(req.body.id_book == book.id_book){
            books.slice(i,1);
            getbook = true;
        }
    })

    if(getbook){ res.send("Libro encontrado")
} else {res.status(404).send({error: true, codigo: 404, mensaje: "Libro no encontrado"})}
}

const getbooks = (req,res) => {
    let answer;
    if(books){
        answer = books
    }else {
        answer = {error: true, codigo: 404, mensaje: 'Los libros no existen'}
    } 
    res.send(answer);
}

const postbooks = (req,res) => {
    let respuesta;
    console.log(req.book);
    if(books === null){
        books = new Book (req.body.title, req.body.type, req.body.author, req.body.price, req.body.photo, req.body.id_book, req.body.id_user);
        respuesta = {error:false, codigo:404,
                        mensaje:'Libro creado', resultado: book};}
    else
        respuesta = {error:false, codigo:404,
                    mensaje:'El libro ya existe', resultado: null};
    
    res.send(respuesta);
}

const putbooks = (req, res) =>{
    let putbook = false;

    books.putbooks.forEach((book,i) =>{
        if(req.body.id_book == book.id_book){
            books.slice(i,1);
            putbook = true;
        }
    });
    if(putbook){ res.send("Se ha modificado correctamente");
    } else {res.status(404).send({error: true, codigo: 404, mensaje: "Libro no encontrado"})
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
        res.status(404).send({error: true, codigo: 404, mensaje: "Libro no encontrado"})
    }
}

module.exports ={getbookid, getbooks, postbooks, putbooks, deletebooks}
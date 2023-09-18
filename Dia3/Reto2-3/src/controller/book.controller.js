const express = require("express");
const app = express();
const Book = require('../models/book');

// let book = new Book ("300 recetas sencillas", "cocina", "Arguillano", 20, "aqui hay foto", 1, 0);
let book = null;

function getStart(request, response){
    let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};

    response.send(respuesta);
}

function getBook(request, response){
    let respuesta;
    if(book != null)
        respuesta = {error: false, codigo: 200, mensaje: 'El libro existe', data:book};
    else
        respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe'};
    
    response.send(respuesta);
}

function postBook(request, response){
    let respuesta;
    console.log(request.book);
    if(book === null){
        book = new Book (request.body.title, request.body.type, request.body.author, request.body.price, request.body.photo, request.body.id_book, request.body.id_user);
        respuesta = {error:false, codigo:200,
                        mensaje:'Libro creado', resultado: book};}
    else
        respuesta = {error:false, codigo:200,
                    mensaje:'El libro ya existe', resultado: null};
    
    response.send(respuesta);
}

function putBook(request, response){
    let respuesta;
    if(book != null){
        book.title = request.body.title;
        book.id_book = request.body.id_book;
        respuesta = {error: false, codigo:200,
                        mensaje:'Libro actualizado', resultado:book};
    }else
        respuesta = {error: true, codigo:200,
                        mensaje:'El libro no existe', resultado:book};
                        
    response.send(respuesta);
}

function deleteBook(res,request){
    let respuesta;
    if(book != null){
        book = null;
        respuesta = {error: false, codigo:200,
                    mensaje:'Libro borrado', resultado:book}
    } else
    respuesta = {error: true, codigo:200,
                    mensaje:'El libro no existe', resultado:book};

    res.send(respuesta);
}

module.exports = {getStart, getBook, postBook, putBook, deleteBook};
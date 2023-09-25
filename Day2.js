const { rejects } = require('assert');
const fs= require('fs/promises');
const readline = require('readline');

let persona={name:"Manolo",surname:"Legian", age:62};
let persorl={name:"",surname:"", age:0};
let persoasync={name:"",surname:"", age:0};

//Reto2 catch/then
fs.writeFile('jsoncatch.json', JSON.stringify(persona))
.then(()=>{
    return fs.readFile('jsoncatch.json','utf8')
})
.then( data => {
    console.log(JSON.parse(data))
})
.catch(err => {
    console.log(err);
})
//Reto2 async/await
async function asyncAwait(){
    try{
        await fs.writeFile('jsonasync.json',JSON.stringify(persona))
            let newpersona = await fs.readFile('jsonasync.json','utf8')
            console.log(JSON.parse(newpersona));
        }catch(error){
            console.log(error);
        }
    }
asyncAwait();
//Reto3 catch/then
function question(pregunta){
    return new Promise ((resolve, reject)=> {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        rl.question(pregunta, respuesta =>{
            resolve(respuesta)
            rl.close();
        });
    })}

    question('¿Como te llamas?')
.then(name =>{
    persorl.name = name;
    return question('¿Y tu apellido?')
})
.then(surname => {
    persorl.surname = surname;
    return question('¿Y tu edad?')
})
.then(age => {
    persorl.age = age;
})
.then(()=>{
    return fs.writeFile('rlcatch.json', JSON.stringify(persorl))
    
})
.then(()=>{
    return fs.readFile('rlcatch.json','utf8')
    })
    .then( data => {
    console.log(JSON.parse(data))
    })
    .then(()=>{preguntaAsync()})
    .catch(err => {
    console.log(err);
    });
//Reto3 async/await

async function preguntaAsync(){
    try{
        let name= await question('¿Nombre?');
        persoasync.name = name;
        let surname= await question('¿Apellido?');
        persoasync.surname = surname;
        let age= await question('¿Edad?');
        persoasync.age = age;
        await fs.writeFile('rlasync.json',JSON.stringify(persoasync))
            let asyncperson = await fs.readFile('rlasync.json','utf8')
            console.log(JSON.parse(asyncperson));
        }catch(error){
            console.log(error);
        }
    }

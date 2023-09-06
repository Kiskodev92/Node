//Reto 1
console.log("Mensaje 1");
setTimeout(function(){console.log("Mensaje 2")},3000);
console.log("Mensaje 3");

//Reto 2
const fs = require('fs');

const content = {name:"Mario", surname:"Bro",age:32};
const jcontent = JSON.stringify(content);

fs.writeFile('reto2.json', jcontent, err => {
  if (err) {
    console.error(err);
  }else {fs.readFile('reto2.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });}
});

// //Reto 3

const readline = require('node:readline');
const { stdin, stdout } = require('process');
let content2 = {name:'', surname:'', age:0};
const rl = readline.createInterface(stdin,stdout);


rl.question('¿Cuál es tu nombre? ', (name) => {
  content2.name=name;
  console.log(`Hola ${name}`);
    rl.question('¿y tu apellido?', (answer1) =>{
      content2.surname=answer1;
      console.log(`genial, es ${answer1}`);
      rl.question('¿y cual es tu edad?', (answer2) =>{
        content2.age=answer2
        console.log(`Tu edad es ${answer2}`);
        rl.close();
        const jcontent2 = JSON.stringify(content2);
                fs.writeFile('reto3.json', jcontent2, err => {
            if (err) {
            console.error(err);
          }else {fs.readFile('reto3.json', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log(data);
          });}
        });
      })
    })
});
// fs.writeFile('reto3.json', jcontent2, err => {
//   if (err) {
//     console.error(err);
//   }else {fs.readFile('reto3.json', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(data);
//   });}
// });


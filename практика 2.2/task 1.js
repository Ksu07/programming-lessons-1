const fs = require('fs');
const axios = require('axios');
axios.get("https://jsonplaceholder.typicode.com/todos").then(
        response => {
            const a = response.data;
            console.log(response);
            let json = JSON.stringify(a);
            console.log(typeof json);
            console.log(json);
            fs.writeFile('ksu.json', json, function (err) {
                if (err) return console.log(err);
                console.log('json file has created');
            });
        }
    )
    .catch(function (error) {
        console.log(error);
    }) 
    const http = require("http");
    const requestHandler = (request, response) => {
        response.setHeader("Content-Type", "text/html");
        response.write("<!DOCTYPE html>");
        response.write("<html>");
        response.write("<head>");
        response.write("<title>Hello Node.js</title>");
        response.write("<meta charset=\"utf-8\" />");
        response.write("</head>");
        response.write("<body><h2>Пиhвет</h2></body>");
        response.write("</html>");
        response.end();
    };
    http.createServer(requestHandler).listen(3000);

    const fs = require  ('fs')

    const url = '/todos/qwe';

    const number = url.split('/').reverse()[0];
    console.log(isNaN(number))

    fs.readFile('todos.json', (err, json) => {
        if(err) return console.error(err);

        const todos = JSON.parse (json);
        console.log(JSON.stringify(todos[number]))
    })
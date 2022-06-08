const fs = require('fs');
const axios = require('axios');
const Path = require('path');
const express = require('express');
const app = express()
const port = 3000
const http = require("http");


class Person {
constructor(login,password) { 
    this.login = login;
    this.password = password;
}
sayHi() {
console.log(this.login);
console.log(this.password);
}
}
function User(login,password){
    this.login = login;
    this.password = password;
    this.displayInfo = function(){
        console.log('Login: ${this.login} Password: ${this.password}');
    }
}

User.prototype.sayHi = function(){
    console.log('My data: ${this.name} ${this.password}');
};

module.exports = User;


axios.get("https://jsonplaceholder.typicode.com/todos").then(
        response => {
            const a = response.data;
            console.log(response);
            let json = JSON.stringify(a);
            console.log(typeof json);
            console.log(json);
            fs.writeFile('todos1.json', json, function (err) {
                if (err) return console.log(err);
                console.log('json file has created');

            });

        }
    )
    
const fs = require("fs");
const http = require("http");
const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if (request.url === "/home" || request.url === "/") {
        response.write("<h2>Your welcome!</h2>");
    } else if (request.url == "/about") {
        response.write("<h2>Me name is Ksu</h2>");
    } else if (request.url == "/contact") {
        response.write("<h2>Telephon numder: 89456387697</h2>");
    } else {
        response.write("<h2>Not found</h2>");
    }
    response.end();
    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log("Все заголовки");
    console.log(request.headers);
    let user = JSON.stringify(request.headers);

    fs.appendFileSync("Ksu07.txt", request.url);
    fs.appendFileSync("Ksu07.txt", request.method);
    fs.appendFileSync("Ksu07.txt", user);
    console.log("Запись файла завершена. Содержимое файла:");

};
http.createServer(requestHandler).listen(3000);
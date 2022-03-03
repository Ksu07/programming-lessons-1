const http = require("http");
const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if(request.url === "/home" || request.url === "/"){
    response.write("<h2>Your welcome!</h2>");
    }
    else if(request.url == "/about"){
    response.write("<h2>hi im Ksusha</h2>");
    }
    else if(request.url == "/contact"){
    response.write("<h2>Telephon number: 89765434567</h2>");
    }
    else{
    response.write("<h2>Not found</h2>");
    }
    response.end();
    };
    http.createServer(requestHandler).listen(3000);
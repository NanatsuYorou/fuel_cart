// подключение express
const express = require("express");
// создаем объект приложения
const app = express();

// установили заголовки для CORS
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

// определяем обработчик для GET запроса
app.get("/", function(request, response){
     
    // данные которые мы "получили" с БД
     agreement = {
        status : 'active',
        available : 15000,
        last_purchase : '22/02/2021',
        current_cost : 1400,
        fuel_carts : 100
    }

    //отправили
    response.send(agreement);
    
});

// определяем обработчик для POST запроса
app.post("/",  function(request, response){

    // тут должно быть обращение к БД для проверки корректности логина и пароля
        response.send(request.body.name);
});
console.log('Запустили сервер');
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);
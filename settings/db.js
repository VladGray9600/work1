const mysql = require('mysql')
const connection = mysql.createConnection({
    host: "127.0.0.1", 
    user: "vladgray",
    database: "graydb",
    password: "vlados9600"
})

connection.connect((err) =>{
    if(err){
        return console.log("Ошибка подключения")
    } else {
        return console.log("Подключение установлено")
    }
})

module.exports = connection
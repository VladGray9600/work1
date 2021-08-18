'use strict'

const response = require('./../response')
const db = require('./../settings/db')



//===========================================================
//=========== 1)Получить всех юзеров ========================
//===========================================================
exports.users = (req, res) => {
    db.query('SELECT * FROM `users`',(err, rows, fields) => {
        if(err){
            console.log(err);
        } else {
            response.status(rows, res)
        }
    })
}

//===========================================================
//=========== 1.5)Получить юзера по ID ========================
//===========================================================


exports.userById = (req, res) => {
    const sql = "SELECT * FROM `users` WHERE `id`='"+req.params.id+"'"
    db.query(sql,(err, results) =>{
        if(err){
            console.log(err);
        } else {
            response.status(results, res)
        }
    })
}


//===========================================================
//==========  2)Добавить юзера    ==========================
//===========================================================

exports.add = (req, res) => {
    const sql = "INSERT INTO `users`(`id`, `name`, `description`, `followers`) VALUES('"+req.query.id +"','"+req.query.name+"','"+req.query.description +"','"+req.query.followers+"')";
    db.query(sql,(err, results) => {
        if(err){
            console.log(err);
        } else {
            response.status(results, res)
        }
    })
}


//===========================================================
//==               3)Обновить юзера
//===========================================================


exports.update = (req, res) => {
    const sql = "UPDATE `users` SET `id`='"+req.query.id +"',`name`='"+req.query.name+"',`description`='"+req.query.description+"',`followers`='"+req.query.followers+"'WHERE `id`='"+req.query.id+"'"
    db.query(sql,(err, results) => {
        if(err){
            console.log(err);
        } else {
            response.status(results, res)
        }
    })
} 



//===========================================================
//===              4)Удалить юзера по ID
//===========================================================


exports.delete = (req, res) => {
    const sql = "DELETE FROM `users` WHERE `id`='"+req.params.id+"'"
    db.query(sql,(err, results) =>{
        if(err){
            console.log(err);
        } else {
            response.status(results, res)
        }
    })
}


//===========================================================
//==           5)Изменить кол-во подписчиков юзера 
//===========================================================

exports.update = (req, res) => {
    const sql = "UPDATE `users` SET `followers`='"+req.query.followers+"'WHERE `id`='"+req.query.id+"'"
    db.query(sql,(err, results) => {
        if(err){
            console.log(err);
        } else {
            response.status(results, res)
        }
    })
}


//===========================================================
//==  6)Получить всех юзеров, у которых число подписчиков=..
//===========================================================

exports.userfol = (req, res) => {
    const sql = "SELECT * FROM `users` WHERE `followers` <= 10 "
    db.query(sql,(err,results) => {
        if(err){
            console.log(err);
        } else {
            response.status(results, res)
        }
    })
}

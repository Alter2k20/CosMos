import mysql from 'mysql2'

export const conn = mysql.createConnection({
    'host' : 'localhost',
    'user' : 'root',
    'password':'toor',
    'database' : 'blogapp'
})

if(conn){
    console.log("connection successfull")
}
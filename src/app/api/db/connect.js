import mysql from 'mysql2'

export const conn = mysql.createConnection({
    'host' : `${process.env.DB_HOST}`,
    'user' : `${process.env.DB_USER}`,
    'password':`${process.env.DB_USER_PASSWORD}`,
    'database' : `${process.env.DB_NAME}`
})


if(conn){
    console.log("connection successfull")
}
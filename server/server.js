import express from 'express';
import dotenv from 'dotenv';
import cookiePareser from 'cookie-parser';
import connection from './db/dbconnection.js';

dotenv.config();

const port=process.env.PORT|5000;
connection();
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cookiePareser());

app.get('/', (req,res)=> res.send('server is ready'));


app.listen(port, ()=> console.log(`server started on port ${port}`)); 
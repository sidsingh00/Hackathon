import express from 'express';
import dotenv from 'dotenv';
import cookiePareser from 'cookie-parser';
import connection from './db/dbconnection.js';
// import userRoutes from './Routes/userRoutes.js';
import { notFound ,errorHandler } from './Middleware/erroeMiddleware.js';

dotenv.config();

const port=process.env.PORT|5000;
connection();
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cookiePareser());


// app.use('/api/users',userRoutes);

app.use(notFound);
app.use(errorHandler);

app.get('/', (req,res)=> res.send('server is ready'));


app.listen(port, ()=> console.log(`server started on port ${port}`)); 
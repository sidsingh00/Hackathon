import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userouter.js';
import conndb from './config/db.js';
import cookiePareser from 'cookie-parser';

dotenv.config();

const port=process.env.PORT|5000;
conndb();
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cookiePareser());

app.use('/api/users',userRoutes);
app.get('/', (req,res)=> res.send('server is ready'));


app.listen(port, ()=> console.log(`server started on port ${port}`)); 
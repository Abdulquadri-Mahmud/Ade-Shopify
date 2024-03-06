import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

app.use(express.json());
// console.log(process.env.database);
mongoose.connect(process.env.db).then(() => {
    console.log('database connected!');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch((error)=> {
    console.log(error,'Error while connecting to database!');
});

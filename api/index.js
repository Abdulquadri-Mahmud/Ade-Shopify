import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import userAuthentication from './routes/user.routes.js';

dotenv.config();

const app = express();

app.use(express.json());
// console.log(process.env.database);
mongoose.connect(process.env.db).then(() => {
    console.log('database connected!');
    app.listen(3001, () => {
        console.log('Server is running on port 3001');
    });
}).catch((error)=> {
    console.log(error,'Error while connecting to database!');
});

app.use('/api/auth', userAuthentication);

app.use((err, req, res, next) => {
    const stsatusCode = err.stsatusCode || 500;
    const message = err.message || 'Internal Server Error!';

    return res.status(stsatusCode).json({
        success: false,
        stsatusCode,
        message,
    });
});
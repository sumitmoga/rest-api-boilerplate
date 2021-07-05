import express from 'express';
import { APP_PORT } from './config';

const app = express();



app.listen(APP_PORT, () => console.log(`Server is running on Port ${APP_PORT}`))
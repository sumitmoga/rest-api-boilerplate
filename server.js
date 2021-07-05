import express from 'express';
import { APP_PORT } from './config';

const app = express();

// Add Routes
import routes from './routes';
// Register all router
app.use('/api/v1', routes)


app.listen(APP_PORT, () => console.log(`Server is running on Port ${APP_PORT}`))
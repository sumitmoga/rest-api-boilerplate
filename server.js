import express, { json } from 'express';
import { APP_PORT } from './config';
import errorHandler from './middlewares/errorHandlers';
const app = express();

app.use(express.json())
// Add Routes
import routes from './routes';
// Register all router
app.use('/api/v1', routes)


app.use(errorHandler)
app.listen(APP_PORT, () => console.log(`Server is running on Port ${APP_PORT}`))
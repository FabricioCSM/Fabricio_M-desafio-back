import express from 'express';
import userRoutes from './routes/userRoute';

const app = express();


app.use(express.json());


app.use(userRoutes);



export default app;

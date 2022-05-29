import express from 'express';
import userRoutes from './routes/userRoute';
import loginRoutes from './routes/loginRoute';

const app = express();


app.use(express.json());


app.use(userRoutes);
app.use(loginRoutes);



export default app;

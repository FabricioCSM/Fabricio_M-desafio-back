import express from 'express';
import userRoutes from './routes/userRoute';
import loginRoutes from './routes/loginRoute';
import productRoutes from './routes/productRoute';

const app = express();


app.use(express.json());


app.use(userRoutes);
app.use(loginRoutes);
app.use(productRoutes);



export default app;

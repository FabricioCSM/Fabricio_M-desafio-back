import express from 'express';
import userRoutes from './routes/userRoute';
import loginRoutes from './routes/loginRoute';
import productRoutes from './routes/productRoute';
import purchaseRoutes from './routes/purchaseRoute';

const app = express();


app.use(express.json());


app.use(userRoutes);
app.use(loginRoutes);
app.use(productRoutes);
app.use(purchaseRoutes);



export default app;

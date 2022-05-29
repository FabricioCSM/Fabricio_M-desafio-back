import express from 'express';
import userRoutes from './routes/userRoute';
import loginRoutes from './routes/loginRoute';
import productRoutes from './routes/productRoute';
import purchaseRoutes from './routes/purchaseRoute';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';

const app = express();


app.use(express.json());

app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

app.use(userRoutes);
app.use(loginRoutes);
app.use(productRoutes);
app.use(purchaseRoutes);



export default app;

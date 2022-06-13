import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { Mongoose } from './config/db.config';
import api from './api';
import middlewares from './middlewares';

dotenv.config({ path: '../.env' });

const app = express();
Mongoose.connectDB();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '15MB' }));

const swaggerUi = require("swagger-ui-express"),
swaggerDocument = require("../swagger.json");

app.get('/api', (req, res) => {
  res.json({ message: 'Loanspot API - 👋🌎🌍🌏' });
});

app.use('/api', api);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;

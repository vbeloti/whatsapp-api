import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

import './config/database';
import routes from './routes';

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());

app.use(cors());

app.use('/api/v1', routes);


app.listen(port, () => {
    console.log('🔥 Server started');
});


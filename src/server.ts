import express from 'express';
import * as dotenv from 'dotenv';
import Messages from './schemas/Whatsapp';
dotenv.config();

import './config/database';

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());

interface IData {
    message: string;
    name: string;
    timestamp: string;
}

app.get('/api/v1/messages/show', (req, res) => {
    Messages.find((err: Error, data: IData) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
});

app.get('/api/v1/messages/store', (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err: Error, data: IData) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
});


app.listen(port, () => {
    console.log('🔥 Server started');
});


import Messages from '../schemas/Whatsapp';
import { Request, Response } from 'express';

interface IData {
    message: string;
    name: string;
    timestamp: string;
}

class WhatsApp {
    index(req: Request, res: Response) {
        Messages.find((err: Error, data: IData) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).send(data);
            }
        })
    }

    store(req: Request, res: Response) {
        const dbMessage = req.body;

        Messages.create(dbMessage, (err: Error, data: IData) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).send(data);
            }
        })
    }
}

export default WhatsApp;
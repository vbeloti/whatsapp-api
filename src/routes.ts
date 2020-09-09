import express, { Router } from 'express';
import WhatsApp from './controllers/whatsapp';
const whatsapp = new WhatsApp();

const routes = Router();
const app = express();

routes.get('/messages', whatsapp.index);

routes.post('/messages', whatsapp.store);

export default routes;
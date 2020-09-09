import express, { Router } from 'express';
import WhatsApp from './controllers/whatsapp';
const whatsapp = new WhatsApp();

const routes = Router();
const app = express();

routes.get('/messages/show', whatsapp.show);

routes.get('/messages/store', whatsapp.store);

export default routes;
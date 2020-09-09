import mongoose from 'mongoose';

const WhatsApp = new mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});

export default mongoose.model('messageContent', WhatsApp);
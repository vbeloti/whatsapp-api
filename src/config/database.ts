const SECRET_URL = process.env.SECRET_URL as string;

import mongoose from 'mongoose';
import pusher from './pusher';

mongoose.connect(SECRET_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
    const msgCollection = db.collection('messagecontents');
    const changeSteam = msgCollection.watch();

    changeSteam.on('change', (change) => {

        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted', {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            });

        } else {
            console.log('Error triggering Pusher');
        }
    });
});


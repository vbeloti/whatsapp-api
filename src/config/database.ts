const SECRET_URL = process.env.SECRET_URL as string;

import mongoose from 'mongoose';

mongoose.connect(SECRET_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
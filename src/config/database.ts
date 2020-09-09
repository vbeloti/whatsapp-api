import mongoose from 'mongoose';

const SECRET_URL = process.env.SECRET_URL || 'mongodb+srv://vbeloti:jOQdYz6L87lfqfqo@cluster0.lteyz.mongodb.net/whatsapp-api?retryWrites=true&w=majority';

mongoose.connect(SECRET_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
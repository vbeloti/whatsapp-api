import express from 'express';

const app = express();
const port = process.env.PORT || 3333;


app.get('/', (req, res) => {
    res.status(200).send('Hello Worldasas');
});


app.listen(port, () => {
    console.log('🔥 Server started');
});


import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
    res.json({
        message: "Hello World"
    });
})

app.listen(3005, () => {
    console.log('Server started at Port 3000!');
})
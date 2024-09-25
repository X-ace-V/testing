import express from 'express';

const app = express();

const PORT = 3005;

app.get('/hello', (req, res) => {
    res.json({
        message: "Hello World"
    });
})

app.listen(PORT, () => {
    console.log(`Server started at Port ${PORT}`);
})
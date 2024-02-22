const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/register', (req, res) => {
    const userData = req.body;
    console.log(userData);
    res.json('User registered successfully');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port: ${port}`))
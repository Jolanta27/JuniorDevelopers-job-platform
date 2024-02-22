const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./user.model');

mongoose.connect(process.env.DB_CONNECTION_STRING)
.then(() => console.log('Connected to database'))
.catch(err => console.log(err));
app.use(express.json());

app.post('/api/register', async (req, res) => {
    const userData = req.body;
    //Create a user in database
    const user = new User(userData);
    await user.save();
    res.json({ message: 'User registered successfully' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port: ${port}`))
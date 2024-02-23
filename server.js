require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('./user.model');

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.DB_CONNECTION_STRING)
.then(() => console.log('Connected to database'))
.catch(err => console.log(err));

app.post('/signup', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 8);
        const user = new User ({ 
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword });
        await user.save();
        res.status(201).send();
    } catch {
        res.status(500).send();
    }
});

app.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user == null) {
        return res.status(400).json({ message: 'Cannot find user'} );
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.json({ message: 'Success' });
        } else {
            res.json({ message: 'Not Allowed'} );
        }
    } catch {
        res.status(500).send();
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port: ${port}`))
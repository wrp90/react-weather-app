const http = require('http');
const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const path = require('path');
const { User } = require('./models');
require('dotenv').config({
    path: '../.env',
});

const hostname = '127.0.0.1';
const port = process.env.PORT || 3001

const app = express();
const server = http.createServer(app);

let staticPath = '../client/public';

if (process.env.NODE_ENV === 'production') {
  staticPath = '../client/build';
}

app.use(express.static(path.join(__dirname, staticPath)));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: (orig, cb) => cb(null, true), credentials: true }));

app.post('/users', async (req, res) => {
    console.log("req.body:", req.body)
    const { email, userName, password } = req.body;
    const user = await User.findOne({
        where: {
            userName: req.body.userName
        }
    });
    if (user) {
        res.send({
            message: "User name already in use"
        });
    } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            email,
            userName,
            password: hashedPassword,
        });
        res.send(newUser);
    };
});

app.post('/login', async (req, res) => {
    const user = await User.findOne({
        where: {
            userName: req.body.userName
        }
    });
    if (user) {
        const auth = await bcrypt.compare(
            req.body.password,
            user.password
        )
        if (auth) {
            res.send(user);
        } else {
            res.status(401).send({
                message: "Invalid password"
            });
        }
    } else {
        res.status(404).send({
            message: "No user found"
        })
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


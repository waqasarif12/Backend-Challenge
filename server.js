require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const imageRoutes = require('./routes/image');
const commentRoutes = require('./routes/commentRoutes');
const authMiddleware = require('./middleware/auth');
const { sequelize } = require('./config/db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/images',authMiddleware, imageRoutes);
app.use('/images', authMiddleware, commentRoutes);

const startServer = async () => {
    await sequelize.sync();
    app.listen(5000, () => {
        console.log('Server is running on port 5000');
    });
};

startServer();
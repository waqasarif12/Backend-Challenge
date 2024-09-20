const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const Image = require('../models/image');
const { sequelize } = require('../config/db');
const Comment = require('../models/comment');
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });


router.get('/', async (req, res) => {
  const images = await Image.findAll({ include: Comment });
  res.json(images);
});

router.post('/upload', upload.single('image'), async (req, res) => {
    const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION
      });
      
      // Upload image to S3
   
        const params = {
          Bucket: process.env.S3_BUCKET_NAME,
          Key: `uploads/${Date.now()}_${file.originalname}`,
          Body: file.buffer,
          ContentType: file.mimetype,
          ACL: 'public-read',
        };
      
    try {
        const data = await s3.upload(params).promise();
        const newImage = await Image.create({ userId: req.user.id, imageUrl: data.Location });
        res.json(newImage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

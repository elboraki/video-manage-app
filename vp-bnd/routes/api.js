const expres = require('express')
const router = expres.Router()
const mongoose = require('mongoose')
const Video = require('../model/video')

const db = 'mongodb://localhost:27017/videos'
mongoose.Promise = global.Promise

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Successfully connected to the database');
    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
    });

router.get('/videos', async (req, res) => {
    try {
        const videos = await Video.find({});
        res.json(videos);
    } catch (err) {
        console.log("Error getting videos", err);
        res.status(500).send({ error: 'Error getting videos' });
    }
})

router.get('/videos/:id', async (req, res) => {
    try {
        const videos = await Video.findById(req.params.id);
        res.json(videos);
    } catch (err) {
        res.status(500).send({ error: 'Error getting video by ID' });
    }
})


module.exports = router;
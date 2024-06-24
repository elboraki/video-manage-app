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


router.post('/videos', async (req, res) => {

    try {

        const video = new Video();
        video.title = req.body.title;
        video.url = req.body.url
        video.description = req.body.description

        const result = await video.save()
        res.status(200).json(result)

    } catch (err) {
        const result = "Error of creating video"
        res.status(500).json(err + ':' + result)
    }
})

router.put('/videos/:id', async (req, res) => {

    try {
        const id = req.params.id
        const data = req.body
        const updatedVideo = await Video.findByIdAndUpdate(id, data, { new: true })
        if (!updatedVideo) {
            return res.status(404).json('Video not found')
        }
        res.status(200).json(updatedVideo)

    } catch (err) {
        const result = "Error while updating video"
        res.status(500).json(err + ':' + result)
    }
})


module.exports = router;
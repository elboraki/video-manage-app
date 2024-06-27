const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../model/video');

const db = 'mongodb://localhost:27017/videos';
mongoose.Promise = global.Promise;

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

/**
 * Get all videos
 * @name get/videos
 * @function
 * @memberof module:routes/videos
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/videos', async (req, res) => {
    try {
        const videos = await Video.find({});
        res.json(videos);
    } catch (err) {
        console.log("Error getting videos", err);
        res.status(500).send({ error: 'Error getting videos' });
    }
});

/**
 * Get a video by ID
 * @name get/videos/:id
 * @function
 * @memberof module:routes/videos
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/videos/:id', async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);
        res.json(video);
    } catch (err) {
        res.status(500).send({ error: 'Error getting video by ID' });
    }
});

/**
 * Create a new video
 * @name post/videos
 * @function
 * @memberof module:routes/videos
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post('/videos', async (req, res) => {
    try {
        const video = new Video();
        video.title = req.body.title;
        video.url = req.body.url;
        video.description = req.body.description;

        const result = await video.save();
        res.status(200).json(result);
    } catch (err) {
        const result = "Error creating video";
        res.status(500).json(err + ':' + result);
    }
});

/**
 * Update a video by ID
 * @name put/videos/:id
 * @function
 * @memberof module:routes/videos
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.put('/videos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const updatedVideo = await Video.findByIdAndUpdate(id, data, { new: true });
        if (!updatedVideo) {
            return res.status(404).json('Video not found');
        }
        res.status(200).json(updatedVideo);
    } catch (err) {
        const result = "Error while updating video";
        res.status(500).json(err + ':' + result);
    }
});

/**
 * Delete a video by ID
 * @name delete/videos/:id
 * @function
 * @memberof module:routes/videos
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.delete('/videos/:id', async (req, res) => {
    try {
        const videoDeleted = await Video.findByIdAndDelete(req.params.id);
        if (!videoDeleted) {
            return res.status(404).json({ message: 'Video not found' });
        }
        res.status(200).json({ message: 'Video has been deleted.', record: videoDeleted });
    } catch (err) {
        return res.status(404).json(err);
    }
});

module.exports = router;

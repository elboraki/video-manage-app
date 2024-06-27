const mongoose = require('mongoose');

// Define a new Mongoose Schema
const Schema = mongoose.Schema;

/**
 * @typedef Video
 * @property {string} title - The title of the video.
 * @property {string} url - The URL of the video.
 * @property {string} description - The description of the video.
 */

/**
 * Mongoose Schema for videos.
 * @type {mongoose.Schema<Video>}
 */
const videoSchema = new Schema({
    title: String,
    url: String,
    description: String
});

/**
 * The Mongoose model for videos.
 * @type {mongoose.Model<Video>}
 */
const Video = mongoose.model('video', videoSchema, 'videos');

module.exports = Video;

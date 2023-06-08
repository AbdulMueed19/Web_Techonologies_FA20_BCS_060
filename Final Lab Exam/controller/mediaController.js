const Media = require('../models/mediaModel');

const getAllMedia = async (req, res) => {
    try {
        const mediaFiles = await Media.find();
        res.json(mediaFiles);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch media files.' });
    }
};

const getMediaById = async (req, res) => {
    const { id } = req.params;

    try {
        const mediaFile = await Media.findById(id);
        if (!mediaFile) return res.status(404).json({ message: 'Media file not found.' });
        res.json(mediaFile);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch media file.' });
    }
};

const createMedia = async (req, res) => {
    const { filename, filetype, size, extension } = req.body;

    if (!filename || !filetype || !size || !extension) return res.status(400).json({ message: 'All fields are required.' });

    try {
        const newMediaFile = await Media.create({ filename, filetype, size, extension });
        res.status(201).json(newMediaFile);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create media file.' });
    }
};

const updateMedia = async (req, res) => {
    const { id } = req.params;
    const { filename, filetype, size, extension } = req.body;

    if (!filename || !filetype || !size || !extension) return res.status(400).json({ message: 'All fields are required.' });

    try {
        const updatedMediaFile = await Media.findByIdAndUpdate(id, { filename, filetype, size, extension }, { new: true });

        if (!updatedMediaFile) return res.status(404).json({ message: 'Media file not found.' });

        res.json(updatedMediaFile);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update media file.' });
    }
};

const deleteMedia = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedMediaFile = await Media.findByIdAndDelete(id);

        if (!deletedMediaFile) return res.status(404).json({ message: 'Media file not found.' });

        res.json({ message: 'Media file deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete media file.' });
    }
};

module.exports = {
    getAllMedia,
    getMediaById,
    createMedia,
    updateMedia,
    deleteMedia,
};

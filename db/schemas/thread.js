const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const threadSchema =
    new Schema({
        title: {
            type: String,
            trim: true,
            required: [true, 'Please enter thread title!']
        },
        body: {
            type: String,
            trim: true,
            required: 'Please enter thread body!'
        }
    }, {
        timestamps: true
    });

module.exports = threadSchema;

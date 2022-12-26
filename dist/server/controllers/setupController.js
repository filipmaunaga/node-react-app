"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post = require('../models/postModel');
module.exports = function (app) {
    app.get('/api/setupPosts', (req, res) => {
        // seed database
        const starterPosts = [
            {
                postTitle: 'First post',
                postBody: 'Adding some seed data',
            },
            {
                postTitle: 'Second post',
                postBody: 'More seed data',
            },
            {
                postTitle: 'Third post',
                postBody: 'Bit more',
            }
        ];
    });
};
;

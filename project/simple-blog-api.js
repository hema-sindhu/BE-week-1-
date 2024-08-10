const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let posts = []; // In-memory storage for posts

// Handle all HTTP methods for the /posts and /posts/:id endpoints
app.route('/posts/:id?')
    .get((req, res) => {
        if (req.params.id) {
            // Handle GET /posts/:id - Get a single post by ID
            const post = posts.find(p => p.id === parseInt(req.params.id));
            if (post) {
                res.json({
                    message: 'Post retrieved successfully!',
                    data: post
                });
            } else {
                res.status(404).json({
                    message: 'Post not found.',
                    error: `No post with ID ${req.params.id} exists.`
                });
            }
        } else {
            // Handle GET /posts - Get all posts
            res.json({
                message: 'All posts retrieved successfully!',
                data: posts
            });
        }
    })
    .post((req, res) => {
        // Handle POST /posts - Create a new post
        const newPost = {
            id: posts.length + 1,
            title: req.body.title,
            content: req.body.content
        };
        posts.push(newPost);
        res.status(201).json({
            message: 'New post created successfully!',
            data: newPost
        });
    })
    .put((req, res) => {
        if (req.params.id) {
            // Handle PUT /posts/:id - Update a post by ID
            const post = posts.find(p => p.id === parseInt(req.params.id));
            if (post) {
                post.title = req.body.title || post.title;
                post.content = req.body.content || post.content;
                res.json({
                    message: 'Post updated successfully!',
                    data: post
                });
            } else {
                res.status(404).json({
                    message: 'Post not found.',
                    error: `No post with ID ${req.params.id} exists.`
                });
            }
        } else {
            res.status(400).json({
                message: 'ID required to update a post.',
                error: 'No ID provided in the request URL.'
            });
        }
    })
    .delete((req, res) => {
        if (req.params.id) {
            // Handle DELETE /posts/:id - Delete a post by ID
            const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
            if (postIndex !== -1) {
                const deletedPost = posts.splice(postIndex, 1);
                res.json({
                    message: 'Post deleted successfully!',
                    data: deletedPost[0]
                });
            } else {
                res.status(404).json({
                    message: 'Post not found.',
                    error: `No post with ID ${req.params.id} exists.`
                });
            }
        } else {
            res.status(400).json({
                message: 'ID required to delete a post.',
                error: 'No ID provided in the request URL.'
            });
        }
    });

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

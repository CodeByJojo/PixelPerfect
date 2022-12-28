const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const postsController = require('../controllers/posts');
const { ensureAuth, ensureGuest } = require('../middleware/auth');

//Simple Post Routes
router.get('/:id', ensureAuth, postsController.getPost);

router.post('/createPost', upload.single('file'), postsController.createPost);
router.post('/createComment/:id', postsController.createComment)

router.put('/likePost/:id', postsController.likePost);

router.delete('/deletePost/:id', postsController.deletePost);

module.exports = router;
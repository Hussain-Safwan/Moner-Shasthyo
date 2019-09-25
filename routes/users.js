const express = require("express");
const router = express.Router();
const controller = require('../controllers/post');

router.get('/profile', controller.profile);
router.get('/', controller.get_all_posts);
router.post('/post', controller.create_post);
router.get('/verify/:token', controller.verify);
router.get('/view/:id', controller.view_post);
router.post('/postcomment', controller.post_comment);
router.get('/upvote/:id', controller.inc_upvote);
router.get('/comment/:id', controller.post_comment);
router.get('/create_blog', controller.create_blog);
router.post('/full_post', controller.full_post);
router.get('/save_post/:id', controller.save_post);
router.get('/get_saved_posts', controller.get_saved_posts);

module.exports = router;

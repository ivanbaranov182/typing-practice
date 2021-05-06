const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const lessonRouter = require('./lessonRouter');
const lessonGroupRouter = require('./lessonGroupRouter');
const resultRouter = require('./resultRouter');
const ratingRouter = require('./ratingRouter');

router.use('/user', userRouter);
router.use('/lesson', lessonRouter);
router.use('/lessonGroup', lessonGroupRouter);
router.use('/result', resultRouter);
router.use('/rating', ratingRouter);

module.exports = router;

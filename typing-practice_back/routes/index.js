const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const lessonRouter = require('./lessonRouter');
const sectionRouter = require('./sectionRouter');
const resultRouter = require('./resultRouter');
const ratingRouter = require('./ratingRouter');

router.use('/user', userRouter);
router.use('/lesson', lessonRouter);
router.use('/section', sectionRouter);
router.use('/result', resultRouter);
router.use('/rating', ratingRouter);

module.exports = router;

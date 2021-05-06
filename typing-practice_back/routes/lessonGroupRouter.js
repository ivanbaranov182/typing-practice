const Router = require('express');
const router = new Router();
const lessonGroupController = require('../controllers/lessonGroupController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), lessonGroupController.create);
router.get('/', lessonGroupController.getAll);
router.get('/:id', lessonGroupController.getOne);

module.exports = router;

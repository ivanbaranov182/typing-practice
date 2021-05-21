const Router = require('express');
const router = new Router();
const sectionController = require('../controllers/sectionController');
const checkRole = require('../middleware/checkRoleMiddleware');

// router.post('/', checkRole('ADMIN'), sectionController.create);
router.post('/', sectionController.create);
router.put('/', sectionController.edit);
router.delete('/', sectionController.delete);
router.get('/', sectionController.getAll);
router.get('/:id', sectionController.getOne);

module.exports = router;

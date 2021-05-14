const { Lesson, Rating } = require('../models/models');
const ApiError = require('../error/ApiError');

class LessonController {
  async create(req, res, next) {
    try {
      const { name, text, sectionId } = req.body;
      if (!name || !text || !sectionId) {
        return next(ApiError.badRequest('Data not valid'));
      }
      const lesson = await Lesson.create({ name, text, sectionId });
      return res.json(lesson);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { sectionId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let lessons;
    if (sectionId) {
      lessons = await Lesson.findAndCountAll({
        where: { sectionId },
        limit,
        offset,
      });
    } else {
      lessons = await Lesson.findAndCountAll({ limit, offset });
    }
    return res.json(lessons);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const lesson = await Lesson.findOne({
      where: { id },
      include: [{ model: Rating }],
    });
    return res.json(lesson);
  }
}

module.exports = new LessonController();

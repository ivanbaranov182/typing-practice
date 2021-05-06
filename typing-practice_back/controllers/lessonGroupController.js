const { v4 } = require('uuid');
const path = require('path');
const { LessonGroup } = require('../models/models');
const ApiError = require('../error/ApiError');

class LessonGroupController {
  async create(req, res, next) {
    try {
      const { name, text } = req.body;
      const { img } = req.files;
      let fileName = v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      const lessonGroup = await LessonGroup.create({
        name,
        text,
        img: fileName,
      });
      return res.json(lessonGroup);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const lessonGroups = await LessonGroup.findAll();
    return res.json(lessonGroups);
  }

  async getOne(req, res) {}
}

module.exports = new LessonGroupController();

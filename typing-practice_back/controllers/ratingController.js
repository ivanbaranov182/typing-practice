const { Rating } = require('../models/models');
const ApiError = require('../error/ApiError');

class RatingController {
  async create(req, res, next) {
    try {
      const { userId, lessonId, rate } = req.body;
      const rating = await Rating.create({ userId, lessonId, rate });
      return res.json(rating);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      let { userId, lessonId, page, limit } = req.query;
      page = page || 1;
      limit = limit || 9;
      let offset = page * limit - limit;
      let raitings;
      let params = {};
      if (userId) params.userId = userId;
      if (lessonId) params.lessonId = lessonId;
      raitings = await Rating.findAndCountAll({
        where: { ...params },
        limit,
        offset,
      });
      return res.json(raitings);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res) {
    const { id } = req.params;
    const raiting = await Rating.findOne({
      where: { id },
    });
    return res.json(raiting);
  }
}

module.exports = new RatingController();

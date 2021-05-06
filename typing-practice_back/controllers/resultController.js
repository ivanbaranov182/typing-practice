const { Result } = require('../models/models');
const ApiError = require('../error/ApiError');

class ResultController {
  async create(req, res) {
    const { name, text } = req.body;
    const result = await Result.create({ name, text });
    return res.json(result);
  }

  async getAll(req, res) {
    const results = await Result.findAll();
    return res.json(results);
  }

  async getOne(req, res) {}
}

module.exports = new ResultController();

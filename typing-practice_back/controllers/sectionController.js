const { v4 } = require('uuid');
const path = require('path');
const { Section, Lesson } = require('../models/models');
const ApiError = require('../error/ApiError');

// TODO
const PORT = process.env.PORT || 5000;
const host = `http://localhost:${PORT}`;

class SectionController {
  async create(req, res, next) {
    try {
      const { name, text } = req.body;
      let img = null;
      if (req.files) {
        img = req.files.img;
        let fileName = v4() + '.jpg';
        img.mv(path.resolve(__dirname, '..', 'static', fileName));
        img = `${host}/${fileName}`;
      }
      const section = await Section.create({
        name,
        text,
        img: img,
      });
      return res.json(section);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async edit(req, res, next) {
    try {
      const { id, name, text } = req.body;
      let img = null;
      if (req.files) {
        img = req.files.img;
        let fileName = v4() + '.jpg';
        img.mv(path.resolve(__dirname, '..', 'static', fileName));
        img = `${host}/${fileName}`;
      }
      const section = await Section.findOne({
        where: { id },
      });
      if (section) {
        section.update({
          name,
          text,
          img: img ?? section.img,
        });
      } else {
        next(ApiError.badRequest("Section doesn't exist"));
      }
      return res.json(section);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.body;
      const section = await Section.findOne({ where: { id } });
      if (section) {
        section.delete();
      } else {
        next(ApiError.badRequest("Section doesn't exist"));
      }
      return res.json(section);
    } catch (e) {
      next(ApiError.badRequest("Section doesn't exist"));
    }
  }

  async getAll(req, res) {
    // TODO remove lesson text
    const sections = await Section.findAll({ include: [{ model: Lesson }] });
    return res.json(sections);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const section = await Section.findOne({
      where: { id },
      include: [{ model: Lesson }],
    });
    return res.json(section);
  }
}

module.exports = new SectionController();

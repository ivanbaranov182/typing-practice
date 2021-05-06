const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const Result = sequelize.define('result', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  signs: { type: DataTypes.INTEGER, allowNull: false },
  wpm: { type: DataTypes.INTEGER, allowNull: false },
  errors: { type: DataTypes.INTEGER, allowNull: false },
  accuracy: { type: DataTypes.INTEGER, allowNull: false },
  time: { type: DataTypes.INTEGER, allowNull: false },
});

const Lesson = sequelize.define('lesson', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  text: { type: DataTypes.TEXT },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
});

const LessonGroup = sequelize.define('lesson_group', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
  img: { type: DataTypes.STRING, allowNull: false },
});

const Rating = sequelize.define('rating', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
});

User.hasMany(Result);
Result.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Lesson.hasMany(Result);
Result.belongsTo(Lesson);

LessonGroup.hasMany(Lesson);
Lesson.belongsTo(LessonGroup);

Lesson.hasMany(Rating);
Rating.belongsTo(Lesson);

module.exports = {
  User,
  Result,
  Lesson,
  LessonGroup,
  Rating,
};

import Favorite from '../../models/favorite.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';
import HttpError from '../../helpers/HttpError.js';
import Teacher from '../../models/teacher.js';

const createFavorite = ctrlWrapper(async (req, res, next) => {
  const { id: userId } = req.user;
  const { idTeacher } = req.params;

  const teacher = await Teacher.findById(idTeacher);
  if (!teacher) {
    throw HttpError(404, 'Teacher not found');
  }

  const existedFavorite = await Favorite.findOne({
    user: userId,
    teacher: idTeacher,
  });

  if (existedFavorite) {
    throw HttpError(409, 'Favorite already exists');
  }

  const favorite = await Favorite.create({
    user: userId,
    teacher: idTeacher,
  });

  res.status(201).json(favorite);
});

export default createFavorite;

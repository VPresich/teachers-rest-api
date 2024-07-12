import Teacher from '../../models/teacher.js';
import HttpError from '../../helpers/HttpError.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';

const getOneTeacher = ctrlWrapper(async (req, res, next) => {
  const { id } = req.params;
  const teacher = await Teacher.findById(id);

  if (!teacher) {
    throw HttpError(404);
  }

  res.status(200).json(teacher);
});

export default getOneTeacher;

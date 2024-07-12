import Teacher from '../../models/teacher.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';

const getAllTeachers = ctrlWrapper(async (req, res, next) => {
  const teachers = await Teacher.find();
  res.status(200).json(teachers);
});

export default getAllTeachers;

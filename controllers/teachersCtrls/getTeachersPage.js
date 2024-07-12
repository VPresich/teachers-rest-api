import Teacher from '../../models/teacher.js';
import HttpError from '../../helpers/HttpError.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';

const getTeachersPage = ctrlWrapper(async (req, res, next) => {
  const { level, language, price_per_hour, page = 1, limit = 4 } = req.query;

  const pageNumber = parseInt(page, 10);
  const limitNumber = parseInt(limit, 10);
  const startIndex = (pageNumber - 1) * limitNumber;

  const query = {};

  if (level) {
    query.levels = { $in: [level] };
  }

  if (language) {
    query.languages = { $in: [language] };
  }

  if (price_per_hour) {
    query.price_per_hour = { $lte: parseInt(price_per_hour, 10) };
  }

  console.log('query', query);

  const totalRecords = await Teacher.countDocuments(query);
  const totalPages = Math.ceil(totalRecords / limitNumber);

  if (pageNumber > totalPages) {
    throw HttpError(404, 'Page not found');
  }

  const teachers = await Teacher.find(query)
    .limit(limitNumber)
    .skip(startIndex);

  const result = {
    totalRecords,
    totalPages,
    page: pageNumber,
    limit: limitNumber,
    teachers,
  };

  res.status(200).json(result);
});

export default getTeachersPage;

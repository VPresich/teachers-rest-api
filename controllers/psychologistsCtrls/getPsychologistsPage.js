import Psychologist from '../../models/psychologist.js';
import HttpError from '../../helpers/HttpError.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';

const getPsychologistsPage = ctrlWrapper(async (req, res, next) => {
  const { page = 1, limit = 4, query, sort } = req.query;

  const pageNumber = parseInt(page, 10);
  const limitNumber = parseInt(limit, 10);
  const startIndex = (pageNumber - 1) * limitNumber;

  const totalRecords = await Nanny.countDocuments(query);
  const totalPages = Math.ceil(totalRecords / limitNumber);

  if (pageNumber > totalPages) {
    throw HttpError(404, 'Page not found');
  }

  let psychologists;

  if (sort) {
    Object.keys(sort).forEach(key => {
      sort[key] = parseInt(sort[key], 10);
    });
    psychologists = await Psychologist.find(query)
      .sort(sort)
      .limit(limitNumber)
      .skip(startIndex);
  } else {
    psychologists = await Psychologist.find(query)
      .limit(limitNumber)
      .skip(startIndex);
  }

  const result = {
    totalRecords,
    totalPages,
    page: pageNumber,
    limit: limitNumber,
    nannies,
  };

  res.status(200).json(result);
});

export default getPsychologistsPage;

import Nanny from '../../models/nanny.js';
import HttpError from '../../helpers/HttpError.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';

const getNanniesPage = ctrlWrapper(async (req, res, next) => {
  const { page = 1, limit = 4 } = req.query;

  const pageNumber = parseInt(page, 10);
  const limitNumber = parseInt(limit, 10);
  const startIndex = (pageNumber - 1) * limitNumber;

  const query = {};

  const totalRecords = await Nanny.countDocuments(query);
  const totalPages = Math.ceil(totalRecords / limitNumber);

  if (pageNumber > totalPages) {
    throw HttpError(404, 'Page not found');
  }

  const nannies = await Nanny.find(query).limit(limitNumber).skip(startIndex);

  const result = {
    totalRecords,
    totalPages,
    page: pageNumber,
    limit: limitNumber,
    nannies,
  };

  res.status(200).json(result);
});

export default getNanniesPage;

import Nanny from '../../models/nanny.js';
import HttpError from '../../helpers/HttpError.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';

const getOneNanny = ctrlWrapper(async (req, res, next) => {
  const { id } = req.params;
  const nanny = await Nanny.findById(id);

  if (!nanny) {
    throw HttpError(404);
  }

  res.status(200).json(nanny);
});

export default getOneNanny;

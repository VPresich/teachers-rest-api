import Nannyfavorite from '../../models/nannyFavorite.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';
import HttpError from '../../helpers/HttpError.js';
import Nanny from '../../models/nanny.js';

const addNannyFavorite = ctrlWrapper(async (req, res, next) => {
  const { id: userId } = req.user;
  const { idNanny } = req.params;

  if (!userId || !idNanny) {
    throw HttpError(400, 'Missing required parameters');
  }

  const nanny = await Nanny.findById(idNanny);
  if (!nanny) {
    throw HttpError(404, 'Nanny not found');
  }

  const existedFavorite = await Nannyfavorite.findOne({
    user: userId,
    nanny: idNanny,
  });

  if (existedFavorite) {
    throw HttpError(409, 'Favorite already exists');
  }

  let favorite = await Nannyfavorite.create({
    user: userId,
    nanny: idNanny,
  });

  favorite = await favorite.populate('nanny');

  res.status(201).json(favorite);
});

export default addNannyFavorite;

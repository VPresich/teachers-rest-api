import Nannyfavorite from '../../models/nannyFavorite.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';
import HttpError from '../../helpers/HttpError.js';

const getAllNanniesFavorites = ctrlWrapper(async (req, res, next) => {
  const { id: userId } = req.user;

  if (!userId) {
    throw new HttpError(400, 'User ID is missing');
  }

  const favorites = await Nannyfavorite.find({ user: userId })
    .populate('nanny')
    .exec();

  const nannies = favorites
    .filter(favorite => favorite.nanny)
    .map(favorite => favorite.nanny);

  res.status(200).json(nannies);
});

export default getAllNanniesFavorites;

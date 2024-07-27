import Nannyfavorite from '../../models/nannyFavorite.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';
import HttpError from '../../helpers/HttpError.js';

const deleteNannyFavorite = ctrlWrapper(async (req, res, next) => {
  const { id: userId } = req.user;
  const { idNanny } = req.params;

  if (!userId || !idNanny) {
    throw HttpError(400, 'Missing required parameters');
  }

  const deletedFavorite = await Nannyfavorite.findOne({
    user: userId,
    nanny: idNanny,
  });

  if (!deletedFavorite) {
    throw HttpError(404, 'Nanny not found');
  }

  if (!userId.equals(deletedFavorite.user)) {
    throw HttpError(403, 'You are not the owner of this favorite');
  }

  await Nannyfavorite.findByIdAndDelete(deletedFavorite._id);

  res.status(200).json(deletedFavorite);
});

export default deleteNannyFavorite;

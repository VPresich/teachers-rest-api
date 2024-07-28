import Favorite from '../../models/favorite.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';
import HttpError from '../../helpers/HttpError.js';

const deleteFavorite = ctrlWrapper(async (req, res, next) => {
  const { id: userId } = req.user;
  const { idTeacher } = req.params;

  if (!userId || !idTeacher) {
    throw HttpError(400, 'Missing required parameters');
  }

  const deletedFavorite = await Favorite.findOne({
    user: userId,
    teacher: idTeacher,
  });

  if (!deletedFavorite) {
    throw HttpError(404, 'Teacher not found');
  }

  if (!userId.equals(deletedFavorite.user)) {
    throw HttpError(403, 'You are not the owner of this favorite');
  }

  await Favorite.findByIdAndDelete(deletedFavorite._id);

  res.status(200).json(deletedFavorite);
});

export default deleteFavorite;

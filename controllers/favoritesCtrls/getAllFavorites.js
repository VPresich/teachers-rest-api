import Favorite from '../../models/favorite.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';

const getAllFavorites = ctrlWrapper(async (req, res, next) => {
  const { id: userId } = req.user;

  const favorites = await Favorite.find({ user: userId })
    .populate({
      path: 'teacher',
      match: { _id: { $exists: true } },
    })
    .exec();

  const filteredFavorites = favorites.filter(favorite => favorite.teacher);

  res.status(200).json(filteredFavorites);
});

export default getAllFavorites;

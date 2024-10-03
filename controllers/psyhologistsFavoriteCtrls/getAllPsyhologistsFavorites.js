import Psychologistfavorite from '../../models/psychologistFavorite.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';
import HttpError from '../../helpers/HttpError.js';

const getAllPsychologistsFavorites = ctrlWrapper(async (req, res, next) => {
  const { id: userId } = req.user;

  if (!userId) {
    throw new HttpError(400, 'User Id is missing');
  }

  const favorites = await Psychologistfavorite.find({ user: userId })
    .populate('psychologist')
    .exec();

  const psychologists = favorites
    .filter(favorite => favorite.psychologist)
    .map(favorite => favorite.psychologist);

  res.status(200).json(psychologists);
});

export default getAllPsychologistsFavorites;

import Psychologistfavorite from '../../models/psychologistFavorite.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';
import HttpError from '../../helpers/HttpError.js';
import Psychologist from '../../models/psychologist.js';

const addPsychologistFavorite = ctrlWrapper(async (req, res, next) => {
  const { id: userId } = req.user;
  const { idPsychologist } = req.params;

  if (!userId || !idPsychologist) {
    throw HttpError(400, 'Missing required parameters');
  }

  const psychologist = await Psychologist.findById(idPsychologist);
  if (!psychologist) {
    throw HttpError(404, 'Psychologist not found');
  }

  const existedFavorite = await Psychologistfavorite.findOne({
    user: userId,
    psychologist: idPsychologist,
  });

  if (existedFavorite) {
    throw HttpError(409, 'Favorite already exists');
  }

  let favorite = await Psychologistfavorite.create({
    user: userId,
    psychologist: idPsychologist,
  });

  psychologist = await favorite.populate('psychologist');

  res.status(201).json(favorite);
});

export default addPsychologistFavorite;

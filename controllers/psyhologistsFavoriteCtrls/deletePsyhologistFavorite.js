import Psychologistfavorite from '../../models/psychologistFavorite.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';
import HttpError from '../../helpers/HttpError.js';

const deletePsychologistFavorite = ctrlWrapper(async (req, res, next) => {
  const { id: userId } = req.user;
  const { idPsychologist } = req.params;

  if (!userId || !idPsychologist) {
    throw HttpError(400, 'Missing required parameters');
  }

  const deletedFavorite = await Psychologistfavorite.findOne({
    user: userId,
    psychologist: idPsychologist,
  });

  if (!deletedFavorite) {
    throw HttpError(404, 'Psychologist not found');
  }

  if (!userId.equals(deletedFavorite.user)) {
    throw HttpError(403, 'You are not the owner of this favorite');
  }

  await Psychologistfavorite.findByIdAndDelete(deletedFavorite._id);

  res.status(200).json(deletedFavorite);
});

export default deletePsychologistFavorite;

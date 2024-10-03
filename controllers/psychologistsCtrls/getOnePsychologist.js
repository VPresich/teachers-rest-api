import Psychologist from '../../models/psychologist.js';
import HttpError from '../../helpers/HttpError.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';

const getOnePsychologist = ctrlWrapper(async (req, res, next) => {
  const { id } = req.params;
  const psychologist = await Psychologist.findById(id);

  if (!psychologist) {
    throw HttpError(404);
  }

  res.status(200).json(psychologist);
});

export default getOnePsychologist;

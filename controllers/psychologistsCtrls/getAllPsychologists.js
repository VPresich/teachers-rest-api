import Psychologist from '../../models/psychologist.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';

const getAllPsychologists = ctrlWrapper(async (req, res, next) => {
  const psychologist = await Psychologist.find();
  res.status(200).json(psychologist);
});

export default getAllPsychologists;

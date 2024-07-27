import Nanny from '../../models/nanny.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';

const getAllNannies = ctrlWrapper(async (req, res, next) => {
  const nannies = await Nanny.find();
  res.status(200).json(nannies);
});

export default getAllNannies;

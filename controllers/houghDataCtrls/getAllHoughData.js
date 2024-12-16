import HoughData from '../../models/houghData.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';

const getAllHoughData = ctrlWrapper(async (req, res, next) => {
  const houghData = await HoughData.find();
  res.status(200).json(houghData);
});

export default getAllHoughData;

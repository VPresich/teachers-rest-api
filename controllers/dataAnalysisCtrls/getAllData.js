import { DataAnalysis31 } from '../../models/dataAnalysis.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';

const getAllData = ctrlWrapper(async (req, res, next) => {
  const dataRecords = await DataAnalysis31.find({ TrackNum: { $gt: 0 } });
  res.status(200).json(dataRecords);
});

export default getAllData;

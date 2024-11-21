import {
  DataAnalysis31,
  DataAnalysis32,
  DataAnalysis33,
  DataAnalysis34,
  DataAnalysis35,
  DataAnalysis36,
  DataAnalysis37,
  DataAnalysis38,
  DataAnalysis39,
  DataAnalysis40,
  DataAnalysis51,
  DataAnalysis52,
  DataAnalysis53,
  DataAnalysis54,
  DataAnalysis55,
  DataAnalysis56,
  DataAnalysis81,
  DataAnalysis82,
  DataAnalysis83,
  DataAnalysis84,
  DataAnalysis85,
  DataAnalysis86,
  DataAnalysis87,
  DataAnalysis88,
} from '../../models/dataAnalysis.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';

const getFilteredData = ctrlWrapper(async (req, res, next) => {
  const { number } = req.params;
  const numValue = parseInt(number, 10);

  console.log(numValue);

  const { startTime, endTime } = req.query;

  let queryConditions = { TrackNum: { $gt: 0 } };

  if (startTime && endTime) {
    queryConditions.Time = {
      $gte: parseFloat(startTime),
      $lte: parseFloat(endTime),
    };
  } else if (startTime) {
    queryConditions.Time = { $gte: parseFloat(startTime) };
  } else if (endTime) {
    queryConditions.Time = { $lte: parseFloat(endTime) };
  }

  let dataRecords;
  console.log(queryConditions);
  switch (numValue) {
    case 31:
      dataRecords = await DataAnalysis31.find(queryConditions);
      break;
    case 32:
      dataRecords = await DataAnalysis32.find(queryConditions);
      break;
    case 33:
      dataRecords = await DataAnalysis33.find(queryConditions);
      break;
    case 34:
      dataRecords = await DataAnalysis34.find(queryConditions);
      break;
    case 35:
      dataRecords = await DataAnalysis35.find(queryConditions);
      break;
    case 36:
      dataRecords = await DataAnalysis36.find(queryConditions);
      break;
    case 37:
      dataRecords = await DataAnalysis37.find(queryConditions);
      break;
    case 38:
      dataRecords = await DataAnalysis38.find(queryConditions);
      break;
    case 39:
      dataRecords = await DataAnalysis39.find(queryConditions);
      break;
    case 40:
      dataRecords = await DataAnalysis40.find(queryConditions);
      break;
    case 51:
      dataRecords = await DataAnalysis51.find(queryConditions);
      break;
    case 52:
      dataRecords = await DataAnalysis52.find(queryConditions);
      break;
    case 53:
      dataRecords = await DataAnalysis53.find(queryConditions);
      break;
    case 54:
      dataRecords = await DataAnalysis54.find(queryConditions);
      break;
    case 55:
      dataRecords = await DataAnalysis55.find(queryConditions);
      break;
    case 56:
      dataRecords = await DataAnalysis56.find(queryConditions);
      break;
    case 81:
      dataRecords = await DataAnalysis81.find(queryConditions);
      break;
    case 82:
      dataRecords = await DataAnalysis82.find(queryConditions);
      break;
    case 83:
      dataRecords = await DataAnalysis83.find(queryConditions);
      break;
    case 84:
      dataRecords = await DataAnalysis84.find(queryConditions);
      break;
    case 85:
      dataRecords = await DataAnalysis85.find(queryConditions);
      break;
    case 86:
      dataRecords = await DataAnalysis86.find(queryConditions);
      break;
    case 87:
      dataRecords = await DataAnalysis87.find(queryConditions);
      break;
    case 88:
      dataRecords = await DataAnalysis88.find(queryConditions);
      break;
    default:
      dataRecords = await DataAnalysis31.find(queryConditions);
      break;
  }

  res.status(200).json(dataRecords);
});

export default getFilteredData;

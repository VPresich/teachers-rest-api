import {
  DataAnalysis10,
  DataAnalysis11,
  DataAnalysis12,
  DataAnalysis13,
  DataAnalysis20,
  DataAnalysis21,
  DataAnalysis22,
  DataAnalysis23,
  DataAnalysis30,
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
  DataAnalysis41,
  DataAnalysis42,
  DataAnalysis43,
  DataAnalysis44,
  DataAnalysis45,
  DataAnalysis46,
  DataAnalysis47,
  DataAnalysis50,
  DataAnalysis51,
  DataAnalysis52,
  DataAnalysis53,
  DataAnalysis54,
  DataAnalysis55,
  DataAnalysis56,
  DataAnalysis57,
  DataAnalysis60,
  DataAnalysis61,
  DataAnalysis62,
  DataAnalysis63,
  DataAnalysis70,
  DataAnalysis71,
  DataAnalysis72,
  DataAnalysis73,
  DataAnalysis80,
  DataAnalysis81,
  DataAnalysis82,
  DataAnalysis83,
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
    case 10:
      dataRecords = await DataAnalysis10.find(queryConditions);
      break;
    case 11:
      dataRecords = await DataAnalysis11.find(queryConditions);
      break;
    case 12:
      dataRecords = await DataAnalysis12.find(queryConditions);
      break;
    case 13:
      dataRecords = await DataAnalysis13.find(queryConditions);
      break;
    case 20:
      dataRecords = await DataAnalysis20.find(queryConditions);
      break;
    case 21:
      dataRecords = await DataAnalysis21.find(queryConditions);
      break;
    case 22:
      dataRecords = await DataAnalysis22.find(queryConditions);
      break;
    case 23:
      dataRecords = await DataAnalysis23.find(queryConditions);
      break;
    case 30:
      dataRecords = await DataAnalysis30.find(queryConditions);
      break;
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
    case 41:
      dataRecords = await DataAnalysis41.find(queryConditions);
      break;
    case 42:
      dataRecords = await DataAnalysis42.find(queryConditions);
      break;
    case 43:
      dataRecords = await DataAnalysis43.find(queryConditions);
      break;
    case 44:
      dataRecords = await DataAnalysis44.find(queryConditions);
      break;
    case 45:
      dataRecords = await DataAnalysis45.find(queryConditions);
      break;
    case 46:
      dataRecords = await DataAnalysis46.find(queryConditions);
      break;
    case 47:
      dataRecords = await DataAnalysis47.find(queryConditions);
      break;
    case 50:
      dataRecords = await DataAnalysis50.find(queryConditions);
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
    case 57:
      dataRecords = await DataAnalysis57.find(queryConditions);
      break;
    case 60:
      dataRecords = await DataAnalysis60.find(queryConditions);
      break;
    case 61:
      dataRecords = await DataAnalysis61.find(queryConditions);
      break;
    case 62:
      dataRecords = await DataAnalysis62.find(queryConditions);
      break;
    case 63:
      dataRecords = await DataAnalysis63.find(queryConditions);
      break;
    case 70:
      dataRecords = await DataAnalysis70.find(queryConditions);
      break;
    case 71:
      dataRecords = await DataAnalysis71.find(queryConditions);
      break;
    case 72:
      dataRecords = await DataAnalysis72.find(queryConditions);
      break;
    case 73:
      dataRecords = await DataAnalysis73.find(queryConditions);
      break;
    case 80:
      dataRecords = await DataAnalysis80.find(queryConditions);
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
    default:
      dataRecords = await DataAnalysis31.find(queryConditions);
      break;
  }

  res.status(200).json(dataRecords);
});

export default getFilteredData;

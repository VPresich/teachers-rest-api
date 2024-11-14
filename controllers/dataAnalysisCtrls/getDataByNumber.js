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

const getDataByNumber = ctrlWrapper(async (req, res, next) => {
  const { number } = req.params;
  const numValue = parseInt(number, 10);

  let dataRecords;
  switch (numValue) {
    case 31:
      dataRecords = await DataAnalysis31.find({ TrackNum: { $gt: 0 } });
      break;
    case 32:
      dataRecords = await DataAnalysis32.find({ TrackNum: { $gt: 0 } });
      break;
    case 33:
      dataRecords = await DataAnalysis33.find({ TrackNum: { $gt: 0 } });
      break;
    case 34:
      dataRecords = await DataAnalysis34.find({ TrackNum: { $gt: 0 } });
      break;
    case 35:
      dataRecords = await DataAnalysis35.find({ TrackNum: { $gt: 0 } });
      break;
    case 36:
      dataRecords = await DataAnalysis36.find({ TrackNum: { $gt: 0 } });
      break;
    case 37:
      dataRecords = await DataAnalysis37.find({ TrackNum: { $gt: 0 } });
      break;
    case 38:
      dataRecords = await DataAnalysis38.find({ TrackNum: { $gt: 0 } });
      break;
    case 39:
      dataRecords = await DataAnalysis39.find({ TrackNum: { $gt: 0 } });
      break;
    case 40:
      dataRecords = await DataAnalysis40.find({ TrackNum: { $gt: 0 } });
      break;
    case 51:
      dataRecords = await DataAnalysis51.find({ TrackNum: { $gt: 0 } });
      break;
    case 52:
      dataRecords = await DataAnalysis52.find({ TrackNum: { $gt: 0 } });
      break;
    case 53:
      dataRecords = await DataAnalysis53.find({ TrackNum: { $gt: 0 } });
      break;
    case 54:
      dataRecords = await DataAnalysis54.find({ TrackNum: { $gt: 0 } });
      break;
    case 55:
      dataRecords = await DataAnalysis55.find({ TrackNum: { $gt: 0 } });
      break;
    case 81:
      dataRecords = await DataAnalysis81.find({ TrackNum: { $gt: 0 } });
      break;
    case 82:
      dataRecords = await DataAnalysis82.find({ TrackNum: { $gt: 0 } });
      break;
    case 83:
      dataRecords = await DataAnalysis83.find({ TrackNum: { $gt: 0 } });
      break;
    case 84:
      dataRecords = await DataAnalysis84.find({ TrackNum: { $gt: 0 } });
      break;
    case 85:
      dataRecords = await DataAnalysis85.find({ TrackNum: { $gt: 0 } });
      break;
    case 86:
      dataRecords = await DataAnalysis86.find({ TrackNum: { $gt: 0 } });
      break;
    case 87:
      dataRecords = await DataAnalysis87.find({ TrackNum: { $gt: 0 } });
      break;
    case 88:
      dataRecords = await DataAnalysis88.find({ TrackNum: { $gt: 0 } });
      break;
    default:
      dataRecords = await DataAnalysis31.find({ TrackNum: { $gt: 0 } });
      break;
  }

  res.status(200).json(dataRecords);
});

export default getDataByNumber;

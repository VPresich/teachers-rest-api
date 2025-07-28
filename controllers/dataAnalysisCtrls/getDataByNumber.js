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
  DataAnalysis50,
  DataAnalysis51,
  DataAnalysis52,
  DataAnalysis53,
  DataAnalysis54,
  DataAnalysis55,
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

const getDataByNumber = ctrlWrapper(async (req, res, next) => {
  const { number } = req.params;
  const numValue = parseInt(number, 10);

  let dataRecords;
  switch (numValue) {
    case 10:
      dataRecords = await DataAnalysis10.find({ TrackNum: { $gt: 0 } });
      break;
    case 11:
      dataRecords = await DataAnalysis11.find({ TrackNum: { $gt: 0 } });
      break;
    case 12:
      dataRecords = await DataAnalysis12.find({ TrackNum: { $gt: 0 } });
      break;
    case 13:
      dataRecords = await DataAnalysis13.find({ TrackNum: { $gt: 0 } });
      break;
    case 20:
      dataRecords = await DataAnalysis20.find({ TrackNum: { $gt: 0 } });
      break;
    case 21:
      dataRecords = await DataAnalysis21.find({ TrackNum: { $gt: 0 } });
      break;
    case 22:
      dataRecords = await DataAnalysis22.find({ TrackNum: { $gt: 0 } });
      break;
    case 23:
      dataRecords = await DataAnalysis23.find({ TrackNum: { $gt: 0 } });
      break;
    case 30:
      dataRecords = await DataAnalysis30.find({ TrackNum: { $gt: 0 } });
      break;
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
    case 41:
      dataRecords = await DataAnalysis41.find({ TrackNum: { $gt: 0 } });
      break;
    case 50:
      dataRecords = await DataAnalysis50.find({ TrackNum: { $gt: 0 } });
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
    case 60:
      dataRecords = await DataAnalysis60.find({ TrackNum: { $gt: 0 } });
      break;
    case 61:
      dataRecords = await DataAnalysis61.find({ TrackNum: { $gt: 0 } });
      break;
    case 62:
      dataRecords = await DataAnalysis62.find({ TrackNum: { $gt: 0 } });
      break;
    case 63:
      dataRecords = await DataAnalysis63.find({ TrackNum: { $gt: 0 } });
      break;
    case 70:
      dataRecords = await DataAnalysis70.find({ TrackNum: { $gt: 0 } });
      break;
    case 71:
      dataRecords = await DataAnalysis71.find({ TrackNum: { $gt: 0 } });
      break;
    case 72:
      dataRecords = await DataAnalysis72.find({ TrackNum: { $gt: 0 } });
      break;
    case 73:
      dataRecords = await DataAnalysis73.find({ TrackNum: { $gt: 0 } });
      break;
    case 80:
      dataRecords = await DataAnalysis80.find({ TrackNum: { $gt: 0 } });
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
    default:
      dataRecords = await DataAnalysis31.find({ TrackNum: { $gt: 0 } });
      break;
  }

  res.status(200).json(dataRecords);
});

export default getDataByNumber;

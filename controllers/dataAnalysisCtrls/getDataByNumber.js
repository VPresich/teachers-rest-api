import {
  DataAnalysis3,
  DataAnalysis4,
  DataAnalysis5,
  DataAnalysis6,
  DataAnalysis7,
  DataAnalysis8,
} from '../../models/dataAnalysis.js';
import ctrlWrapper from '../../helpers/ctrlWrapper.js';

const getDataByNumber = ctrlWrapper(async (req, res, next) => {
  const { number } = req.params;
  const numValue = parseInt(number, 10);
  console.log('number', number);

  let dataRecords;
  switch (numValue) {
    case 4:
      dataRecords = await DataAnalysis4.find({ TrackNum: { $gt: 0 } });
      break;
    case 5:
      dataRecords = await DataAnalysis5.find({ TrackNum: { $gt: 0 } });
      break;
    case 6:
      dataRecords = await DataAnalysis6.find({ TrackNum: { $gt: 0 } });
      break;
    case 7:
      dataRecords = await DataAnalysis7.find({ TrackNum: { $gt: 0 } });
      break;
    case 8:
      dataRecords = await DataAnalysis8.find({ TrackNum: { $gt: 0 } });
      break;
    default:
      dataRecords = await DataAnalysis3.find({ TrackNum: { $gt: 0 } });
      break;
  }

  res.status(200).json(dataRecords);
});

export default getDataByNumber;

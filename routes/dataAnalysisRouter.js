import express from 'express';
import validateTimeParams from '../helpers/validateTimeParams.js';

import dataAnalysisCtrls from '../controllers/dataAnalysisCtrls/index.js';
const dataAnalysisRouter = express.Router();

dataAnalysisRouter.get('/', dataAnalysisCtrls.getAllData);
dataAnalysisRouter.get('/:number', dataAnalysisCtrls.getDataByNumber);
// dataAnalysisRouter.get(
//   '/:number',
//   validateTimeParams,
//   dataAnalysisCtrls.getFilteredData
// );

export default dataAnalysisRouter;

import express from 'express';

import dataAnalysisCtrls from '../controllers/dataAnalysisCtrls/index.js';
const dataAnalysisRouter = express.Router();

dataAnalysisRouter.get('/', dataAnalysisCtrls.getAllData);
dataAnalysisRouter.get('/:number', dataAnalysisCtrls.getDataByNumber);

export default dataAnalysisRouter;

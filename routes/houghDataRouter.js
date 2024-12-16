import express from 'express';
import houghDataCtrls from '../controllers/houghDataCtrls/index.js';

const houghDataRouter = express.Router();

houghDataRouter.get('/', houghDataCtrls.getAllHoughData);

export default houghDataRouter;

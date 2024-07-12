import express from 'express';
// import boardsRouter from './boardsRouter.js';
// import columnsRouter from './columnsRouter.js';
// import tasksRouter from './tasksRouter.js';
import authRouter from './authRouter.js';
import teachersRouter from './teachersRouter.js';
import themesRouter from './themesRouter.js';
import helpRouter from './helpRouter.js';
// import docRouter from './docs.js';
import backgroundsRouter from './backgrounds.js';

const routers = express.Router();

// routers.use('/boards', boardsRouter);
// routers.use('/columns', columnsRouter);
// routers.use('/themes', themesRouter);
// routers.use('/tasks', tasksRouter);
//routers.use('/help', helpRouter);
// routers.use('/docs', docRouter);
routers.use('/backgrounds', backgroundsRouter);
routers.use('/users', authRouter);
routers.use('/teachers', teachersRouter);

export default routers;

import express from 'express';
import authRouter from './authRouter.js';
import teachersRouter from './teachersRouter.js';
import themesRouter from './themesRouter.js';
import favoritesRouter from './favoritesRouter.js';
import helpRouter from './helpRouter.js';
import docRouter from './docs.js';
import backgroundsRouter from './backgrounds.js';
import nanniesRouter from './nanniesRouter.js';

const routers = express.Router();
routers.use('/themes', themesRouter);
routers.use('/help', helpRouter);
routers.use('/docs', docRouter);
routers.use('/backgrounds', backgroundsRouter);
routers.use('/users', authRouter);
routers.use('/teachers', teachersRouter);
routers.use('/favorites', favoritesRouter);

routers.use('/nannies', nanniesRouter);

export default routers;

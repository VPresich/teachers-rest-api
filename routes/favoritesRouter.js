import express from 'express';
import favoritesCtrls from '../controllers/favoritesCtrls/index.js';
import authMiddleware from '../helpers/authMiddleware.js';

const favoritesRouter = express.Router();

favoritesRouter.get('/', authMiddleware, favoritesCtrls.getAllFavorites);

favoritesRouter.post('/:idTeacher', authMiddleware, favoritesCtrls.addFavorite);

favoritesRouter.delete(
  '/:idTeacher',
  authMiddleware,
  favoritesCtrls.deleteFavorite
);

export default favoritesRouter;

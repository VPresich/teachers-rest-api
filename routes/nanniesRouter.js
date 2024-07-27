import express from 'express';
import nanniesCtrls from '../controllers/nanniesCtrls/index.js';
import nanniesFavoriteCtrls from '../controllers/nanniesFavoriteCtrls/index.js';
import authMiddleware from '../helpers/authMiddleware.js';

const nanniesRouter = express.Router();

nanniesRouter.get('/', nanniesCtrls.getNanniesPage);

nanniesRouter.get(
  '/favorites',
  authMiddleware,
  nanniesFavoriteCtrls.getAllNanniesFavorites
);

nanniesRouter.get('/:id', nanniesCtrls.getOneNanny);

nanniesRouter.post(
  '/favorites/:idNanny',
  authMiddleware,
  nanniesFavoriteCtrls.addFavorite
);

nanniesRouter.delete(
  '/favorites/:idNanny',
  authMiddleware,
  nanniesFavoriteCtrls.deleteFavorite
);

export default nanniesRouter;

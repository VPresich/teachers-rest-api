import express from 'express';
import psychologistsCtrls from '../controllers/psychologistsCtrls/index.js';
import psychologistsFavoriteCtrls from '../controllers/psychologistsFavoriteCtrls/index.js';
import authMiddleware from '../helpers/authMiddleware.js';

const psychologistsRouter = express.Router();

psychologistsRouter.get('/', psychologistsCtrls.getPsychologistsPage);

psychologistsRouter.get(
  '/favorites',
  authMiddleware,
  psychologistsFavoriteCtrls.getAllPsychologistsFavorites
);

psychologistsRouter.get('/:id', psychologistsCtrls.getOnePsychologist);

psychologistsRouter.post(
  '/favorites/:idPsychologist',
  authMiddleware,
  psychologistsFavoriteCtrls.addPsychologistFavorite
);

psychologistsRouter.delete(
  '/favorites/:idPsychologist',
  authMiddleware,
  psychologistsFavoriteCtrls.deletePsychologistFavorite
);

export default psychologistsRouter;

import { Schema, mongoose } from 'mongoose';
import { NAME_PATTERN, NAME_ERR_MESSAGE } from '../helpers/constants.js';

const psychologistSchema = new Schema({
  name: {
    type: String,
    required: true,
    match: [NAME_PATTERN, `Name ${NAME_ERR_MESSAGE}`],
  },
  avatar_url: {
    type: String,
  },
  experience: {
    type: String,
    required: true,
  },
  reviews: [
    {
      reviewer: {
        type: String,
        required: true,
        match: [NAME_PATTERN, `Name ${NAME_ERR_MESSAGE}`],
      },
      rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  price_per_hour: {
    type: Number,
    required: true,
    min: 0,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  license: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  initial_consultation: {
    type: String,
    default: 'Free initial consultation',
  },
  about: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Psychologist', psychologistSchema);

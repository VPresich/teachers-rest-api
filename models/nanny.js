import { Schema, mongoose } from 'mongoose';
import { NAME_PATTERN, NAME_ERR_MESSAGE } from '../helpers/constants.js';

const nannySchema = new Schema({
  name: {
    type: String,
    required: true,
    match: [NAME_PATTERN, `Name ${NAME_ERR_MESSAGE}`],
  },
  avatar_url: String,
  birthday: Date,
  experience: String,
  reviews: [
    {
      reviewer: {
        type: String,
        required: true,
        match: [NAME_PATTERN, `Name ${NAME_ERR_MESSAGE}`],
      },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
    },
  ],
  price_per_hour: Number,
  education: String,
  kids_age: String,
  price_per_hour: Number,
  location: String,
  about: String,
  characters: [String],
  rating: Number,
});

export default mongoose.model('Nanny', nannySchema);

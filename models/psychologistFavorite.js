import { Schema, mongoose } from 'mongoose';
const psychologistFavoriteSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    psychologist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Psychologist',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model(
  'Psychologistfavorite',
  psychologistFavoriteSchema
);

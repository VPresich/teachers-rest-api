import { Schema, mongoose } from 'mongoose';
const psyhologistFavoriteSchema = new Schema(
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

export default mongoose.model('Psyhologistfavorite', psyhologistFavoriteSchema);

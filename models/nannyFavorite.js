import { Schema, mongoose } from 'mongoose';
const nannyfavoriteSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    nanny: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Nanny',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model('Nannyfavorite', nannyfavoriteSchema);

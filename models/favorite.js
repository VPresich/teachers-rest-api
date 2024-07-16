import { Schema, mongoose } from 'mongoose';
const favoriteSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teacher',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model('Favorite', favoriteSchema);

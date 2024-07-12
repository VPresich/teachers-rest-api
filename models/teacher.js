import { Schema, mongoose } from 'mongoose';
import { NAME_PATTERN, NAME_ERR_MESSAGE } from '../helpers/constants.js';

const teacherSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      match: [NAME_PATTERN, `Name ${NAME_ERR_MESSAGE}`],
    },

    surname: {
      type: String,
      required: true,
      match: [NAME_PATTERN, `Surname ${NAME_ERR_MESSAGE}`],
    },

    languages: [
      {
        type: String,
        required: true,
        enum: [
          'English',
          'German',
          'Spanish',
          'French',
          'Mandarin Chinese',
          'Italian',
          'Korean',
          'Vietnamese',
        ],
        default: 'English',
      },
    ],

    levels: [
      {
        type: String,
        required: true,
        enum: [
          'A1 Beginner',
          'A2 Elementary',
          'B1 Intermediate',
          'B2 Upper-Intermediate',
          'C1 Advanced',
          'C2 Proficient',
        ],
        default: 'A1 Beginner',
      },
    ],
    rating: { type: Number, required: true },
    reviews: [
      {
        reviewer_name: { type: String, required: true },
        reviewer_rating: { type: Number, required: true },
        comment: { type: String, required: true },
      },
    ],
    price_per_hour: { type: Number, required: true },
    lessons_done: { type: Number, required: true },
    avatar_url: { type: String, required: true },
    lesson_info: { type: String, required: true },
    conditions: [{ type: String, required: true }],
    experience: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model('Teacher', teacherSchema);

import * as yup from 'yup';
import { NAME_PATTERN, NAME_ERR_MESSAGE } from '../helpers/constants.js';

const teacherSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(NAME_PATTERN, `Name ${NAME_ERR_MESSAGE}`),
  surname: yup
    .string()
    .required()
    .matches(NAME_PATTERN, `Surname ${NAME_ERR_MESSAGE}`),
  languages: yup
    .array()
    .of(
      yup
        .string()
        .required()
        .oneOf(
          [
            'English',
            'German',
            'Spanish',
            'French',
            'Mandarin Chinese',
            'Italian',
            'Korean',
            'Vietnamese',
          ],
          'Invalid language'
        )
        .default('English')
        .insensitive()
    ),
  levels: yup
    .array()
    .of(
      yup
        .string()
        .required()
        .oneOf(
          [
            'A1 Beginner',
            'A2 Elementary',
            'B1 Intermediate',
            'B2 Upper-Intermediate',
            'C1 Advanced',
            'C2 Proficient',
          ],
          'Invalid level'
        )
        .default('A1 Beginner')
        .insensitive()
    ),
  rating: yup.number().required(),
  reviews: yup.array().of(
    yup.object().shape({
      reviewer_name: yup.string().required(),
      reviewer_rating: yup.number().required(),
      comment: yup.string().required(),
    })
  ),
  price_per_hour: yup.number().required(),
  lessons_done: yup.number().required(),
  avatar_url: yup.string().required(),
  lesson_info: yup.string().required(),
  conditions: yup.array().of(yup.string().required()),
  experience: yup.string().required(),
});

export default teacherSchema;

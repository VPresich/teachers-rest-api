import * as yup from 'yup';
import { NAME_PATTERN, NAME_ERR_MESSAGE } from '../helpers/constants.js';

const nannySchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(NAME_PATTERN, `Name ${NAME_ERR_MESSAGE}`),
  avatar_url: yup.string().url('Avatar must be a valid URL'),
  birthday: yup.date(),
  experience: yup.string(),
  reviews: yup.array().of(
    yup.object().shape({
      reviewer: yup.string().required(),
      rating: yup.number().required(),
      comment: yup.string().required(),
    })
  ),
  price_per_hour: yup.number(),
  education: yup.string(),
  kids_age: yup.string(),
  location: yup.string(),
  about: yup.string(),
  characters: yup.array().of(yup.string()),
  rating: yup.number(),
});

export default nannySchema;

import Joi from 'joi';

export const signUpSchema = Joi.object({
  name: Joi.string().required().label(`name`),
  email: Joi.string().email().required().label(`email`),
  password: Joi.string().required().label(`password`),
});

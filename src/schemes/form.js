import Joi from 'joi';

const formValidationSchema = Joi.object({
    uniqueId: Joi.string().uuid().optional(),
    title: Joi.string(),
    name: Joi.string(),
    email: Joi.string().email(),
    phoneNumber: Joi.string().pattern(/^[0-9]+$/),
    isGraduated: Joi.boolean(),
});

export { formValidationSchema };

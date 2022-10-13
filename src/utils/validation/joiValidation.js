const joi = require("joi");

module.exports.planetaValidate = async (body) => {
    const JoiSchema = joi
        .object({
            nombre: joi
                .string()
                .required()
                .messages({
                    "any.required": "nombre es obligatorio",
                    "string.empty": "nombre no puede estar vacío",
                }),
            periodo_de_rotacion: joi
                .string()
                .required()
                .messages({
                    "any.required": "periodo_de_rotacion es obligatorio",
                    "string.empty": "periodo_de_rotacion no puede estar vacío",
                }),
            periodo_orbital: joi
                .string()
                .required()
                .messages({
                    "any.required": "periodo_orbital es obligatorio",
                    "string.empty": "periodo_orbital no puede estar vacío",
                }),
            diametro: joi
                .string()
                .required()
                .messages({
                    "any.required": "diametro es obligatorio",
                    "string.empty": "diametro no puede estar vacío",
                }),
            climatizado: joi
                .string()
                .required()
                .messages({
                    "any.required": "climatizado es obligatorio",
                    "string.empty": "climatizado no puede estar vacío",
                }),
            gravedad: joi
                .string()
                .required()
                .messages({
                    "any.required": "gravedad es obligatorio",
                    "string.empty": "gravedad no puede estar vacío",
                }),
            terreno: joi
                .string()
                .required()
                .messages({
                    "any.required": "terreno es obligatorio",
                    "string.empty": "terreno no puede estar vacío",
                }),
            superficie_del_agua: joi
                .string()
                .required()
                .messages({
                    "any.required": "superficie_del_agua es obligatorio",
                    "string.empty": "superficie_del_agua no puede estar vacío",
                }),
            poblacion: joi
                .string()
                .required()
                .messages({
                    "any.required": "poblacion es obligatorio",
                    "string.empty": "poblacion no puede estar vacío",
                }),
            residentes: joi
                .array()
                .items(joi.number())
                .required()
                .messages({
                    "any.required": "residentes es obligatorio",
                    "string.empty": "residentes no puede estar vacío",
                }),
            peliculas: joi
                .array()
                .items(joi.number())
                .required()
                .messages({
                    "any.required": "peliculas es obligatorio",
                    "string.empty": "peliculas no puede estar vacío",
                }),
            creado: joi
                .string()
                .required()
                .messages({
                    "any.required": "creado es obligatorio",
                    "string.empty": "creado no puede estar vacío",
                }),
            editado: joi
                .string()
                .required()
                .messages({
                    "any.required": "editado es obligatorio",
                    "string.empty": "editado no puede estar vacío",
                }),
            url: joi
                .string()
                .required()
                .messages({
                    "any.required": "url es obligatorio",
                    "string.empty": "url no puede estar vacío",
                }),
        })
        .options({ abortEarly: false });
    return JoiSchema.validate(body);
};

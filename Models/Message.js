import mongoose from "mongoose";
import Joi from "joi";
import timestamps from "mongoose-timestamp";

const messageSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 4,
        required: true,
    },
    first_name: {
        type: String,
        minlength: 3,
        maxlength: 200,
    },
    last_name: {
        type: String,
        minlength: 3,
        maxlength: 200,
    },
    email: {
        type: String,
        minlength: 3,
        maxlength: 200,
    },
    message: {
        type: String,
        minlength: 3,
        maxlength: 200,
    },
});

messageSchema.plugin(timestamps);

export const Message = mongoose.model("Message", messageSchema);

export function ValidateMessage(data) {
    const schema = Joi.object({
        title: Joi.string().required().min(3),
        first_name: Joi.string().required().min(4),
        last_name: Joi.string().required().min(4),
        email: Joi.string().email().required().min(4),
        message: Joi.string().required().min(4),
    });
    return schema.validate(data);
}

import { Message, ValidateMessage } from "../Models/Message.js";

class MessageController {
    async get_all(req, res) {
        try {
            const messages = await Message.find();
            return res.status(200).send(messages);
        } catch (err) {
            return res.status(500).send(err);
        }
    }

    async get_one(req, res) {
        try {
            const message = await Message.findById(req.params.id);
            if (!message) return res.status(404).send("Message not found");
            return res.status(200).send(message);
        } catch (err) {
            return res.status(500).send(err);
        }
    }

    async create(req, res) {
        try {
            const { error } = ValidateMessage(req.body);
            if (error) return res.status(400).send(error.details[0].message);

            const message = new Message(req.body);
            const saved = await message.save();
            if (!saved) return res.status(500).send("Message not saved");
            return res.status(201).send(saved);
        } catch (err) {
            return res.status(500).send(err);
        }
    }

    async edit(req, res) {
        try {
            if (!validObjectId(req.params.id))
                return res.status(400).send("Invalid ObjectId");

            const message = await Message.findById(req.params.id);
            if (!message) return res.status(404).send("Message not found");

            const updated = await Message.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!updated) return res.status(500).send("Message not updated");
            return res.status(200).send(updated);
        } catch (err) {
            return res.status(500).send(err);
        }
    }

    async delete(req, res) {
        try {
            const message = await Message.findById(req.params.id);
            if (!customer) return res.status(404).send("Message not found");

            const deleted = await Customer.findByIdAndDelete(req.params.id);
            if (!deleted) return res.status(500).send("Message not deleted");
            return res.status(200).send("Customer deleted successfully");
        } catch (err) {
            return res.status(500).send(err);
        }
    }
}

export default new MessageController();

import mongoose from "mongoose";

const learnSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

const LearnModel = mongoose.model("Learn", learnSchema);

export default LearnModel;
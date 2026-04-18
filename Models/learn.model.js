import mongoose from "mongoose"
const learnSchema = mongoose.Schema({
    collaborators: {
        type: [String],
        required: true
    }
});
const Learn = mongoose.model("learn", learnSchema);
export default Learn
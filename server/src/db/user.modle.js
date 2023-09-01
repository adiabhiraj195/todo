import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    verificationToken: String,
    isLogedin: {
        type: Boolean,
        default: false
    },
    cards: [{
        cardId: String,
        cTitle: String,
        tasks: [{
            content: String,
            status: String,
            taskId: String,
        }]
    }]
});

// const UserModle = mongoose.model("User", userSchema);

export default mongoose.model("User", userSchema);

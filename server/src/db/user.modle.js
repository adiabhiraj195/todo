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
    data: [{
        id: String,
        title: String,
        card: [{
            cTitle: String,
            content: String,
            status: String,
            cId: String,
        }]
    }]
});

// const UserModle = mongoose.model("User", userSchema);

export default mongoose.model("User", userSchema);

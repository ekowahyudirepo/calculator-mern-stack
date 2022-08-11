import mongoose from "mongoose";

const User = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    login_at: {
        type: String
    },
    logout_at: {
        type: String
    },
});

export default mongoose.model('Users', User);
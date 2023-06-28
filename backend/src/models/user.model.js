import { Schema, Types, model } from "mongoose"

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    userType: {
        type: Schema.Types.ObjectId,
        ref: 'UserType',
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    accountConfirmation: {
        type: Boolean,
        default: false,
    },
    resetPwd: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

const User = model('User', userSchema)

export default User

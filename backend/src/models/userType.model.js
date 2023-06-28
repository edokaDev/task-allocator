import { Schema, model } from "mongoose"

const typeSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    }
})

const UserType = model('UserType', typeSchema)
export default UserType

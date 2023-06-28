import { Schema, Types, model } from "mongoose"

const taskSchema = new Schema({
    user: {
        type: Types.ObjectId,
        ref: 'User',
    },
    description: {
        type: String,
        required: true,
    },
    start: {
        type: Date,
        default: Date.now,
    },
    end: {
        type: Date
    },
    status: {
        type: String,
        default: 'in-progress'
    }

})

const Task = model('TaskSchema', taskSchema)

export default Task

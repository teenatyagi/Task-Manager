// Task.model.js
import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    start_date_time: {
        type: Date, default: Date.now
    },
    end_date_time: {
        type: Date
    },
    status: {
        type: mongoose.Schema.Types.ObjectId, ref: 'TaskStatus'
    },
    assigned_to: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    project: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Project'
    },
    is_open: {
        type: Boolean
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }
}, { timestamps: true });

const Task = mongoose.model("Task", taskSchema);
export default Task;

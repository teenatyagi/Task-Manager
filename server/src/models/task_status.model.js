// Task.Status.model.js
import mongoose from 'mongoose';

const taskStatusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    project: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Project'
    }
}, { timestamps: true });

const TaskStatus = mongoose.model("TaskStatus", taskStatusSchema);
export default TaskStatus;

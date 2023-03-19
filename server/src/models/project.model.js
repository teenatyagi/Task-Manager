// Project.model.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    photo: {
        type: String
<div>
    <div>
        <p>the two mongo are working 
        </p>
    </div>
</div>


    },
    start_date_time: {
        type: Date, default: Date.now
    },
    end_date_time: {
        type: Date
    },
    is_open: {
        type: Boolean
    }

}, { timestamps: true });

const Project = mongoose.model("Project", projectSchema);
export default Project;


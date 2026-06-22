import { Schema, model } from 'mongoose';
const workoutSchema = new Schema({
    difficulty: { type: String, trim: true },
    durationMinutes: { type: Number, required: true },
    focusArea: { type: String, trim: true },
    instructions: { type: String, trim: true },
    title: { type: String, required: true, trim: true },
}, {
    timestamps: true,
});
export const WorkoutModel = model('Workout', workoutSchema);

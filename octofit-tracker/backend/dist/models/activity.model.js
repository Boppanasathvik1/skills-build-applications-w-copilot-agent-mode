import { Schema, model } from 'mongoose';
const activitySchema = new Schema({
    caloriesBurned: { type: Number, default: 0 },
    durationMinutes: { type: Number, required: true },
    notes: { type: String, trim: true },
    performedAt: { type: Date, default: Date.now },
    type: { type: String, required: true, trim: true },
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
}, {
    timestamps: true,
});
export const ActivityModel = model('Activity', activitySchema);

import { Schema, model } from 'mongoose';
const teamSchema = new Schema({
    captainId: { type: Schema.Types.ObjectId, ref: 'User' },
    memberIds: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    name: { type: String, required: true, trim: true },
}, {
    timestamps: true,
});
export const TeamModel = model('Team', teamSchema);

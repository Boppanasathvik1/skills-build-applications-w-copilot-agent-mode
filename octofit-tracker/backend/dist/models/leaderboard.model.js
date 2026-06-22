import { Schema, model } from 'mongoose';
const leaderboardSchema = new Schema({
    points: { type: Number, default: 0 },
    rank: { type: Number, default: 0 },
    teamId: { type: Schema.Types.ObjectId, required: true, ref: 'Team' },
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
}, {
    timestamps: true,
});
export const LeaderboardModel = model('Leaderboard', leaderboardSchema);

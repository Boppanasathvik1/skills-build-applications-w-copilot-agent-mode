import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    avatarUrl: { type: String, trim: true },
    displayName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    teamIds: [{ type: Schema.Types.ObjectId, ref: 'Team' }],
  },
  {
    timestamps: true,
  },
)

export const UserModel = model('User', userSchema)
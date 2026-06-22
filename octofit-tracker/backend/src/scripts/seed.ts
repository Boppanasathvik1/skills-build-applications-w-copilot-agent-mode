import 'dotenv/config'

import { connectDatabase } from '../config/db.js'
import { ActivityModel } from '../models/activity.model.js'
import { LeaderboardModel } from '../models/leaderboard.model.js'
import { TeamModel } from '../models/team.model.js'
import { UserModel } from '../models/user.model.js'
import { WorkoutModel } from '../models/workout.model.js'

// Seed the octofit_db database with test data

async function seedDatabase() {
  await connectDatabase()

  await Promise.all([
    ActivityModel.deleteMany({}),
    LeaderboardModel.deleteMany({}),
    TeamModel.deleteMany({}),
    UserModel.deleteMany({}),
    WorkoutModel.deleteMany({}),
  ])

  const users = await UserModel.insertMany([
    {
      avatarUrl: 'https://images.example.com/avatars/ava-santos.png',
      displayName: 'Ava Santos',
      email: 'ava.santos@octofit.dev',
    },
    {
      avatarUrl: 'https://images.example.com/avatars/jordan-lee.png',
      displayName: 'Jordan Lee',
      email: 'jordan.lee@octofit.dev',
    },
    {
      avatarUrl: 'https://images.example.com/avatars/mina-patel.png',
      displayName: 'Mina Patel',
      email: 'mina.patel@octofit.dev',
    },
  ])

  const [ava, jordan, mina] = users

  const teams = await TeamModel.insertMany([
    {
      captainId: ava._id,
      memberIds: [ava._id, jordan._id],
      name: 'Pulse Runners',
    },
    {
      captainId: mina._id,
      memberIds: [mina._id],
      name: 'Recovery Crew',
    },
  ])

  const [pulseRunners, recoveryCrew] = teams

  await ActivityModel.insertMany([
    {
      caloriesBurned: 420,
      durationMinutes: 48,
      notes: 'Evening tempo run through the park.',
      performedAt: new Date('2026-06-20T07:30:00.000Z'),
      type: 'Run',
      userId: ava._id,
    },
    {
      caloriesBurned: 315,
      durationMinutes: 36,
      notes: 'Strength circuit with kettlebells and squats.',
      performedAt: new Date('2026-06-21T08:15:00.000Z'),
      type: 'Strength',
      userId: jordan._id,
    },
    {
      caloriesBurned: 180,
      durationMinutes: 30,
      notes: 'Mobility and recovery session.',
      performedAt: new Date('2026-06-21T18:00:00.000Z'),
      type: 'Recovery',
      userId: mina._id,
    },
  ])

  await LeaderboardModel.insertMany([
    {
      points: 1280,
      rank: 1,
      teamId: pulseRunners._id,
      userId: ava._id,
    },
    {
      points: 1190,
      rank: 2,
      teamId: pulseRunners._id,
      userId: jordan._id,
    },
    {
      points: 860,
      rank: 3,
      teamId: recoveryCrew._id,
      userId: mina._id,
    },
  ])

  await WorkoutModel.insertMany([
    {
      difficulty: 'Beginner',
      durationMinutes: 25,
      focusArea: 'Cardio',
      instructions: 'Warm up for 5 minutes, then alternate brisk movement and recovery.',
      title: 'Interval Burn',
    },
    {
      difficulty: 'Intermediate',
      durationMinutes: 40,
      focusArea: 'Strength',
      instructions: 'Complete four rounds of push, pull, hinge, and core patterns.',
      title: 'Full-Body Builder',
    },
    {
      difficulty: 'Recovery',
      durationMinutes: 20,
      focusArea: 'Mobility',
      instructions: 'Flow through hips, shoulders, and thoracic rotations slowly.',
      title: 'Reset Flow',
    },
  ])

  console.log('Seed the octofit_db database with test data')
  console.log('Seeded users, teams, activities, leaderboard entries, and workouts.')
}

void seedDatabase()
  .then(() => {
    console.log('OctoFit Tracker seed completed successfully.')
    process.exit(0)
  })
  .catch((error) => {
    console.error('OctoFit Tracker seed failed.', error)
    process.exit(1)
  })
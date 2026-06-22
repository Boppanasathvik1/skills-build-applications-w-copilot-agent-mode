import { Router } from 'express'

import { WorkoutModel } from '../models/workout.model.js'

const workoutsRouter = Router()

workoutsRouter.get('/', async (_request, response, next) => {
  try {
    const workouts = await WorkoutModel.find().sort({ createdAt: 1 }).lean()

    response.json({
      count: workouts.length,
      data: workouts,
      resource: 'workouts',
      route: '/api/workouts/',
    })
  } catch (error) {
    next(error)
  }
})

export default workoutsRouter
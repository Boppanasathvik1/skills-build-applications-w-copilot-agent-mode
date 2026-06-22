import { Router } from 'express'

import { LeaderboardModel } from '../models/leaderboard.model.js'

const leaderboardRouter = Router()

leaderboardRouter.get('/', async (_request, response, next) => {
  try {
    const leaderboard = await LeaderboardModel.find().sort({ rank: 1 }).lean()

    response.json({
      count: leaderboard.length,
      data: leaderboard,
      resource: 'leaderboard',
      route: '/api/leaderboard/',
    })
  } catch (error) {
    next(error)
  }
})

export default leaderboardRouter
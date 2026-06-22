import { Router } from 'express';
import { TeamModel } from '../models/team.model.js';
const teamsRouter = Router();
teamsRouter.get('/', async (_request, response, next) => {
    try {
        const teams = await TeamModel.find().sort({ createdAt: 1 }).lean();
        response.json({
            count: teams.length,
            data: teams,
            resource: 'teams',
            route: '/api/teams/',
        });
    }
    catch (error) {
        next(error);
    }
});
export default teamsRouter;

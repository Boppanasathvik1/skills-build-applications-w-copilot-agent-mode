import { Router } from 'express';
import { ActivityModel } from '../models/activity.model.js';
const activitiesRouter = Router();
activitiesRouter.get('/', async (_request, response, next) => {
    try {
        const activities = await ActivityModel.find().sort({ performedAt: -1 }).lean();
        response.json({
            count: activities.length,
            data: activities,
            resource: 'activities',
            route: '/api/activities/',
        });
    }
    catch (error) {
        next(error);
    }
});
export default activitiesRouter;

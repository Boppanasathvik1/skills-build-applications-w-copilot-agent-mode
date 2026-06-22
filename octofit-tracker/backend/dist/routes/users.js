import { Router } from 'express';
import { UserModel } from '../models/user.model.js';
const usersRouter = Router();
usersRouter.get('/', async (_request, response, next) => {
    try {
        const users = await UserModel.find().sort({ createdAt: 1 }).lean();
        response.json({
            count: users.length,
            data: users,
            resource: 'users',
            route: '/api/users/',
        });
    }
    catch (error) {
        next(error);
    }
});
export default usersRouter;

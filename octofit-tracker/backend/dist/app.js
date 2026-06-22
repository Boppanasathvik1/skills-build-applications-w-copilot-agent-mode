import cors from 'cors';
import express from 'express';
const app = express();
app.use(cors());
app.use(express.json());
app.get('/api/health', (_request, response) => {
    response.json({
        service: 'octofit-tracker-backend',
        status: 'ok',
    });
});
app.get('/api', (_request, response) => {
    response.json({
        name: 'OctoFit Tracker API',
        routes: ['/api/health'],
    });
});
export default app;

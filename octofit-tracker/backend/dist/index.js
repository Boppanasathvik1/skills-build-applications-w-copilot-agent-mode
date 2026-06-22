import 'dotenv/config';
import app from './app.js';
import { connectDatabase } from './config/db.js';
const port = Number(process.env.PORT ?? 8000);
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
async function startServer() {
    await connectDatabase();
    app.listen(port, () => {
        console.log(`OctoFit Tracker backend listening at ${baseUrl}`);
    });
}
void startServer().catch((error) => {
    console.error('Unable to start OctoFit Tracker backend', error);
    process.exit(1);
});

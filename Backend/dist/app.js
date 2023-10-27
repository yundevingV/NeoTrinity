import express from 'express';
import cors from 'cors';
import path from 'path';
import { router } from './main';
const app = express();
const __dirname = path.resolve();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../Frontend/build')));
app.use('/main', router);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/build/index.html'));
});
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../Frontend/build/index.html'));
});
export { app };

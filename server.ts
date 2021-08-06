import express from 'express';
import cors from 'cors';

import {Column} from './src/state/appStateReducer';

const app = express();

app.use(cors());
app.use(express.json());

const port = 1234;

let columns: Column[] = [];

app.post('/save', (req, res) => {
	columns = req.body.columns;
	return res.json({success: true});
});

app.get('/load', (req, res) => res.json({columns}));

app.listen(port, () =>
	console.log(`organizer-app server running on http://localhost:${port}!`),
);

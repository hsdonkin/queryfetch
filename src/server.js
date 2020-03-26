import express from 'express';
const app = express();
const port = process.env['PORT'] || 3000;

import { queryFetchAll } from './modules/queryFetch';

app.listen(port, () => console.log(`Listening on port ${port}`));

queryFetchAll('https://www.hughsherman.com', 'li');

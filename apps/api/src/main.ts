import * as express from 'express';
import { MongoClient } from 'mongodb';
import { environment } from './environments/environment';

const app = express();

let db;

MongoClient.connect(environment.MONGO_DB_URL, (err, client) => {
  db = client.db(environment.DB_NAME);
});

app.use(express.json());
app.use(express.urlencoded());

app.post('/api/workouts', (request, response) => {
  const { page, categories, month } = request.body;
  const pageSize = 20;
  const skip = pageSize * (page - 1);

  const isCategory = categories.length !== 0;
  const categoryFilter = isCategory ? { category: { $in: categories } } : {};

  const isMonth = month !== '';
  const monthFilter = isMonth
    ? {
        $where: `return this.startDate.getMonth() == ${month}`,
      }
    : {};

  db.collection('workout')
    .find({ ...categoryFilter, ...monthFilter }, { skip, limit: pageSize })
    .toArray()
    .then((docs) => response.status(200).json(docs))
    .catch((err) => {
      throw err;
    });
});

app.post('/api/workout', (request, response) => {
  const { name } = request.body;

  db.collection('workout')
    .find({ name })
    .toArray()
    .then((docs) => response.status(200).json(docs))
    .catch((err) => {
      throw err;
    });
});

app.post('/api/count', (request, response) => {
  const { categories, month } = request.body;

  const isCategory = categories.length !== 0;
  const categoryFilter = isCategory ? { category: { $in: categories } } : {};

  const isMonth = month !== '';
  const monthFilter = isMonth
    ? {
        $where: `return this.startDate.getMonth() == ${month}`,
      }
    : {};
  db.collection('workout')
    .find({ ...categoryFilter, ...monthFilter })
    .count()
    .then((docs) => response.status(200).json(docs))
    .catch((err) => {
      throw err;
    });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

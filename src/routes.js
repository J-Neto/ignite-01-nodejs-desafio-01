import { randomUUID } from 'node:crypto';
import { buildRoutePath } from "./utils/build-route-path.js"
import { database } from './database.js';

export const routes = [
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const { title, description } = req.body

      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date(),
      }

      database.push(task)
      console.log(database)

      return res.writeHead(201).end()
    }
  }
]
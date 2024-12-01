import { randomUUID } from 'node:crypto';
import { buildRoutePath } from "./utils/build-route-path.js"
import { Database } from './database.js';

const database = new Database();

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

      database.insert('tasks', task)

      return res.writeHead(201).end()
    }
  },

  // {
  //   method: 'GET',
  //   path: buildRoutePath('/tasks'),
  //   handler: (req, res) => {
  //     const { search } = req.query

  //     let tasks = database;
  //     console.log(tasks)
  //     console.log(search)

  //     if (search) {
  //       tasks = tasks.filter(row => {
  //         return Object.entries(search).some(([key, value]) => {
  //           console.log(Object.entries(search))
  //           console.log(key)
  //           console.log(row[key])
  //           return row[key].toLowerCase().includes(value.toLowerCase())
  //         })
  //       })
  //     }

  //     return res.end(JSON.stringify(tasks))
  //   }
  // }
]
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

      if (!title) {
        return res.writeHead(422).end(JSON.stringify({ error: "The field 'title' is required." }))
      }
      if (!description) {
        return res.writeHead(422).end(JSON.stringify({ error: "The field 'description' is required." }))
      }

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
  {
    method: 'POST',
    path: buildRoutePath('/tasks/import'),
    handler: (req, res) => {
      const content = req.rawBody.split(/\r?\n/)

      const lowerBound = content.indexOf('title,description')
      const upperBound = content.indexOf('--X-INSOMNIA-BOUNDARY--')
      
      if (lowerBound === -1 || upperBound === -1 || lowerBound + 1 >= upperBound) {
        return res.writeHead(400).end(JSON.stringify({ error: 'Invalid CSV format' }));
      }

      for (let i = lowerBound+1; i < upperBound; i++) {
        const data = content[i].split(',')

        const [title, description] = data;

        const task = {
          id: randomUUID(),
          title: title.trim(),
          description: description.replace(/\r/g, '').trim(),
          completed_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        }

        database.insert('tasks', task)
      }

      return res.writeHead(201).end()
    }
  },
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const { search } = req.query

      const tasks = database.select('tasks', search ? {
        title: search,
        description: search
      }: null)

      return res.end(JSON.stringify(tasks))
    }
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params
      const { title, description} = req.body

      if (!title && !description) {
        return res.writeHead(422).end(JSON.stringify({ error: "Send at least one field!" }))
      }

      database.update('tasks', id, {
        title,
        description
      })

      return res.writeHead(204).end()
    }
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params

      database.delete('tasks', id)

      return res.writeHead(204).end()
    }
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handler: (req, res) => {
      const { id } = req.params

      database.changeTaskStatus('tasks', id)

      return res.writeHead(204).end()
    }
  }
]
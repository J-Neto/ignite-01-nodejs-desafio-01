import http from 'node:http'
import { json } from './middlewares/json.js'

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  res.writeHead(200).end()

})

server.listen(3334)
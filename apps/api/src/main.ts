import * as express from 'express'
import * as fs from 'fs'
import { Message } from '@anal-my-list/api-interfaces'

const app = express()

const greeting: Message = { message: 'Welcome to api!' }

app.get('/api/', (req, res) => {
  res.send(greeting)
})

app.get('/api/greeting', (req, res) => {
  res.send(greeting)
})

const port = process.env.port || 3333
const server = app.listen(port, () => {
  if (process.env.DYNO) {
    fs.openSync('/tmp/app-initialized', 'w')
  }
  console.log('Listening at http://localhost:' + port + '/api/')
})
server.on('error', console.error)

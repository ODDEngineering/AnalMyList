import * as express from 'express'
import * as fs from 'fs'
import type { Message } from '@anal-my-list/api-interfaces'

import * as database from './app/database'
import { shutdown } from './app/util'
import type { ShutdownFunction } from './app/util'

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
  database.init()
  if (process.env.DYNO) {
    fs.openSync('/tmp/app-initialized', 'w')
  }
  console.log('Listening at http://localhost:' + port + '/api/')
})
server.on('error', console.error)
process.on('SIGINT', () => {
  console.log('SIGINT signal received')
  const disconnectDatabase: ShutdownFunction = {
    fn: database.disconnect
  }
  const shutdownServer: ShutdownFunction = {
    fn: () => new Promise((resolve) => server.close(() => {
      console.log('HTTP Server shutdown')
      return resolve
    }))
  }
  shutdown([disconnectDatabase, shutdownServer])
})

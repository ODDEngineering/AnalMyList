import { Pool } from 'pg'

const connectionString = process.env.DATABASE_URL
let isInit = false

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  }
})

const init = async () => {
  try {
    console.log('Initializing connection to database...')
    const res = await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        uuid UUID PRIMARY KEY,
        created_at TIMESTAMP DEFAULT NOW(),
        spotify_id TEXT NOT NULL,
        display_name TEXT
      );
    `)
    console.log(res.rows)
    isInit = true
    console.log('Database connection established')
  } catch (err) {
    console.error('Error initializing database connection', err)
    isInit = false
  }
}

const disconnect = async () => {
  console.log('Disconnecting from database...\nDraining pool...')
  if (!isInit) {
    console.error('Database connection not initialized')
    return
  }
  isInit = false
  await pool.end()
  console.log('Pool has ended\nDisconnected from database')
}

export { init, disconnect, isInit }

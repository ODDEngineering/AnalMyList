import { Pool } from 'pg'

const connectionString = process.env.DATABASE_URL

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  }
})

const init = async () => {
  try {
    const res = await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        uuid UUID PRIMARY KEY,
        created_at TIMESTAMP DEFAULT NOW(),
        spotify_id TEXT NOT NULL,
        display_name TEXT
      );
    `)
    console.log(res.rows)
  } catch (err) {
    console.error('Error initializing database connection', err)
  }
}

const shutdown = async () => {
  console.log('Draining pool...')
  await pool.end()
  console.log('All clients have disconnected\nPool has ended')
}

export { init, shutdown }

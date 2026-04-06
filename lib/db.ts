import { neon } from '@neondatabase/serverless'

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error('Missing DATABASE_URL environment variable.')
}

// Server-only Neon SQL client.
// Uses HTTP transport — works correctly in Vercel serverless functions.
export const sql = neon(databaseUrl)

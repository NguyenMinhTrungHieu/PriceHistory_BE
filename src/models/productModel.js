import { MongoClient } from 'mongodb'
import config from '~/config/mongodb.js'

let db

const connectDB = async () => {
  if (db) return db
  const client = await MongoClient.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  db = client.db()
  return db
}

export const getProductCollection = async () => {
  const database = await connectDB()
  return database.collection('products')
}

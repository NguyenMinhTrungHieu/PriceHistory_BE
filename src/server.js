import express from 'express'
import { mapOrder } from '~/utils/sorts.js'

const app = express()

const hostname = 'localhost'
const port = 8017

app.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Hello, I am running at http://${ hostname }:${ port }/`)
})

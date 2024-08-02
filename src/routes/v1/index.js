import express from 'express'
import { productRoutes } from '~/routes/v1/productRoutes'

const Router = express.Router()

Router.use('/products', productRoutes)

export default Router
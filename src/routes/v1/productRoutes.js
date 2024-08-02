import express from 'express'
import { getProducts, getProductByAsin } from '~/controllers/productController'

const Router = express.Router()

Router.route('/')
  .get(getProducts)
  .post(getProducts)

Router.route('/:asin')
  .get(getProductByAsin)

export const productRoutes = Router

import { getProductCollection } from '../models/productModel.js'

export const getProducts = async (req, res) => {
  try {
    const collection = await getProductCollection()
    const products = await collection.find({}).limit(10).toArray()
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Lấy sản phẩm theo ASIN
export const getProductByAsin = async (req, res) => {
  const asin = req.params.asin
  try {
    const collection = await getProductCollection()
    const product = await collection.findOne({ asin })

    if (product) {
      res.json(product)
    } else {
      res.status(404).send('Product not found')
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


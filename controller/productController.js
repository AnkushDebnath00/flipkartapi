import Product from "../model/productSchema.js";

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

export default getProducts;

export const getProductsById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ id: id });

    res.status(200).json(product);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

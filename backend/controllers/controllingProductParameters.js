//Required Imports
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//Getting Product by ID
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Sorry!! Product not Found");
  }
});

//To create product
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Product name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Product brand",
    category: "Product category",
    countInStock: 0,
    numReviews: 0,
    description: "Product description",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// Getting Products
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 3;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

// To delete product
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Oops!! Product removed" });
  } else {
    res.status(404);
    throw new Error("Sorry!! Product not Found");
  }
});

// To write product review for the product.
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    // condition to check if product is already reviewed or not
    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Sorry!! Product already Reviewed");
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: " Congratulations!! Review added" });
  } else {
    res.status(404);
    throw new Error("Sorry!! Product not Found");
  }
});

// To update product
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.status(201).json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Sorry!! Product not Found");
  }
});

// To get top products
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);

  res.json(products);
});

//Exporting
export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
};

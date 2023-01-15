const getAllProductsStatic = (req, res) => {
  res.send("All Products Static");
};

const getAllProducts = (req, res) => {
  res.send("All Products");
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};

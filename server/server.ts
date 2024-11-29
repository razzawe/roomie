const express = require('express');
const app = express();

app.listen(4000, () => {
    console.log("server is running");
});

const router = express.router()
router.get('/', async (req, res) => {
    try {
      const products = await Product.find(id);
      res.status(200).json(products);
    } catch (error){
      res.status(500).json({message : error.message});
}
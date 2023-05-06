const ProductManager = require('./ProductManager');

const productManager = new ProductManager('../desafio_2-06_mayo/archivo.json');

productManager.addProduct({
  title: 'Producto 1',
  description: 'Descripción del producto 1',
  price: 100,
  thumbnail: 'ruta/a/la/imagen/1.jpg',
  code: 'PROD-001',
  stock: 10
});

productManager.addProduct({
  title: 'Producto 2',
  description: 'Descripción del producto 2',
  price: 200,
  thumbnail: 'ruta/a/la/imagen/2.jpg',
  code: 'PROD-002',
  stock: 5
});

productManager.addProduct({
  title: 'Producto 3',
  description: 'Descripción del producto 3',
  price: 300,
  thumbnail: 'ruta/a/la/imagen/3.jpg',
  code: 'PROD-003',
  stock: 3
});

console.log(productManager.getProducts());

const product = productManager.getProduct(2);
product.title = 'Producto 2 actualizado';
product.price = 250;

productManager.updateProduct(2,product);

console.log(productManager.getProducts());

productManager.deleteProduct(1);

console.log(productManager.getProducts());

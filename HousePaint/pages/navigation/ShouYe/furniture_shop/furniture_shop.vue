<template>
  <div>
    <h1>Welcome to our Furniture Store</h1>
    <div class="product-list">
      <div v-for="(product, index) in products" :key="index" class="product">
        <h2>{{ product.name }}</h2>
        <img :src="product.image" :alt="product.name" />
        <p>{{ product.description }}</p>
        <p>Price: ${{ product.price }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
    <div class="cart">
      <h2>Shopping Cart</h2>
      <ul>
        <li v-for="(item, index) in cart" :key="index">{{ item.name }} - ${{ item.price }}</li>
      </ul>
      <p>Total: ${{ total }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "Sofa",
          image: "https://img0.baidu.com/it/u=464427308,428833491&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          description: "Comfortable and stylish sofa.",
          price: 500
        },
        {
          name: "Bed",
          image: "http://example.com/bed.jpg",
          description: "Luxurious and comfortable bed.",
          price: 800
        },
        {
          name: "Chair",
          image: "http://example.com/chair.jpg",
          description: "Elegant and comfortable chair.",
          price: 200
        },
        {
          name: "Table",
          image: "http://example.com/table.jpg",
          description: "Sturdy and stylish table.",
          price: 300
        }
      ],
      cart: []
    };
  },
  computed: {
    total() {
      return this.cart.reduce((acc, item) => acc + item.price, 0);
    }
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    }
  }
};
</script>

<script>
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import FooterComponent from '@/components/FooterComponent.vue'
  import products from '@/products.json'
  import { RouterLink } from 'vue-router';
  import { useCartStore } from '@/stores/piniaStore.js';
  import { computed } from 'vue';
  
  export default {
  components: {
    HeaderComponent,
    FooterComponent,
    RouterLink
},
  data() {
    return {
      selectedProduct: null,
      quantity: 1, // default waarde
      maxQuantity: 0, // rekening houdende met stock
    };
  },
  computed:{
    availableStock(){
      return this.selectedProduct ? this.selectedProduct.stock : 0;
    }
  },
  watch: {
    // kijkt naar de verandering in aantal en update de maxQuantity gebaseerd op het mogelijke stock aantal
    quantity(newQuantity) {
      this.maxQuantity = Math.min(newQuantity, this.availableStock);
    }
  },
  mounted() {
    // ontvang het id van de router
    const productId = this.$route.params.productId;
    // Zoek het product met hetzelfde id
    this.selectedProduct = products.find(product => product.id === parseInt(productId));
    this.maxQuantity = this.selectedProduct ? this.selectedProduct.stock : 0;
  },
  methods: {
    incrementQuantity() {
      if (this.quantity < this.availableStock){
        this.quantity++;
      }
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    addToCart() {
      //Cart logica
      const cartStore = useCartStore();
      const quantityToAdd = this.quantity;
      cartStore.addToCart(this.selectedProduct, quantityToAdd);
      const newCount = cartStore.cartCount + quantityToAdd;
      cartStore.updateCartCount(newCount);

      console.log('Added ${this.quantity} ${this.selectedProduct.title}(s)to cart');
    },
  }
};
</script>


<template>
  <HeaderComponent />
  <section id="prodetails" class="section-p1" v-if="selectedProduct">
      <div class="single-pro-image">
        <RouterLink to="/shop"><i class="fa-solid fa-arrow-left"></i></RouterLink>
        <img :src="selectedProduct.thumbnail" :alt="selectedProduct.title" width="100%" id="mainimg"/>
      </div>
      <div class="single-pro-details">
        <h6>Home / Suits</h6>
        <h4>{{ selectedProduct.title }}</h4>
        <h2>€{{ selectedProduct.price }}</h2>
        <p>{{ selectedProduct.description }}</p>
        <div class="quantity-controls">
          <button @click="decrementQuantity">-</button>
          <input v-model.number="quantity" type="number" min="1" :max="maxQuantity" />
          <button @click="incrementQuantity">+</button>
        </div>
        <button @click="addToCart(selectedProduct)" :disabled="quantity > availableStock">Add to Cart</button>
        <span v-if="quantity > availableStock" class="error-message">Not enough stock available</span>
      </div>
  </section>
  <div v-else>
      <p>Loading...</p>
    </div>
  <FooterComponent />
</template>

<style lang="scss">
$maincolor: #171717;
#prodetails{
    display: flex;
    margin-top: 20px;
    .single-pro-image{
        width: 40%;
        margin-right: 50px;
        a{
            font-size: 25px;
            margin-left: 50px;
            color: $maincolor;
        }
    }
    .single-pro-details{
        width: 50%;
        padding-top: 30px;
        h4{
            font-size: 30px;
            padding: 40px 0 40px 0;
        }
        h2{
            font-size: 26px;
        }
        select{
            display: block;
            padding: 5px 10px;
            margin-bottom: 10px;
        }
        input{
            width: 50px;
            height: 47px;
            padding-left: 10px;
            font-size: 16px;
            margin-right: 10px;
            &:focus{
                outline: none;
            }
        }
        button{
            background-color: $maincolor;
            color: white;
            padding: 14px 10px;
            cursor: pointer;
        }
        span{
            line-height: 25px;
        }
        .quantity-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100px;
          margin-top: 10px;

          button {
            background-color: $maincolor;
            color: white;
            padding: 5px 10px;
            cursor: pointer;
          }

          input {
            width: 50px;
            height: 30px;
            padding-left: 10px;
            font-size: 16px;
            text-align: center;
          }

          .error-message {
            color: red;
            margin-top: 10px;
          }
        }
    }
}
</style>
<script>
    import { computed } from 'vue';
    import { useCartStore } from '@/stores/piniaStore';
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import FooterComponent from '@/components/FooterComponent.vue';

    export default {
        setup () {
            const cartStore = useCartStore();
            const cartItems = computed(() => cartStore.getCartItems());
            
            const removeItem = (itemId) => {
                cartStore.clearCartItem(itemId);
            };

            return {
                cartItems,
                removeItem,
            }
        },
        components: {
            HeaderComponent,
            FooterComponent,
        }
    }
</script>

<template>
    <HeaderComponent/>
    <div class="section-p1">
        <h2>Your Cart</h2>
        <ul v-if="cartItems.length > 0">
            <li v-for="item in cartItems" :key="item.id">
            <img :src="item.thumbnail" alt="item" class="thumb">
                {{ item.title }} - Quantity: {{ item.quantity }} - Price: {{ item.price }}
            <button @click="removeItem(item.id)">Remove item</button>
            </li>
        </ul>
        <p v-else>Cart is empty</p>
    </div>
    <div class="section-p1">
        <button class="checkout"><RouterLink to="/checkout">Go to checkout</RouterLink></button>
    </div>
    <FooterComponent/>
</template>

<style lang="scss">  
    li{
        list-style-type: none;
    }
    .thumb{
        width: 100px;
    }
    .checkout{
        padding: 20px;
    }
</style>
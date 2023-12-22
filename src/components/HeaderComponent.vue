<script>
    import { useCartStore } from '@/stores/piniaStore';
    import { computed } from 'vue';

    export default {
        setup(){
            const cartStore = useCartStore();

            return {
                cartCount: cartStore.cartCount,
            }
        },
        computed: {
            cartCount(){
                const cartStore = useCartStore();
                return cartStore.cartCount;
            }
        }
    }
</script>

<template>
<header>
     <a href="#"><img src="../assets/logo.png" class="logo" alt="logo"></a>
    <nav>
        <ul>
            <li><RouterLink to="/" class="navbarlink">Home</RouterLink></li>
            <li><RouterLink to="/shop" class="navbarlink">Shop</RouterLink></li>
            <li><RouterLink to="/login" class="navbarlink">Login</RouterLink></li>
            <li>
                <RouterLink to="/cart" class="navbarlink">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span v-if="cartCount > 0" class="cart-count">{{ cartCount }}</span>
                </RouterLink>
            </li>
        </ul>
        </nav>
</header>
</template>

<style lang="scss">
header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 80px;
    img{
        width: 100px;
    }
    nav{
        ul{
            display: flex;
            align-items: center;
            justify-content: center;
            li{
                list-style: none;
                padding: 0 20px;
                i{
                    position: relative;
                }
                .navbarlink{
                    text-decoration: none;
                    font-size: 16px;
                    font-weight: 200;
                    color: #171717;
                }
                .cart-count{
                    background-color: #f00;
                    color: #fff;
                    border-radius: 50%;
                    padding: 4px 8px;
                    font-size: 12px;
                    position: absolute;
                    top: 25px;
                    right: 80px;
                }
            }
        }
    }
}
</style>
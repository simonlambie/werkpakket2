<script>
    import ProductCardComponent from './ProductCardComponent.vue';
    import products from '../products.json';

    export default {
        components: {
            ProductCardComponent
        },
        data (){
            return {
                data: products,
                title: "Featured Products",
                description: "Summer Collection New Suit Designs"
            }
        },
        computed: {
            sortedProducts(){
                return this.data.sort((a,b) => b.stock - a.stock);
            }
        }
    }
</script>


<template>
        <section id="product1" class="section-p1">
        <h2>{{ title}}</h2>
        <p>{{ description }}</p>
        <div class="pro-container">
            <ProductCardComponent  v-for="product in sortedProducts.slice(0,4)" :key="product.id" :product="product"/>
        </div>
    </section>
</template>

<style lang="scss">
    #product1{
        text-align: center;
        select{
            margin-top: 20px;
            padding: 10px;
        }
        .pro-container{
            display: flex;
            justify-content: space-between;
            padding-top: 20px;
            flex-wrap: wrap;
        }
    }
</style>

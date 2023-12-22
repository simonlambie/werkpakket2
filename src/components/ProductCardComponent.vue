<script>
    import products from '../products.json';
  
    export default {
    data() {
        return {
            data: products
        };
    },
    props: {
        product: {
            type: Object,
            required: true
        }
    },
}
</script>

<template>
    <div class="pro">
        <RouterLink :to="{ name: 'detailpage', params: { productId: product.id} }"><img :src="product.thumbnail" alt="suit1"></RouterLink>
            <div class="description">
                <h5>{{ product.title }}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>€{{ product.price }}</h4>
            </div>
    </div>
</template>

<style lang="scss">
$maincolor: #171717;
        .pro{
            width: 23%;
            min-width: 250px;
            padding: 10px 12px;
            border: 1px solid $maincolor;
            margin: 15px 0;
            img{
                width: 100%;
            }
            .description{
                text-align: start;
                padding: 10px 0;
                position: relative;
                h5{
                    padding-top: 7px;
                    color: $maincolor;
                    font-size: 17px;
                }
                i{
                    font-size: 12px;
                }
                h4{
                    padding-top: 7px;
                    font-size: 15px;
                    font-weight: 700;
                    position: absolute;
                    bottom: 10px;
                    right: 10px;
                }
            }
        }
</style>
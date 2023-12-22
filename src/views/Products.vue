<script>
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import FooterComponent from '@/components/FooterComponent.vue';
    import ProductCardComponent from '@/components/ProductCardComponent.vue';
    import products from '@/products.json';

    export default {
        components: {
            HeaderComponent,
            FooterComponent,
            ProductCardComponent,
        },
        data (){
            return {
                products: products,
                itemsPerPage: 8,
                currentPage: 1,
            }
        },
        computed: {
            totalPages() {
                return Math.ceil(this.products.length / this.itemsPerPage);
            },
            displayedProducts() {
                const start = (this.currentPage - 1) * this.itemsPerPage;
                const end = start + this.itemsPerPage;
                return this.products.slice(start, end);
            },
        },
        methods: {
            changePage(amount) {
                this.currentPage += amount;
            },
        }
     }
</script>

<template>
    <HeaderComponent/>
    <div id="product1" class="section-p1">
        <h2>All Products</h2>
        <p>Summer Collection New Suit Designs</p>
        <div class="section-p1">
            <h4>Filter by:</h4>
            <select>
                <option>Size</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
            </select>
            <select>
                <option>Color</option>
                <option>Gray</option>
                <option>Navy</option>
                <option>Black</option>
                <option>Brown</option>
            </select>
        </div>
    </div>
    <div class="pro-container">
        <ProductCardComponent v-for="product in displayedProducts" :key="product.id" :product="product"/>
    </div>
    <div class="pagination">
            <button @click="changePage(-1)" :disabled="currentPage === 1">Previous</button>
            <span>{{ currentPage }}</span>
            <button @click="changePage(1)" :disabled="currentPage === totalPages">Next</button>
        </div>
    <FooterComponent/>
</template>

<style lang="scss">
$maincolor: #171717;
    .pro-container{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .pagination {
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: center;
        button{
            margin: 0 5px;
            padding: 6px;
        }
    }
</style>

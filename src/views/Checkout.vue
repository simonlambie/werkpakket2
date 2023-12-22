<script>
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import FooterComponent from '@/components/FooterComponent.vue';

    export default{
        components:{
            HeaderComponent,
            FooterComponent,
        }
    }
</script>

<template>
    <HeaderComponent/>
    <div class="section-p1">
        <h2>Checkout Page</h2>
        <h3>Address data</h3>
        <form action="" id="address-form">
            <label for="address">Address: </label>
            <input type="text" id="address" name="address" required>
            <label for="city">City: </label>
            <input type="text" id="city" name="city" required>
            <label for="zipcode">Zip code: </label>
            <input type="number" id="zipcode" name="zipcode" required>
            <label>
                <input type="checkbox" id="different-billing" name="differentBilling">
                Different address for billing
            </label>
        </form>
    </div>
    <div class="section-p1">
        <button>
            <RouterLink to="/confirmation">Confirm your order</RouterLink>       
        </button>
    </div>
    <FooterComponent/>
</template>

<style lang="scss">

</style>
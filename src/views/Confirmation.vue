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
            <h3>Your order has been confirmed!</h3>
        </div>
    <FooterComponent/>
</template>

<style lang="scss">

</style>
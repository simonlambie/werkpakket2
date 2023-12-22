<script>
    import HeaderComponent from '@/components/HeaderComponent.vue';
    import FooterComponent from '@/components/FooterComponent.vue';
    import PopularProductsComponent from '@/components/PopularProductsComponent.vue';
    import HeroComponent from '@/components/HeroComponent.vue';

    export default {
        components: {
            HeaderComponent,
            FooterComponent,
            PopularProductsComponent,
            HeroComponent
        },
    }
</script>

<template>
    <HeaderComponent/>
    <HeroComponent/>
    <PopularProductsComponent/>
    <FooterComponent/>
</template>

<style lang="scss">

</style>

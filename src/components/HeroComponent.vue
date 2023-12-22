<script>
    export default {
        data (){
            return{
                
            }
        }
    }
</script>

<template>
    <section id="hero">
        <div>
            <h4>Trade-in-Offer</h4>
            <h2>Super value deals</h2>
            <h1>On all suits</h1>
            <p>The best suit company in Belgium!</p>
            <button><RouterLink to="/shop">Shop Now</RouterLink></button>
        </div>
    </section>
</template>

<style lang="scss">
    #hero {
    background-image: url("../assets/hero3.jpg");
    height: 90vh;
    width: 100%;
    background-size: cover;
    justify-content: center;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    div {
        padding: 20px 80px;
        background-color: white;
        h4{
            padding-bottom: 15px;
        }
        p{
            padding-bottom: 15px;
        }
        button {
            padding: 4px;
            background-color: white;
            border: 2px solid #171717;
            cursor: pointer;
            a{
                color: #171717;
                text-decoration: none;
            }
        }
    }
}
</style>
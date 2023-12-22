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
    <section class="center">
        <h1>Login</h1>
        <form method="post">
            <div class="text_field">
                <input type="text" required placeholder="Username">
            </div>
            <div class="text_field">
                <input type="password" required placeholder="Password">
            </div>
            <div class="pass">
                <p>Forgot password?</p>
            </div>
            <input type="submit" value="Login">
            <div class="signup_link">
                <p>Not a member? <a href="#">Sign up</a></p>
            </div>
        </form>
    </section>
    <FooterComponent/>
</template>

<style lang="scss">
$maincolor: #171717;
.center{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 200px;
    padding-bottom: 200px;
    h1{
        padding: 0 0 20px 0;
    }
    form{
        padding: 0 40px;
        box-sizing: border-box;
        .text_field{
            position: relative;
            border-bottom: 2px solid $maincolor;
            margin: 30px 0;
            input{
                width: 100%;
                padding: 0 5px;
                height: 40px;
                font-size: 16px;
                border: none;
                background: none;
                outline: none;
                &:focus ~ label, :valid ~ label{
                    top: -5px;
                }
            }
            label{
                position: absolute;
                top: 50%;
                left: 5px;
                color: #b7b7b7;
                transform: translateY(-50%);
                font-size: 16px;
                pointer-events: none;
            }
            span{
                &::before{
                    content: '';
                    position: absolute;
                    top: 40px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                }
            }
        }
        .pass{
            margin: -5px 0 20px 5px;
            color: #b7b7b7;
            font-size: 14px;
            cursor: pointer;
            text-align: center;
            &:hover{
                text-decoration: underline;
            }
        }
        input[type="submit"]{
            width: 100%;
            height: 40px;
            border: 1px solid;
            background-color: $maincolor;
            color: white;
            font-size: 15px;
            cursor: pointer;
        }
        .signup_link{
            text-align: center;
            margin-top: 10px;
            font-size: 14px;
            color: #b7b7b7;
            a{
                color: $maincolor;
                text-decoration: none;
            }
        }
    }
}

</style>
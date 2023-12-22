<script>

</script>

<template>
    <footer class="section-p1">
        <div class="col">
            <img src="../assets/logo.png" alt="logo">
            <h4>Contact</h4>
            <p><strong>Address: </strong>123 Willow Street, Maplewood, Belgium</p>
            <p><strong>Phone: </strong>+01 2222 365</p>
            <p><strong>Hours: </strong>10:00 - 18:00. Mon - Sat</p>
            <div class="follow">
                <h4>Follow us</h4>
                <div class="icon">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-pinterest-p"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; 2023, pulse - Werkpakket 2 - Simon Lambié</p>
        </div>
    </footer>
</template>

<style lang="scss">
    .section-p1{
        padding: 40px 80px;
    }
    footer{
    background-color: #efefef;
    .col{
        img{
            width: 100px;
            margin-bottom: 30px;
        }
        h4{
            font-size: 19px;
            padding-bottom: 20px;
        }
        p{
            font-size: 13px;
            margin: 0 0 8px 0;
        }
        .follow{
            margin-top: 20px;
            i{
                padding-right: 4px;
                padding-bottom: 20px;
                cursor: pointer;
            }
        }
    }
    .copyright{
        width: 100%;
        text-align: center;
        font-size: 9px;
    }
}
</style>
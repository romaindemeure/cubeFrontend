<template>
    <div class="foodtruck">

            <div class="block">

                <div class="blockBody">
                    <h1 class="textFirst">Acquérir</h1>
                    <h2 class="textSecond">nos champagnes pétillant</h2>
                    <p class="textDescription">
                        Le dom pérignon, mariage subtil d'élégance et de plaisir. Il est le reflet de l'attachement des œnologues à la tradition de qualité de la Maison et illustre leur savoir-faire pour exprimer, avec constance au fil des années, la richesse et la finesse de son style.
                    </p>
                    <h3 class="textSeeMore">voir plus</h3>
                </div>

                <div class="blockImg">
                    <img class="img" src="/images/bouteilleThree.jpg" alt="">
                </div>

        </div>
    </div>
</template>


<script setup>

</script>

<style scoped>
.foodtruck {
    padding: 0 20px;
    margin: 0 auto;
    max-width: 1100px;
}

.blockBody {
    padding: 10px;
    margin-top: 20px;
}
.textFirst {
    font-family: 'Pinyon Script', serif;
    color: #ac1e44;
    font-weight: 400;
    font-size: 2.5rem;
    margin: 0;
    line-height: 50px;
}
.textFirst::before {
    content: '';
    width: 24px;
    height: 2px;
    background: #ac1e44;
    display: block;
    margin-bottom: 1rem;
}
.textSecond {
    font-weight: 700;
    font-size: 1.75rem;
    margin: 0;
    line-height: 35px;
    color: #272727;
    text-transform: uppercase;
}

.textDescription {
    color: #6F6F6F;
    line-height: 26px;
}

.textSeeMore {
    color: #ac1e44;
    line-height: 26px;
    font-weight: 400;
}

.textSeeMore::after {
    content: ' >';
}

.textSeeMore:hover {
    text-decoration: underline;
    cursor: pointer;
}

.blockImg {
    max-width: 350px;
    margin: 0 auto;
    border: 1px solid #ac1e44;
    border-radius: 3px;
}
.blockImg .img{
    display: block;
    border-radius: 3px;
}

@media only screen and (min-width: 850px) {
    .block {
        margin: 150px 0;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }
    .block .blockImg {
        width: 350px;
        flex: none;
        margin-left: 30px;
        border: none;
        position: relative;
    }

    .block .blockBody {
        margin-left: 94px;
    }


    .block .blockImg::before {
        content: '';
        display: block;
        border: solid 1px #ac1e44;
        border-radius: 3px;
        position: absolute;
        top: -30px;
        left: -30px;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
    .blockImg img {
        position: relative;
        z-index: 1;
    }
}
</style>
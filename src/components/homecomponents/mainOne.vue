<template>
    <section class="mainSection">
        <div class="containerSmall">
            <div class="block blockLeft">

                <div class="blockBody">
                    <h1 class="textFirst">Découvrez</h1>
                    <h2 class="textSecond">Nos Vins d'Exceptions</h2>
                    <p class="textDescription">
                        Moët Rosé Impérial est l'expression la plus spontanée du style Moët & Chandon. Il se distingue par sa couleur radieuse, son fruité intense et son palais flamboyant.
                    </p>
                    <h3 class="textSeeMore">voir plus</h3>
                </div>

                <div class="blockImg">
                    <img class="img" src="/images/bouteilleOne.jpg" alt="">
                </div>

            </div>

            <div class="block blockRight">

                <div class="blockBody">
                    <h1 class="textFirst">Déguster</h1>
                    <h2 class="textSecond">Nos majestueux Whiskey</h2>
                    <p class="textDescription">
                        Raffiné, aromatique et boisé, long en bouche au goût franc et arrondi, le GlenMorangie révèle toute la finesse d'un grand blend écossais.
                    </p>
                    <h3 class="textSeeMore">voir plus</h3>
                </div>

                <div class="blockImg">
                    <img class="img" src="/images/bouteilleTwo.jpg" alt="">
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
    
</script>

<style scoped>
.mainSection {
    padding: 0 20px;
    max-width: 1100px;
    margin: 0 auto;
}
.block {
    margin: 20px 0;
}

.blockBody {
    padding: 10px;
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
}

@media only screen and (min-width: 850px) {
    .block {
        margin: 150px 0;
    }

    .blockLeft {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }
    .blockImg {
        border: none;
        position: relative;
    }
    .blockLeft .blockImg {
        width: 350px;
        flex: none;
        margin-left: 30px;
    }

    .blockLeft .blockBody {
        margin-left: 94px;
    }

    .blockRight {
        display: flex;
        align-items: center;
    }

    .blockRight .blockImg {
        width: 350px;
        flex: none;
        margin-right: 30px;
    }

    .blockRight .blockBody {
        margin-right: 94px;
    }

    .blockLeft .blockImg::before {
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

    .blockRight .blockImg::before {
        content: '';
        display: block;
        border: solid 1px #ac1e44;
        border-radius: 3px;
        position: absolute;
        top: -30px;
        right: -30px;
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
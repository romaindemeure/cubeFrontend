<template>
    <div class="container">

        <div class="blockFirst">
            <h1 class="textFirst">Découvez</h1>
            <h2 class="textSecond">LES CHAMPAGNES NEGOSUD</h2>
            <p class="textDescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aut sint tempora animi sequi repellat modi.
            </p>
        </div>
        <!-- BLOC DE GAUCHE -->
        <div class="blockBody blockLeft">

            <div class="blockTexte">
                <h2 class="textSecond">Nos Vins</h2>
                <p class="textDescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aut sint tempora animi sequi repellat modi.
                </p>
                <ul class="containerListe">
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                </ul>
                <h3 class="price">10.50€</h3>
            </div>

        
            <div class="blockImg">
                <img class="img" src="https://via.placeholder.com/400x400" alt="">
            </div>

        </div>

        <!-- BLOC DE DROITE -->
        <div class="blockBody blockRight">

            <div class="blockTexte">
                <h2 class="textSecond">Nos Whisky</h2>
                <p class="textDescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aut sint tempora animi sequi repellat modi.
                </p>
                <ul class="containerListe">
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                </ul>
                <h3 class="price">10.50€</h3>
            </div>

        
            <div class="blockImg">
                <img class="img" src="https://via.placeholder.com/400x400" alt="">
            </div>
        </div>

        <!-- BLOC DE GAUCHE -->
        <div class="blockBody blockLeft">

            <div class="blockTexte">
                <h2 class="textSecond">Nos Vins</h2>
                <p class="textDescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aut sint tempora animi sequi repellat modi.
                </p>
                <ul class="containerListe">
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                </ul>
                <h3 class="price">10.50€</h3>
            </div>

        
            <div class="blockImg">
                <img class="img" src="https://via.placeholder.com/400x400" alt="">
            </div>

        </div>

        <!-- BLOC DE DROITE -->
        <div class="blockBody blockRight">

            <div class="blockTexte">
                <h2 class="textSecond">Nos Whisky</h2>
                <p class="textDescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aut sint tempora animi sequi repellat modi.
                </p>
                <ul class="containerListe">
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                    <li>Lorem ipsum dolor sit amet consectetur</li>
                </ul>
                <h3 class="price">10.50€</h3>
            </div>

        
            <div class="blockImg">
                <img class="img" src="https://via.placeholder.com/400x400" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container {
    padding: 0 20px;
    max-width: 1100px;
    margin: 0 auto;
}
.blockFirst {
    text-align: center;
    margin: 20px 0;
}
.blockBody {
    margin-top: 60px;
    padding: 10px;
}
.textFirst {
    font-family: 'Pinyon Script', serif;
    color: #ac1e44;
    font-weight: 400;
    font-size: 2.5rem;
    margin: 0;
    line-height: 50px;
    margin-top: 20px;
}
.textFirst::before {
    content: '';
    width: 24px;
    height: 2px;
    background: #ac1e44;
    display: block;
    margin: auto;
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
.containerListe {
    padding: 0;
    padding-left: 20px;
}
.price {
    font-family: 'Pinyon Script', serif;
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 50px;
    color: #ac1e44;
    letter-spacing: -5px;
    margin: 0;
}
.blockImg {
    max-width: 350px;
    margin: 0 auto;
    border: 1px solid #ac1e44;
    border-radius: 3px;
}
.blockImg .img{
    display: block;
    z-index: 1;
}

@media only screen and (min-width: 800px) {
    .blockBody {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }
    .blockTexte {
        width: 50%;
    }
    .blockLeft .blockImg {
        margin: auto;
        width: 100%;
        border: 0;
        position: relative;
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
    .blockRight .blockImg {
        margin: auto;
        width: 100%;
        border: 0;
        position: relative;
    }
    .blockRight {
        flex-direction: row;
        margin: 60px 0;
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
}


@media only screen and (min-width: 1160px) {
    .blockBody {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }
    .blockTexte {
        width: 50%;
    }
    .blockLeft .blockImg {
        margin: 0;
        margin-right: 160px;
        width: 100%;
        border: 0;
        position: relative;
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
    .blockRight .blockImg {
        margin: 0;
        margin-left: 160px;
        width: 100%;
        border: 0;
        position: relative;
    }
    .blockRight {
        flex-direction: row;
        margin: 60px 0;
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
}
</style>
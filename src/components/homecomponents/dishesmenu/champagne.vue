<template>
<div class="container">
    <div class="menuSummary">

        <div class="menuSummaryItem">

            <img class="menuSummaryImg" src="/images/DidhesChampagne/dishesChampagneOne.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">bouteille de champagne krug grande cuvée 75 cl coffret</h3>
                <p class="menuSummaryText"> mariage subtil d'élégance et de plaisir. Il est le reflet de l'attachement des œnologues à la tradition de qualité de la Maison et illustre la richesse et la finesse de son style.</p>
                <div class="menuSummaryPrice">287 , 20 €</div>
            </div>

        </div>

        <div class="menuSummaryItem menuItemRight">

                <img class="menuSummaryImg" src="/images/DidhesChampagne/dishesChampagneTwo.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">bouteille de champagne billecart salmon rosé 75cl</h3>
                <p class="menuSummaryText">Le Billecart Rosé est un champagne généreux, né pour le plaisir du regard, du nez et du palais, auxquels il offre une palette de couleurs et d'arômes</p>
                <div class="menuSummaryPrice">76 , 10 €</div>
            </div>

        </div>

        <div class="menuSummaryItem menuSummaryLast">

            <img class="menuSummaryImg" src="/images/DidhesChampagne/dishesChampagneThree.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">bouteille champagne dom perignon blanc 75 cl coffret</h3>
                <p class="menuSummaryText">Il illustre parfaitement la magie de l'assemblage: marier les vins de différents terroirs et différents cépages pour en révéler la richesse dans des harmonies de goûts et de couleurs.</p>
                <div class="menuSummaryPrice">269 , 60 €</div>
            </div>

        </div>
        
        <div class="menuSummaryItem menuItemRight menuSummaryLast">

            <img class="menuSummaryImg" src="/images/DidhesChampagne/dishesChampagneFour.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">bouteille de champagne mercier rosé 75cl</h3>
                <p class="menuSummaryText">Mercier Rosé Impérial est l'expression la plus spontanée du style Moët & Chandon. Il se distingue par sa couleur radieuse, son fruité intense et son palais flamboyant..</p>
                <div class="menuSummaryPrice">35 , 20 €</div>
            </div>

        </div>

    </div>
</div>
</template>

<script setup>
</script>

<style scoped>
    .container {
        padding-top: 40px;
    }
    .menuSummaryItem {
        padding: 0px 20px;
        margin-bottom: 40px;
    }

    .menuSummaryTitle {
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 23px;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-top: 20px;
    }

    .menuSummaryText {
        font-weight: 400;
        line-height: 24px;
        color: #6F6F6F;
    }

    .menuSummaryPrice {
        font-family: 'Pinyon Script', serif;
        font-weight: 400;
        font-size: 2.5rem;
        line-height: 50px;
        color: #ac1e44;
        letter-spacing: -5px;
    }

    .menuSummaryImg {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 2px;
    }

    @media only screen and (min-width: 500px) {

        .menuSummaryItem {
            display: flex;
            justify-content: center;
        }
        .menuSummaryflex {
            display: flex;
            flex-direction: column;
        }

        .menuSummaryImg {
            margin-left: 0;
            margin-right: 0;
            height: 100%;
            width: auto;
            margin: 0 20px;
        }

        .menuSummaryTitle {
            margin: 0;
        }
    }

    @media only screen and (min-width: 1000px) {

        .container {
            max-width: 1450px;
            margin: 0 auto;
        }
        .menuSummary {
            display: flex;
            flex-wrap: wrap;
            padding: 15px;
        }
        .menuSummaryItem {
            width: 50%;
            padding: 0;
            padding-bottom: 50px;
        }

        .menuSummaryImg {
            width: 160px;
            height: 160px;
        }

        .menuSummaryflex {
            margin: 0 5px;
            margin-right: 100px;
        }

        .menuItemRight {
            flex-direction: row-reverse;
        }

        .menuItemRight .menuSummaryflex {
            text-align: right;
        }

        .menuItemRight .menuSummaryflex {
            margin-left: 100px;
            margin-right: 0;
        }
        .menuSummaryLast {
            padding: 0;
            margin: 0;
        }
    }
</style>
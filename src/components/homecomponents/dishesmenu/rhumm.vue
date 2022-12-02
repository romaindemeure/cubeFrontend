<template>
<div class="container">
    <div class="menuSummary">

        <div class="menuSummaryItem">

            <img class="menuSummaryImg" src="/images/DishesRhum/dishesRhumOne.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">rhum centenario 25ans 40° 70cl</h3>
                <p class="menuSummaryText">Centenario Gran Reserva 25 ans est un rhum du Costa Rica, délicat et subtil. Il est né grâce à l'alliance d'une distillation de mélasse en alambic et de miel de canne en alambic à colonne.</p>
                <div class="menuSummaryPrice">79 , 50 €</div>
            </div>

        </div>

        <div class="menuSummaryItem menuItemRight">

                <img class="menuSummaryImg" src="/images/DishesRhum/dishesRhumTwo.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">ron zacapa 23ans (40° - 70cl)</h3>
                <p class="menuSummaryText">Ron Zacapa 23ans (40° - 70cl) - Bouteille de 70 cl de Rhum "vieux" Alcool 40 °. Un rhum vieux de guatemala vieillis dans 3 types de futs différents</p>
                <div class="menuSummaryPrice">60 , 00 €</div>
            </div>

        </div>

        <div class="menuSummaryItem menuSummaryLast">

            <img class="menuSummaryImg" src="/images/DishesRhum/dishesRhumThree.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">dictador 12ans 70cl 40°</h3>
                <p class="menuSummaryText">Comme le dit son nom, le rhum Dictador 12 ans impose son style et son caractère et présente des notes caramélisées, boisées et fruitées. De Moscou à Miami, il a été récompensé à plusieurs reprises.</p>
                <div class="menuSummaryPrice">55 , 10 €</div>
            </div>

        </div>
        
        <div class="menuSummaryItem menuItemRight menuSummaryLast">

            <img class="menuSummaryImg" src="/images/DishesRhum/dishesRhumFour.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">mount gay black barrel 43° 70cl</h3>
                <p class="menuSummaryText">Un rhum sec de mélasse distillé en alambic à colonne et à repasse, dont les distillats ont été élevés séparément de 3 à 7 ans. Un élevage de 6 mois en fûts de bourbon calcinés qui renforce la puisance aromatique.</p>
                <div class="menuSummaryPrice">39 , 10 €</div>
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
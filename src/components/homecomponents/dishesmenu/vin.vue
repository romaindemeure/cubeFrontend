<template>
<div class="container">
    <div class="menuSummary">
        
        <div class="menuSummaryItem">

            <img class="menuSummaryImg" src="/images/dishesVin/dishesVinOne.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">BOUTEILLE DE BOURG CH.HAUT-MACO</h3>
                <p class="menuSummaryText">Ch.haut-maco offre un Rouge, remarquable et délicat, aux notes d'amertume, de rose et de délicatesse.</p>
                <div class="menuSummaryPrice">52 , 00 €</div>
            </div>

        </div>

        <div class="menuSummaryItem menuItemRight">

                <img class="menuSummaryImg" src="/images/dishesVin/dishesVinTwo.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">BOUTEILLE DE CHAPOUTIER CONDRIEU </h3>
                <p class="menuSummaryText">Ch.haut-maco offre un Blanc, remarquable et somptueux, aux notes d'amertume et de fruits.</p>
                <div class="menuSummaryPrice">44 , 20 €</div>
            </div>

        </div>

        <div class="menuSummaryItem menuSummaryLast">

            <img class="menuSummaryImg" src="/images/dishesVin/dishesVinThree.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">BOUTEILLE DE VIN BRIMONCOURT</h3>
                <p class="menuSummaryText">Brimoncourt offre un champagne rosé, remarquable et délicat, aux notes d'agrumes, de rose et de fruits.</p>
                <div class="menuSummaryPrice">40 , 70 €</div>
            </div>

        </div>
        <div class="menuSummaryItem menuItemRight menuSummaryLast">

            <img class="menuSummaryImg" src="/images/dishesVin/dishesVinFour.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">Vin gevrey chambertin rge faiveley</h3>
                <p class="menuSummaryText">En provenance de Bourgogne, Gevrey Chambertin Vieilles Vigne est un vin rouge équilibré et très aromatique, idéal pour accompagner vos mets à base de viandes.</p>
                <div class="menuSummaryPrice">44 , 70 €</div>
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
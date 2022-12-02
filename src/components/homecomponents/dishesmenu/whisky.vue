<template>
<div class="container">
    <div class="menuSummary">

        <div class="menuSummaryItem">

            <img class="menuSummaryImg" src="/images/DishesWhisky/dishesWhiskyOne.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">Whisky ecossais caol ila 18 ans 43° 70cl</h3>
                <p class="menuSummaryText">De pure tradition écossaise, le blended scotch whisky Clan Campbell est distillé, vieilli et assemblé dans les Highlands. Amené à maturation dans des fûts de chêne au minimum trois ans</p>
                <div class="menuSummaryPrice">167 , 40 €</div>
            </div>

        </div>

        <div class="menuSummaryItem menuItemRight">

                <img class="menuSummaryImg" src="/images/DishesWhisky/dishesWhiskyTwo.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">Octomore scott. barley pk 57° 70cl</h3>
                <p class="menuSummaryText"> cette Octomore a été confié aux mains expertes du maître de Brian Kinsman. Il assemble avec soin plus de 25 whiskies de malt et de grain les plus raffinés</p>
                <div class="menuSummaryPrice">163 , 50 €</div>
            </div>

        </div>

        <div class="menuSummaryItem menuSummaryLast">

            <img class="menuSummaryImg" src="/images/DishesWhisky/dishesWhiskyThree.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">scotch chivas regal 12 ans 70cl 40°</h3>
                <p class="menuSummaryText">Le whisky Chivas régal 12ans est le résultat d'un savant mélange de whiskies de malt et de grain. Le Scotch Chivas REGAL laisse apparaître un caractère moelleux et rond</p>
                <div class="menuSummaryPrice">43 , 90 €</div>
            </div>

        </div>
        
        <div class="menuSummaryItem menuItemRight menuSummaryLast">

            <img class="menuSummaryImg" src="/images/DishesWhisky/dishesWhiskyFour.jpg" alt="">

            <div class="menuSummaryflex">
                <h3 class="menuSummaryTitle">whisky d'irlande redbreast 12 ans (40° - 70cl.)</h3>
                <p class="menuSummaryText">Ballantine's 7 ans Bourbon Finish est un blended Scotch unique, élaboré à partir d'une sélection de whiskies irlandais vieillis pendant 7 années puis soigneusement assemblés</p>
                <div class="menuSummaryPrice">51 , 90 €</div>
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
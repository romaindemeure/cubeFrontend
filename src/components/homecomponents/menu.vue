<template>
    <section class="mainSection">
        <div class="block blockCentered">

            <div class="blockBody">
                <h1 class="textFirst">Menu</h1>
                <h2 class="textSecond">Spécialité gustatif</h2>
                <p class="textDescription">
                    Nous vous avons sélectionnées aux quatres coins de la France nos meilleurs Vin, Whisky, Rhum et Champagne du moment
                </p>
            </div>
        </div>
        <nav class="dishesMenu">
            <router-link to="/" class="disheLink">Vin</router-link>
            <router-link to="/homewkisky" class="disheLink">Whisky</router-link>
            <router-link to="/homerhum" class="disheLink">Rhum</router-link>
            <!-- <router-link to="/homesushi" class="disheLink">Sushi</router-link> -->
            <router-link to="/homechampagne" class="disheLink">Champagne</router-link>
        </nav>
    </section>
    <router-view></router-view>
</template>

<script setup>

</script>

<style scoped>
.mainSection {
    padding: 0 20px;
    max-width: 1100px;
    margin: 0 auto;
}
.blockCentered {
    text-align: center;
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
}
.blockBody {
    margin-top: 50px;
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

.dishesMenu {
    display: block;
    font-weight: 600;
    color: #383838;
    text-align: center;
}

.dishesMenu .disheLink {
    display: inline-block;
    margin: 0 20px;
    text-transform: uppercase;
    position: relative;
}

.dishesMenu .disheLink::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    height: 1px;
    opacity: 0;
    background: #ac1e44;
    transition: .3s;
}

.dishesMenu .disheLink:hover::after {
    bottom: 0;
    opacity: 1;
    color: black;
}

.dishesMenu .disheLink:hover {
    color: black;
}
</style>
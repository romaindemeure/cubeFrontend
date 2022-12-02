<template>
    <div class="localisation">
        <div class="mapItem">
            <h1 class="mapTitle">Ou nous trouver ?</h1>
            <h2 class="mapName">Negosud Gascogne</h2>
            <p class="mapLocalisation">44 Place du village, 32360 Gascogne</p>
        </div>

        <div class="iframe">
            <iframe class="iframeMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11158.780208912076!2d4.436765173657177!3d45.63686204968095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4571a83d02949%3A0x4d553184a6f9c5bd!2sGascogne%2C%2069590%20Saint-Symphorien-sur-Coise!5e0!3m2!1sfr!2sfr!4v1670007978439!5m2!1sfr!2sfr" width="600" height="450" loading="lazy" style="border: 0;" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.localisation {
    margin: 0 0;
    margin-top: 50px;
}

.mapItem {
    padding: 0 30px;
    text-align: center;
}
.mapTitle {
    font-family: 'Pinyon Script', serif;
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 50px;
    color: #ac1e44;
    margin: 0;
}
.mapTitle::before {
    content: '';
    width: 24px;
    height: 2px;
    background: #ac1e44;
    display: block;
    margin: auto;
    margin-bottom: 1rem;
}
.mapName {
    font-weight: 700;
    font-size: 1.75rem;
    margin: 0;
    line-height: 35px;
    color: #272727;
    text-transform: uppercase;
}

.mapLocalisation{
    font-weight: 400;
    line-height: 24px;
    color: #6F6F6F;
}
.iframeMap {
    width: 100%;
    height: 100%;
    display: block;
    z-index: 1;
    position: relative;
}
.iframe {
    position: relative;
    width: 90%;
    height: 300px;
    margin: auto;
    margin-top: 2rem;
    z-index: 1;
}
</style>
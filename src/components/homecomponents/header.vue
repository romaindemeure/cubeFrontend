<template>

    <header class="header">

        <div class="topbar">

            <div class="logo">
                <router-link to="/" class="logoLink">Negosud Gascogne</router-link>
            </div>

            <nav class="menu">
                <router-link to="/vin" class="menuItem">Vin</router-link>
                <router-link to="/whisky" class="menuItem">Whisky</router-link>
                <router-link to="/rhum" class="menuItem">Rhum</router-link>
                <router-link to="/champagne" class="menuItem">Champagne</router-link>
                <!-- <router-link to="/componentstest" class="menuItem">componentstest</router-link> -->
                <!-- <router-link to="/foodtruck" class="menuItem">FoodTruck</router-link> -->
                <router-link to="/blog" class="menuItem">Blog</router-link>
                <router-link to="/connexion" class="menuItem menuButton">Connexion</router-link>
            </nav>

        </div>

        <div class="baseline">
            <div class="baselineWelcome">Bienvenue</div>
            <strong class="baselineName">Negosud Gascogne</strong>
            <div class="baselineSlogan">Spécialité maison</div>
        </div>

    </header>

</template>


<script setup>

</script>

<style scoped>
.header {
    background: 
        linear-gradient(180deg, rgba(0, 0, 0, 0.9),rgba(54, 54, 54, 0.5) 60%, rgba(28, 28, 28, 0.4)),
        url(/images/background.jpg) center center / cover no-repeat;
        color: #FFF;
}

.topbar {
    font-size: 0.875rem;
    text-transform: uppercase;
    text-align: center;
    padding: 15px 30px;
    height: 50px;
}
.topbar a:hover {
    color: #ac1e44;
}

.header .topbar .logo {
    margin-bottom: 20px;
}

.menuItem {
    display: inline-block;
    padding: 0 15px;
}
.menu .menuButton {
    border: solid 1px #ac1e44;
    border-radius: 3px;
    padding: 5px 20px;
    transition-property: color, background-color;
    margin-top: 5px;
}
.menu .menuButton:hover {
    color: #FFF;
    background: #ac1e44;
}
.baseline {
    padding: 50px 0 70px 0;
    text-align: center;
}

.baseline .baselineWelcome {
    font-size: 3.5rem;
    font-family: 'Pinyon Script', serif;
    color: #ac1e44;
    font-weight: 400;
    line-height: 1;
}
.baseline .baselineName {
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 4px;
    color: #FFF;
    line-height: 1;
}

.baseline .baselineSlogan {
    font-size: 2rem;
    color: #FFF;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-weight: 300;
}

@media only screen and (min-width: 900px) {
    html {
        font-size: 16px;
    }
    .header .topbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1150px;
        margin: 0 auto;
    }
    .header .topbar .logo {
        margin-bottom: 0;
    }
    .baseline {
        padding: 120px 0 230px;
    }
    .baseline .baselineSlogan {
        font-size: 1.5rem;
        line-height: 3,125rem;
    }

    .baseline .baselineName {
        font-size: 4.375rem;
        letter-spacing: 11px;
        line-height: 5.5rem;
        letter-spacing: 12px;
    }

    .baseline .baselineWelcome {
        font-size: 3.75rem;
        font-weight: 600;
        line-height: 1,875rem;
        letter-spacing: 4px;
    }
    .menu .menuButton {
        border: solid 1px #ac1e44;
        padding: 10px 40px;
        margin-left: 20px;
    }       
}
</style>
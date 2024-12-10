<script>
import '../app.css'
import { page } from '$app/stores';
import { onMount } from 'svelte';
const { children } = $props()

// Grid (not needed in production)
let viewGrid = $state(false)
const gridColumnsDesktop = 16
const gridColumnsMobile = 4
function handleKey({key}) {if (key === 'G') {viewGrid = !viewGrid}}
let showBanner = $state()

onMount(() => {
  const cookieConsent = localStorage.getItem('cookieConsent');
  if (cookieConsent === 'accepted') {
    showBanner = false;
  } else {
    showBanner = true;
  }
})

// Functions
function acceptCookies() {
  localStorage.setItem('cookieConsent', 'accepted');
  showBanner = false;
}
</script>

<svelte:window onkeyup={handleKey}></svelte:window>

{#if viewGrid}
<div id="layout"
      style="grid-template-columns:repeat({innerWidth > 800 ? gridColumnsDesktop : gridColumnsMobile}, 1fr);pointer-events:none;display: grid;position:fixed; z-index:999;width: -moz-available;width: -webkit-fill-available;height: -moz-available;height: -webkit-fill-available;margin:0 var(--margin);gap:var(--gutter);opacity:.2;">
  {#each Array(innerWidth > 800 ? gridColumnsDesktop : gridColumnsMobile) as _, i}
    <div style="background-color:red"></div>
  {/each}
</div>
{/if}

{#if $page.url.hostname == 'hanami.soulfoodfarms.it'}
  <div class="temporary-container">
    <div style="top: -1rem;position:relative">
      <p class="temporary-title">HanaMi</p>
      <p>Fare, conoscere e abitare<br>la transizione ecologica</p>
    </div>
    <p class="temporary-coming-soon">COMING SOON</p>
  </div>
{:else}

<header class="bg-forest">
  <h1 class="logo text-m">
    <a href="/" aria-label="HanaMi">HanaMi</a>
  </h1>
  <nav aria-label="Navigazione principale">
    <ul>
      <li class="menu-item"><a class="hover-green" class:active-green={$page.url.hash === '#about'} href="/#about" aria-label="Scopri di più su di noi">About</a></li>
      <li class="menu-item"><a class="hover-green" class:active-green={$page.url.hash === '#living-lab'} href="/#living-lab" aria-label="Esplora i nostri corsi">Living lab</a></li>
      <li class="menu-item"><a class="hover-green" class:active-green={$page.url.hash === '#iscrizioni'} href="/#iscrizioni" aria-label="Iscriviti ai nostri corsi">Iscrizioni</a></li>
      <li class="menu-item"><a class="hover-green" class:active-green={$page.url.hash === '#info-e-contatti'} href="/#info-e-contatti" aria-label="Contattaci e trova maggiori informazioni">Info & contatti</a></li>
    </ul>
  </nav>
</header>

<main>
  {@render children()}
</main>

<footer>
  <p>HanaMi è realizzato nell’ambito del programma <a class="hover-green" href="https://www.fondazionecomunitamilano.org/progetti/lacittadeigiovani-milano/" target="_blank" rel="noopener noreferrer">La città dei giovani</a></p>
  <div>
    <p>© HanaMi {new Date().getFullYear()}</p>
    <p><a class="hover-green" href="/privacy">Privacy Policy</a></p>
    <p><a class="hover-green" href="/cookies">Cookie Policy</a></p>
  </div>
</footer>
{/if}


{#if showBanner}
  <div id="cookie-banner" class="bg-forest green">
    <p>Utilizziamo solo cookie tecnici per garantirti la migliore esperienza di navigazione sul nostro sito. Questi cookie sono necessari per il funzionamento del sito e non richiedono il tuo consenso.  Per saperne di più, consulta la nostra <a href="cookies" class="white hover-green">Cookie Policy</a></p>
    <button class="btn" onclick={acceptCookies}>Ok, ho capito</button>
  </div>
{/if}

<style>
.temporary-container {
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100vw;
  width:100svw;
  height:100vh;
  height:100svh;
  background-color:#184B46;
  background-image:url(/img/bg-desktop.webp);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-size:2rem;
  text-align:center;
}
.temporary-title {
  font-family:Kolonia, serif;
  font-size:4rem;
  margin-bottom:1.5rem;
}
.temporary-coming-soon {
  position: fixed;
  bottom:4rem;
}
@media screen and (max-width: 900px) {
  .temporary-container {
    background-image:url(/img/bg-mobile.webp);
    font-size:1.5rem;
  }
  .temporary-title {
    font-size:3rem;
  }
  .temporary-coming-soon {
    position: fixed;
    bottom:8rem;
  }
}


header {
  display: flex;
  padding: var(--margin);
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--forest);
  height: var(--headerHeight);
  z-index: 2;
}
.logo {
  font-size: 1.3333rem;
}
nav ul {
  display: flex;
  list-style: none;
  gap: 2.2rem;
  text-transform: uppercase;
}
footer {
  display: flex;
  justify-content: space-between;
  padding: calc(var(--margin)*1.5) var(--margin) calc(var(--margin)*1.5);
}
footer div {
  display: flex;
  gap: 2.2rem;
}

/* Cookies */
#cookie-banner {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: var(--margin);
  padding: var(--margin);
  max-width: 650px;
  height: auto;
  z-index: 3;
  border: solid 1px var(--white);
  font-size: .8rem;
}
#cookie-banner>button {
  margin-top: 1rem;
}
.btn {
  padding: .5em .8em;
  background-color: var(--white);
  color: var(--forest);
  text-transform: uppercase;
  cursor: pointer;
  border: none;
}
.btn:hover {
  background-color: var(--green);
  color: var(--forest);
}
</style>
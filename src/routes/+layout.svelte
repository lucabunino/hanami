<script>
import '../app.css'
import { page } from '$app/stores';
import { onMount } from 'svelte';
const { children } = $props()

// Import stores
import { getSection } from '$lib/stores/section.svelte.js';
const sectioner = getSection();

// Grid (not needed in production)
let viewGrid = $state(false)
const gridColumnsDesktop = 16
const gridColumnsMobile = 4
function handleKey({key}) {if (key === 'G') {viewGrid = !viewGrid}}
let showBanner = $state()
let showMenu = $state(false)

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
      style="grid-template-columns:repeat({innerWidth > 800 ? gridColumnsDesktop : gridColumnsMobile}, 1fr);pointer-events:none;display: grid;position:fixed; z-index:999;width: -moz-available;width: -webkit-fill-available;height: -moz-available;height: -webkit-fill-available;margin:0 1rem;gap:.5rem;opacity:.2;">
  {#each Array(innerWidth > 800 ? gridColumnsDesktop : gridColumnsMobile) as _, i}
    <div style="background-color:red"></div>
  {/each}
</div>
{/if}

<!-- {#if $page.url.hostname == 'hanami.soulfoodfarms.it'}
  <div class="temporary-container">
    <div style="top: -1rem;position:relative">
      <p class="temporary-title">HanaMi</p>
      <p>Fare, conoscere e abitare<br>la transizione ecologica</p>
    </div>
    <p class="temporary-coming-soon">COMING SOON</p>
  </div>
{:else} -->

<header class="bg-forest">
  <h1 class="logo text-m">
    <a href="/" aria-label="HanaMi" onclick={(e) => {showMenu = false}} onkeydown={(e) => {if (e.key === 'Enter' || e.key === ' ') {showMenu = false}}}>HanaMi</a>
  </h1>
  <nav aria-label="Navigazione principale" class:showMenu={showMenu}>
    <div role="button" tabindex="0" class="mobile-only" id="menuSwitch" onclick={(e) => {showMenu = !showMenu}} onkeydown={(e) => {if (e.key === 'Enter' || e.key === ' ') {showMenu = !showMenu}}} class:crossed={showMenu}>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <ul>
      <li class="menu-item"><a class="hover-green" onclick={(e) => {showMenu = false}} onkeydown={(e) => {if (e.key === 'Enter' || e.key === ' ') {showMenu = false}}} class:active-green={sectioner.section === 'about'} href="/#about" aria-label="Scopri di più su di noi">About</a></li>
      <li class="menu-item"><a class="hover-green" onclick={(e) => {showMenu = false}} onkeydown={(e) => {if (e.key === 'Enter' || e.key === ' ') {showMenu = false}}} class:active-green={sectioner.section === 'living-lab'} href="/#living-lab" aria-label="Esplora i nostri corsi">Living lab</a></li>
      <li class="menu-item"><a class="hover-green" onclick={(e) => {showMenu = false}} onkeydown={(e) => {if (e.key === 'Enter' || e.key === ' ') {showMenu = false}}} class:active-green={sectioner.section === 'iscrizioni'} href="/#iscrizioni" aria-label="Iscriviti ai nostri corsi">Iscrizioni</a></li>
      <li class="menu-item"><a class="hover-green" onclick={(e) => {showMenu = false}} onkeydown={(e) => {if (e.key === 'Enter' || e.key === ' ') {showMenu = false}}} class:active-green={sectioner.section === 'info-e-contatti'} href="/#info-e-contatti" aria-label="Contattaci e trova maggiori informazioni">Info & contatti</a></li>
    </ul>
  </nav>
</header>

<main>
  {@render children()}
</main>

<footer>
  <div>
    <p>© HanaMi {new Date().getFullYear()}</p>
    <p><a class="underline hover-green" href="https://www.instagram.com/hanamiscuola/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
  </div>
  <div>
    <p><a class="underline hover-green" href="/privacy">Privacy Policy</a></p>
    <p><a class="underline hover-green" href="/cookies">Cookie Policy</a></p>
  </div>
</footer>
<!-- {/if} -->


{#if showBanner}
  <div id="cookie-banner" class="bg-forest green">
    <p>Utilizziamo solo cookie tecnici per garantirti la migliore esperienza di navigazione sul nostro sito. Questi cookie sono necessari per il funzionamento del sito e non richiedono il tuo consenso.  Per saperne di più, consulta la nostra <a href="cookies" class="white underline hover-green">Cookie Policy</a></p>
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
  padding: 1rem;
  justify-content: space-between;
  align-items: flex-start;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--forest);
  height: var(--headerHeight);
  z-index: 4;
}
.logo {
  font-size: 1.3333rem;
}
#menuSwitch {
  position: absolute;
  top: 21px;
  right: 1rem;
  width: 24px;
  height: 18px;
  cursor: pointer;
}
.line {
  width: 100%;
  height: 1.5px;
  border-radius: 2px;
  background-color: var(--white);
  position: absolute;
  transition: all 0.3s ease;
  transform-origin: center;
}
.line:nth-child(1) {top: 0;}
.line:nth-child(2) {top: 50%;}
.line:nth-child(3) {top: 100%;}
#menuSwitch.crossed .line:nth-child(1) {
  transform: rotate(45deg);
  top: 50%;
}
#menuSwitch.crossed .line:nth-child(2) {
  transform: scaleX(0);
}
#menuSwitch.crossed .line:nth-child(3) {
  transform: rotate(-45deg);
  top: 50%;
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
  padding: calc(1rem*1.5) 1rem calc(1rem*1.5);
}
footer div {
  display: flex;
  gap: 2.2rem;
}
@media screen and (max-width: 900px) {
  header {
    flex-direction: column;
    height: auto;
  }
  nav {
    height: 0;
    overflow: hidden;
  }
  nav.showMenu {
    height: auto;
    margin: 4rem 0 1rem;
  }
  nav ul {
    flex-direction: column;
  }
  footer div {
    flex-direction: column;
    row-gap: .6rem;
  }
}

/* Cookies */
#cookie-banner {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1rem;
  padding: 1rem;
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
@media screen and (max-width: 900px) {
  #cookie-banner {
    font-size: .7rem;
  }
  #cookie-banner p {
    margin-bottom: 1rem;
  }
}
</style>
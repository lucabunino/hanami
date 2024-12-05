<script>
  import '../app.css'
  import { page } from '$app/stores';
  const { children } = $props()
  $inspect($page.url.hostname)
</script>

{#if $page.url.hostname == 'hanami.soulfoodforestfarms.it'}
<div style="display:flex;justify-content:center;align-items:center;width:100vw;width:100svw;height:100vh;height:100svh;background-color:#184B46">
  <div style="text-align:center">
    <p style="color:#FFF;font-family:Kolonia;font-size:2rem;margin-bottom:.5rem;">HanaMi</p>
    <p style="color:#FFF">Coming soon</p>
  </div>
</div>

{:else}

<header>
  <h1 class="logo text-m">
    <a href="/" aria-label="HanaMi">HanaMi</a>
  </h1>
  <nav aria-label="Navigazione principale">
    <ul>
      <li><a class="menu-item" href="/#about" aria-label="Scopri di più su di noi">About</a></li>
      <li><a class="menu-item" href="/#corsi" aria-label="Esplora i nostri corsi">Corsi</a></li>
      <li><a class="menu-item" href="/#iscrizioni" aria-label="Iscriviti ai nostri corsi">Iscrizioni</a></li>
      <li><a class="menu-item" href="/#info" aria-label="Contattaci e trova maggiori informazioni">Info e contatti</a></li>
    </ul>
  </nav>
</header>

<main>
  {@render children()}
</main>

<footer>
  <p>HanaMi è realizzato nell’ambito del programma <a href="https://www.fondazionecomunitamilano.org/progetti/lacittadeigiovani-milano/" target="_blank" rel="noopener noreferrer">La città dei giovani</a></p>
  <div>
    <p>© HanaMi {new Date().getFullYear()}</p>
    <p><a href="/privacy">Privacy Policy</a></p>
    <p><a href="/cookies">Cookie Policy</a></p>
  </div>
</footer>
{/if}

<style>
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
  z-index: 1;
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
  padding: var(--margin);
}
footer div {
  display: flex;
  gap: 2.2rem;
}
</style>
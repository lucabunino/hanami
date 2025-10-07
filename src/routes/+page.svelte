<script>
import { modules } from "$lib/modules";
import { onMount } from 'svelte';
let innerHeight = $state()

// Import stores
import { getSection } from '$lib/stores/section.svelte.js';
const sectioner = getSection();

export function reachedTop(element) {
  const computedStyle = window.getComputedStyle(element);
  let topValue = parseFloat(computedStyle.top);
  
  function checkPosition() {
    const rect = element.getBoundingClientRect();
    if (rect.top - 1 <= topValue) {
      sectioner.setSection(element.dataset.section)
    }
  }

  // Recalculate on scroll and resize
  const onScrollOrResize = () => checkPosition();
  window.addEventListener('scroll', onScrollOrResize);
  window.addEventListener('resize', onScrollOrResize);
}

onMount(() => {
  return {
    destroy() {
      observer.unobserve(element);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    },
  };
})

</script>

<svelte:window bind:innerHeight></svelte:window>

<section id="hero" class="bg-forest" data-section="hero" use:reachedTop>
  <div class="bg-video-container">
    <video class="bg-video desktop-only" autoplay muted loop playsinline poster="/video/bg.jpg">
      <source src="/video/bg-desktop.webm" type="video/webm">
      <source src="/video/bg-desktop.mp4" type="video/mp4">
    </video>
    <video class="bg-video mobile-only" autoplay muted loop playsinline poster="/video/bg.jpg">
      <source src="/video/bg-mobile.webm" type="video/webm">
      <source src="/video/bg-mobile.mp4" type="video/mp4">
    </video>
  </div>
  <h1 class="text-l">HanaMi<br>Fare, conoscere e abitare <br class="desktop-only">la transizione ecologica</h1>
</section>
<a use:reachedTop data-section="about" href="/#about" class="section-navigator bg-green" style="top: calc(var(--headerHeight) + var(--barHeight) * 0 - 1px)">About</a>
<section id="about">
  <div class="bg-green forest">
    <h3 class="text-m">HanaMi è cambiamento, trasformazione situata e coevolutiva. Si radica al margine periurbano, nel primo sistema agroforestale rigenerativo di Milano e qui vuole crescere, assieme ai giovani della città. Campo di apprendimento e sperimentazione, HanaMi è una non-scuola a cielo aperto dove fare, conoscere e abitare la transizione ecologica. Attraverso dispositivi teorici e strumenti realizzativi che permetteranno di conoscere il territorio e di custodirlo, HanaMi si fa rete antifragile di relazioni vicine e lontane.</h3>
    <div class="grid">
      <div class="grid-item">
        <h4>Quando?</h4>
        <ul>
          <li>Da aprile a giugno</li>
          <li>Da settembre a novembre</li>
        </ul>
      </div>
      <div class="grid-item">
        <h4>Dove?</h4>
        <ul>
          <li><a class="underline hover-white" href="https://soulfoodforestfarms.it/" target="_blank" rel="noopener noreferrer">Agroforesta Urbana</a></li>
          <p>Via dell’Assunta angolo Via Vaiano Valle, Milano</p>
        </ul>
        <h4>Arcipelago di spazi diffusi</h4>
        <ul>
          <li><a class="underline hover-white" href="https://www.viafarini.work/" target="_blank" rel="noopener noreferrer">Farini.work</a></li>
          <p>Via Marco D’Agrate 31, Milano</p>
          <li><a class="underline hover-white" href="https://terzopaesaggio.org/" target="_blank" rel="noopener noreferrer">Terzo Paesaggio</a></li>
          <p>Via San Bernardo 42, Milano</p>
          <!-- <li><a class="underline hover-white" href="https://www.polimi.it/sviluppo-sostenibile/innovazione-e-responsabilita-sociale/innovazione-di-prossimita/off-campus/cascina-nosedo" target="_blank" rel="noopener noreferrer">Polisocial Offcampus, Cascina Nosedo</a></li>
          <p>Via San Dionigi 80, Milano</p>
          <li><a class="underline hover-white" href="https://www.unimi.it/" target="_blank" rel="noopener noreferrer">Università degli Studi di Milano</a></li> -->
        </ul>
      </div>
      <div class="grid-item">
        <h4>Per chi?</h4>
        <p>Dedicato ai giovani, aspiranti custodi della terra o interessati alla ricerca sui temi della transizione ecologica.</p>
      </div>
    </div>
  </div>
</section>
<a use:reachedTop data-section="living-lab" href="/#living-lab" class="section-navigator bg-forest" style="top: calc(var(--headerHeight) + var(--barHeight) * 1 - 2px)">Living lab</a>
<section id="living-lab">
  <div class="bg-forest green">
    <h3 class="text-m">Il programma di HanaMi è suddiviso in due trimestri, da aprile a giugno e da settembre a novembre, con oltre 400 ore di lezioni, laboratori ed esercitazioni sul campo. L’obiettivo è quello di approfondire temi cruciali relativi alla transizione ecologica attraverso una modalità di apprendimento basata sul fare, conoscere e abitare il campo agricolo in modo collaborativo e co-creativo.</h3>
    <div class="grid single">
      <div class="grid-item">
        <ul>
          <li>96 ore di lezioni con docenti di Unimi e Polimi</li>
          <li>96 ore di lezioni con professionisti ed esperti di agroecologia e architettura rigenerativa</li>
          <li>96 ore di flipped classroom, documentari e autoformazione</li>
          <li>2 ettari di terreno da rigenerare con oltre 140 ore di pratica e workshop</li>
        </ul>
        <p class="mt-1">Programma in costante aggiornamento!</p>
      </div>
    </div>
  </div>
  <div id="modules" class="bg-white forest">
    {#each modules as module, i}
      <a href="/#modulo{i+1}" class="module-navigator bg-white forest" style="top: calc(var(--headerHeight) + var(--barHeight) * 2 - 3px)">Modulo {i+1}</a>
      <div class="module" id="modulo{i+1}">
        <div class="bg-white forest">
          <h2 class="text-m module-title">{module.titolo}</h2>
          <div class="grid big mobile-grid">
            <div class="grid-item">
              <p class="module-description">{module.descrizione}</p>
              {#if module.data}
                <div class="module-side">
                  <h4>Date</h4>
                  <p>{module.data}</p>
                </div>
              {/if}
              {#if module.attività}
                <div class="module-side mobile-side">
                  <h4>Attività</h4>
                  <ul>
                    {#each module.attività as attivitàItem}
                      <li>{attivitàItem}</li>
                    {/each}
                  </ul>
                </div>
              {/if}
            </div>
            <div class="grid-item">
              {#if module.corsi}
                <h4 class="mobile-docenti">Docenti e corsi</h4>
                <ul>
                  {#each module.corsi as corso}
                    <li>{corso}</li>
                  {/each}
                </ul>
              {/if}
              {#if module.download}
                <!-- <h4 class="mobile-scopri">Scopri di più</h4> -->
                <!-- <p>Scarica il PDF con i contenuti completi del modulo, il calendario e gli orari delle lezioni</p> -->
                <a href={module.download} class="btn download" target="_blank" rel="noopener noreferrer">Vedi il calendario</a>
              {/if}
            </div>
          </div>
        </div>
      </div>
    {/each}
    <a href="/#programma-completo" class="module-navigator bg-white forest" style="top: calc(var(--headerHeight) + var(--barHeight) * 2 - 3px)">Programma completo</a>
    <div id="programma-completo" class="module" style="top: calc(var(--headerHeight) + var(--barHeight) * 2 - 1px)">
      <div class="grid big">
        <!-- <p class="grid-item">Il programma dettagliato verrà caricato entro la prima settimana di gennaio</p> -->
        <p class="grid-item">Scarica il PDF con la descrizione completa e il calendario di tutti i moduli di HanaMi</p>
      </div>
      <a href="/moduli/00-programma_completo.pdf" class="btn download all" target="_blank" rel="noopener noreferrer">Download</a>
    </div>
  </div>
  
</section>
<a use:reachedTop data-section="iscrizioni" href="/#iscrizioni" class="section-navigator bg-green" style="top: calc(var(--headerHeight) + var(--barHeight) * 2 - 3px)">Iscrizioni</a>
<section id="iscrizioni">
  <div class="bg-green forest">
    <h3 class="text-m">Le iscrizioni al Living Lab di HanaMi sono aperte a giovani interessati ai temi della transizione ecologica. Grazie al contributo di Fondazione di Comunità, per questo primo anno di avvio abbiamo potuto mantenere il costo di iscrizione ad HanaMi quanto più accessibile possibile. Il numero ideale di partecipanti è di 25 persone, per questo ci riserviamo di valutare le candidature in modo da poter esprimere al meglio il potenziale di apprendimento.</h3>
    <div class="grid big">
      <div class="grid-item">
        <h3 class="text-m mobile-title">Procedura di iscrizione</h3>
        <ol>
          <li>Avvia la procedura accedendo al form di iscrizione che trovi al link sottostante.</li>
          <li>HanaMi offre diverse modalità di iscrizione. Potrai scegliere se iscriverti al corso completo, ad un singolo modulo o ad una singola giornata.</li>
          <li>Carica la documentazione richiesta che trovi nella sezione  “Documenti per l’iscrizione” all’interno del form</li>
          <li>Invia la tua candidatura! Torneremo da te il prima possibile. Se hai dubbi o domande non esitare a contattarci all’indirizzo <a class="underline hover-white" href="mailto:hanami@soulfoodforestfarms.it">hanami@soulfoodforestfarms.it</a></li>
        </ol>
      </div>
    </div>
    <div class="grid big">
      <div class="grid-item">
        <h3 class="text-m mobile-title">Documenti per l’iscrizione</h3>
        <ul>
          <li>Curriculum vitae (preferibilmente in formato Europass)</li>
          <li>Lettera motivazionale (massimo 500 parole)</li>
          <li>Eventuale portfolio di esperienze artistiche, creative o pratiche</li>
          <li>Documento di identità</li>
        </ul>
        <p class="mt-1">Compila il form sottostante per inviare la tua candidatura e avviare la procedura di iscrizione al corso.</p>
      </div>
      <!-- <div class="grid-item">
        <h3 class="text-m mobile-title">Scadenze</h3>
        <p class="deadline">28 Febbraio 2025</p>
        <p>Deadline per invio della candidatura</p>
      </div> -->
    </div>
    <a href="https://forms.gle/Vfents4EbEjez1KE7" target="_blank" rel="noopener noreferrer" class="btn form">Vai al form</a>
  </div>
</section>
<a use:reachedTop data-section="info-e-contatti" href="/#info-e-contatti" class="section-navigator bg-forest" style="top: calc(var(--headerHeight) + var(--barHeight) * 3 - 4px)">Info & contatti</a>
<section id="info-e-contatti">
  <div class="bg-forest">
    <p>HanaMi è un progetto nato da Soulfood Forestfarms Hub Italia, organizzazione no-profit che è formata da un’Impresa Sociale e una Associazione di promozione sociale.</p>
    <p class="mt-1">Per informazioni sui corsi, lo staff di HanaMi è a vostra disposizione. Contattaci!</p>
    <div class="grid small">
      <div class="grid-item">
        <p><a class="underline hover-green" href="mailto:hanami@soulfoodforestfarms.it">hanami@soulfoodforestfarms.it</a></p>
        <p><a class="underline hover-green" href="https://www.instagram.com/hanamiscuola/" target="_blank" rel="noopener noreferrer">@hanami_soulfood</a></p>
        <p>T <a class="underline hover-green" href="tel:+393914848539">+39 391 4848539</a></p>
      </div>
      <div class="grid-item">
        <p>© <a class="underline hover-green" href="https://soulfoodforestfarms.it/" target="_blank" rel="noopener noreferrer">Soulfood Forestfarms Hub Italia</a></p>
        <p>Impresa Sociale S.r.l.</p>
        <p><a class="underline hover-green" href="https://maps.app.goo.gl/z5MQjd13DbRYh9zw8" target="_blank" rel="noopener noreferrer">via Druso 9, 20133 Milano</a></p>
      </div>
    </div>
    <div class="partners">
      <div class="partner-row">
        <h4 class="partner-title">HanaMi é un progetto di</h4>
        <a href="https://soulfoodforestfarms.it/" target="_blank" rel="noopener noreferrer"><img class="partner" src="/logo/soulfood_forestfarms.png" alt=""></a>
      </div>
      <div class="partner-row">
        <h4 class="partner-title">Con il contributo di</h4>
        <a href="https://www.fondazionecomunitamilano.org/" target="_blank" rel="noopener noreferrer"><img class="partner" src="/logo/fondazione_comunita_milano.png" alt=""></a>
        <a href="https://www.fondazionealiafalck.it/" target="_blank" rel="noopener noreferrer"><img class="partner" src="/logo/fondazione_alia_falck.png" alt=""></a>
        <a href="https://www.fondazionedeagostini.it/" target="_blank" rel="noopener noreferrer"><img class="partner" src="/logo/fondazione_de_agostini.png" alt=""></a>
        <a href="https://www.fondazioneclaudiodealbertis.it/" target="_blank" rel="noopener noreferrer"><img class="partner" src="/logo/fondazione_claudio_de_albertis.png" alt=""></a>
      </div>
      <div class="partner-row">
        <p>HanaMi è realizzato nell’ambito del programma <a class="underline hover-green" href="https://www.fondazionecomunitamilano.org/progetti/lacittadeigiovani-milano/" target="_blank" rel="noopener noreferrer">La città dei giovani</a></p>
      </div>
    </div>
  </div>
</section>

<style>
/* Common classes */
section>div:not(#modules) {
  padding: 1rem 1rem calc(1rem*3);
  margin-top: -1px;
}
.section-navigator {
  width: 100%;
  padding: .5rem 1rem;
  position: sticky;
  z-index: 2;
  text-transform: uppercase;
  font-size: 1.05em;
  color: var(--white);
  height: var(--barHeight);
  display: flex;
  align-items: center;
}
h3 {
  max-width: calc(1000px + 12vw);
  margin-bottom: 2rem;
}
h4 {
  text-transform: uppercase;
}
h4:not(:first-child) {
  margin-top: 1.2rem;
}
.grid {
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  gap: .5rem;
  row-gap: 1.2rem;
}
.grid.big {
  row-gap: 3rem;
}

.grid .grid-item:nth-child(1) {
  grid-column: 1 / span 4;
}
.grid .grid-item:nth-child(2) {
  grid-column: 6 / span 4;
}
.grid .grid-item:nth-child(3) {
  grid-column: 11 / span 4;
}

.grid.single .grid-item {
    grid-column: 1 / span 6;
  }

.grid.small .grid-item:nth-child(1) {
  grid-column: 1 / span 4;
}
.grid.small .grid-item:nth-child(2) {
  grid-column: 5 / span 4;
}
.grid.small .grid-item:nth-child(3) {
  grid-column: 9 / span 4;
}
.grid.small .grid-item:nth-child(4) {
  grid-column: 13 / span 4;
}

.grid.big .grid-item:nth-child(1) {
  grid-column: 1 / span 6;
}
.grid.big .grid-item:nth-child(2) {
  grid-column: 8 / span 6;
}
.btn {
  padding: .5em .8em;
  background-color: var(--forest);
  color: var(--white);
  text-transform: uppercase;
}
.btn:hover {
  background-color: var(--white);
  color: var(--forest);
}
.btn.download {
  margin-top: 1rem;
  text-transform: none;
}
.btn.download:hover {
  background-color: var(--green);
  color: var(--forest);
}
.grid + .btn {
  margin-top: 1.5rem;
  margin-bottom: 2rem;
}
@media screen and (max-width: 1200px) {
  .grid .grid-item:nth-child(1) {
    grid-column: 1 / span 5;
  }
  .grid .grid-item:nth-child(2) {
    grid-column: 6 / span 5;
  }
  .grid .grid-item:nth-child(3) {
    grid-column: 11 / span 5;
  }

  .grid.single .grid-item {
    grid-column: 1 / span 7;
  }
  .grid.small .grid-item:nth-child(1) {
    grid-column: 1 / span 4;
  }
  .grid.small .grid-item:nth-child(2) {
    grid-column: 5 / span 4;
  }
  .grid.small .grid-item:nth-child(3) {
    grid-column: 9 / span 4;
  }
  .grid.small .grid-item:nth-child(4) {
    grid-column: 13 / span 4;
  }

  .grid.big .grid-item:nth-child(1) {
    grid-column: 1 / span 7;
  }
  .grid.big .grid-item:nth-child(2) {
    grid-column: 9 / span 7;
  }
}
@media screen and (max-width: 900px) {
  .btn.form {
    width: 100%;
    text-align: center;
  }
  .grid .grid-item:nth-child(1) {
    grid-column: 1 / span 16;
  }
  .grid .grid-item:nth-child(2) {
    grid-column: 1 / span 16;
  }
  .grid .grid-item:nth-child(3) {
    grid-column: 1 / span 16;
  }

  .grid.single .grid-item {
    grid-column: 1 / span 16;
  }

  .grid.small .grid-item:nth-child(1) {
    grid-column: 1 / span 7;
  }
  .grid.small .grid-item:nth-child(2) {
    grid-column: 9 / span 7;
  }
  .grid.small .grid-item:nth-child(3) {
    grid-column: 1 / span 7;
  }
  .grid.small .grid-item:nth-child(4) {
    grid-column: 9 / span 7;
  }

  .grid.big .grid-item:nth-child(1) {
    grid-column: 1 / span 16;
  }
  .grid.big .grid-item:nth-child(2) {
    grid-column: 1 / span 16;
  }
}
@media screen and (max-width: 600px) {
  .grid.small .grid-item:nth-child(1) {
    grid-column: 1 / span 16;
  }
  .grid.small .grid-item:nth-child(2) {
    grid-column: 1 / span 16;
  }
  .grid.small .grid-item:nth-child(3) {
    grid-column: 1 / span 16;
  }
  .grid.small .grid-item:nth-child(4) {
    grid-column: 1 / span 16;
  }
}

/* Hero */
#hero {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: sticky;
  margin-top: var(--headerHeight);
  top: var(--headerHeight);
  z-index: -1;
  overflow: hidden;
}

.bg-video-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
  transform-origin: center;
  width: 80vh;
  height: 100vw;
  padding: 0 !important;
}

.bg-video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

#hero h1 {
  width: 80%;
  margin-bottom: .5em;
  z-index: 1;
}
@media screen and (max-width: 900px) {
  .bg-video-container {
    transform: translate(-50%, -50%) rotate(0);
    width: 100%;
    height: 100%;
  }
}

/* About */
#about::before {
  content: '';
  display: block;
  height: calc(var(--headerHeight) + var(--barHeight) * 1 - 1px);
  margin-top: calc((var(--headerHeight) + var(--barHeight) * 1)*-1 + 1px);
  visibility: hidden;
}

/* Living lab */
#living-lab::before {
  content: '';
  display: block;
  height: calc(var(--headerHeight) + var(--barHeight) * 2 - 2px);
  margin-top: calc((var(--headerHeight) + var(--barHeight) * 2)*-1 + 2px);
  visibility: hidden;
}

/* Moduli */
.module>div {
  padding: 0 1rem calc(1rem*3);
}
.module::before {
  content: '';
  display: block;
  height: calc(var(--headerHeight) + var(--barHeight) * 3 - 3px);
  margin-top: calc((var(--headerHeight) + var(--barHeight) * 3)*-1 + 3px);
  visibility: hidden;
}
.module-navigator {
  width: 100%;
  padding: .5rem 1rem;
  position: sticky;
  z-index: 1;
  text-transform: uppercase;
  font-size: 1.05em;
  color: var(--forest);
  border-top: solid 1px var(--forest);
  height: var(--barHeight);
  display: flex;
  align-items: center;
}
.module-title {
  padding: .5rem 0;
}
.module h4 {
  margin-bottom: .6rem;
}
.module-description {
  margin-bottom: 1.2rem;
}
.module-side {
  display: flex;
  margin-bottom: .6rem;
}
.module-side h4 {
  flex-basis: 25%;
}
.module-side ul {
  flex-basis: 75%;
}
#programma-completo {
  padding: 0 1rem;
}
#programma-completo .grid {
  padding: 0 0 1rem;
}
#programma-completo a {
  margin: 0 0 3rem;
}
@media screen and (max-width: 900px) {
  .module-title,
  .mobile-title {
    font-size: 1.625rem;
    margin-bottom: 1.4rem;
  }
  .module-side:first-of-type {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
  .module-side h4 {
    flex-basis: 20%;
  }
  .module-side ul {
    flex-basis: 80%;
  }
  h4.mobile-scopri {
    margin-top: 2rem;
  }
  .grid.big.mobile-grid {
    row-gap: 2rem;
  }
}

/* Iscrizioni */
#iscrizioni::before {
  content: '';
  display: block;
  height: calc(var(--headerHeight) + var(--barHeight) * 3 - 3px);
  margin-top: calc((var(--headerHeight) + var(--barHeight) * 3)*-1 + 3px);
  visibility: hidden;
}
.deadline {
  margin-bottom: .2em;
}
.deadline::before {
  content: '';
  display: inline-block;
  margin-right: .5em;
  width: 1em;
  height: 1em;
  background-color: var(--forest);
  border-radius: 1em;
  padding: .5em;
  top: .15em;
  position: relative;
}
#info-e-contatti::before {
  content: '';
  display: block;
  height: calc(var(--headerHeight) + var(--barHeight) * 4 - 4px);
  margin-top: calc((var(--headerHeight) + var(--barHeight) * 4)*-1 + 4px);
  visibility: hidden;
}
#info-e-contatti p {
  max-width: 600px;
}
.partners {
  margin-top: calc(1rem*4);
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.partner-row {
  display: flex;
  flex-wrap: wrap;
  column-gap: 4rem;
  row-gap: 1.2rem;
}
.partner-title {
  flex-basis: 100%;
}
.partner {
  height: 3rem;
}
@media screen and (max-width: 900px) {
  .partner {
    height: 2.5rem;
  }
}
</style>
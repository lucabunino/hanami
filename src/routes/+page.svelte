<script>
import { modules } from "$lib/modules";
</script>

<section id="hero" class="bg-forest">
  <h1 class="text-l">HanaMi<br>Fare, conoscere e abitare la transizione ecologica</h1>
</section>
<a href="/#about" class="section-navigator bg-green" style="top: calc(var(--headerHeight) + var(--barHeight) * 0)">About</a>
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
          <li><a class="underline hover-white" href="https://www.polimi.it/sviluppo-sostenibile/innovazione-e-responsabilita-sociale/innovazione-di-prossimita/off-campus/cascina-nosedo" target="_blank" rel="noopener noreferrer">Polisocial Offcampus, Cascina Nosedo</a></li>
          <p>Via San Dionigi 80, Milano</p>
          <li><a class="underline hover-white" href="https://www.unimi.it/" target="_blank" rel="noopener noreferrer">Università degli Studi di Milano</a></li>
          <p>Via Noto 8, Milano</p>
        </ul>
      </div>
      <div class="grid-item">
        <h4>Per chi?</h4>
        <p>Dedicato ai giovani, aspiranti custodi della terra o interessati alla ricerca sui temi della transizione ecologica.</p>
      </div>
    </div>
  </div>
</section>
<a href="/#living-lab" class="section-navigator bg-forest" style="top: calc(var(--headerHeight) + var(--barHeight) * 1)">Living lab</a>
<section id="living-lab">
  <div class="bg-forest green">
    <h3 class="text-m">Il programma di HanaMi è suddiviso in due trimestri, da aprile a giugno e da settembre a novembre, con oltre 400 ore di lezioni, laboratori ed esercitazioni sul campo. L’obiettivo è quello di approfondire temi cruciali relativi alla transizione ecologica attraverso una modalità di apprendimento basata sul fare, conoscere e abitare il campo agricolo in modo collaborativo e co-creativo.</h3>
    <div class="grid">
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
      <a href="/#modulo{i+1}" class="module-navigator bg-white forest" style="top: calc(var(--headerHeight) + var(--barHeight) * 2 - 1px)">Modulo {i+1}</a>
      <div class="module" id="modulo{i+1}">
        <div class="bg-white forest">
          <h2 class="text-m module-title">{module.titolo}</h2>
          <div class="grid big">
            <div class="grid-item">
              <p class="module-description">{module.descrizione}</p>
              {#if module.data}
                <div class="module-side">
                  <h4>Date</h4>
                  <p>{module.data}</p>
                </div>
              {/if}
              {#if module.attività}
                <div class="module-side">
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
                <h4>Docenti e corsi</h4>
                <ul>
                  {#each module.corsi as corso}
                    <li>{corso}</li>
                  {/each}
                </ul>
              {/if}
              {#if module.download}
                <h4>Scopri di più</h4>
                <p>Scarica il PDF con i contenuti completi del modulo, il calendario e gli orari delle lezioni</p>
                <a href={module.download} class="btn download" target="_blank" rel="noopener noreferrer">Download</a>
              {/if}
            </div>
          </div>
        </div>
      </div>
    {/each}
    <a href="/#programma-completo" class="module-navigator bg-white forest">Programma completo</a>
    <div id="programma-completo" class="module" style="top: calc(var(--headerHeight) + var(--barHeight) * 2 - 1px)">
      <div class="grid big">
        <p class="grid-item">Scarica il PDF con la descrizione completa e il calendario di tutti i moduli di HanaMi</p>
      </div>
      <a href="/moduli/dummy.pdf" class="btn download all" target="_blank" rel="noopener noreferrer">Download</a>
    </div>
  </div>
  
</section>
<a href="/#iscrizioni" class="section-navigator bg-green" style="top: calc(var(--headerHeight) + var(--barHeight) * 2)">Iscrizioni</a>
<section id="iscrizioni">
  <div class="bg-green forest">
    <h3 class="text-m">Le iscrizioni al Living Lab di HanaMi sono aperte a giovani interessati ai temi della transizione ecologica. Grazie al contributo di Fondazione di Comunità, per questo primo anno di avvio abbiamo potuto mantenere il costo di iscrizione ad HanaMi quanto più accessibile possibile. Il numero ideale di partecipanti è di 25 persone, per questo ci riserviamo di valutare le candidature in modo da poter esprimere al meglio il potenziale di apprendimento.</h3>
    <div class="grid big">
      <div class="grid-item">
        <h3 class="text-m">Procedura di iscrizione</h3>
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
        <h3 class="text-m">Documenti per l’iscrizione</h3>
        <ul>
          <li>Curriculum vitae (preferibilmente in formato Europass)</li>
          <li>Lettera motivazionale (massimo 500 parole)</li>
          <li>Eventuale portfolio di esperienze artistiche, creative o pratiche</li>
          <li>Documento di identità</li>
        </ul>
        <p class="mt-1">Compila il form sottostante per inviare la tua candidatura e avviare la procedura di iscrizione al corso.</p>
      </div>
      <div class="grid-item">
        <h3 class="text-m">Scadenze</h3>
        <p class="deadline">31 Gennaio 2025</p>
        <p>Deadline per invio della candidatura</p>
      </div>
    </div>
    <a href="#" target="_blank" rel="noopener noreferrer" class="btn">Vai al form</a>
  </div>
</section>
<a href="/#info-e-contatti" class="section-navigator bg-forest" style="top: calc(var(--headerHeight) + var(--barHeight) * 3)">Info & contatti</a>
<section id="info-e-contatti">
  <div class="bg-forest">
    <p>HanaMi è un progetto nato da Soulfood Forestfarms Hub Italia, organizzazione no-profit che è formata da un’Impresa Sociale e una Associazione di promozione sociale.</p>
    <p class="mt-1">Per informazioni sui corsi, lo staff di HanaMi è a vostra disposizione. Contattaci!</p>
    <div class="grid small">
      <div class="grid-item">
        <p><a class="hover-green" href="mailto:hanami@soulfoodforestfarms.it">hanami@soulfoodforestfarms.it</a></p>
        <p><a class="hover-green" href="https://www.instagram.com/hanamiscuola/" target="_blank" rel="noopener noreferrer">@hanami_soulfood</a></p>
        <p>T <a class="hover-green" href="tel:+393478898281">+39 347 8898281</a></p>
      </div>
      <div class="grid-item">
        <p>© <a class="hover-green" href="https://soulfoodforestfarms.it/" target="_blank" rel="noopener noreferrer">Soulfood Forestfarms Hub Italia</a></p>
        <p>Impresa Sociale S.r.l.</p>
        <p><a class="hover-green" href="https://maps.app.goo.gl/z5MQjd13DbRYh9zw8" target="_blank" rel="noopener noreferrer">via Druso 9, 20133 Milano</a></p>
      </div>
    </div>
    <!-- <div class="grid small">
      <div class="grid-item">
        <h4>Istituzioni</h4>
        <ul>
          <li><a href="https://www.polimi.it/" target="_blank" rel="noopener noreferrer">Politecnico di Milano</a></li>
          <li><a href="https://www.unimi.it/" target="_blank" rel="noopener noreferrer">Università degli Studi di Milano</a></li>
        </ul>
      </div>
      <div class="grid-item">
        <h4>Professionisti</h4>
        <ul>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Riccardo Gini</a></li>
          <li><a href="https://terzopaesaggio.org/" target="_blank" rel="noopener noreferrer">Terzo Paesaggio</a></li>
          <li><a href="https://www.biologicorigenerativo.it/" target="_blank" rel="noopener noreferrer">Iside Farm</a></li>
          <li><a href="https://faunaviva.wordpress.com/" target="_blank" rel="noopener noreferrer">Fauna viva</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Del Toro</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Vairo</a></li>
        </ul>
      </div>
      <div class="grid-item">
        <h4>Organizzazioni</h4>
        <ul>
          <li><a href="https://soulfoodforestfarms.it/" target="_blank" rel="noopener noreferrer">Soulfood Forstfarms</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Altro</a></li>
        </ul>
      </div>
    </div> -->
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
    </div>
  </div>
</section>

<style>
/* Common classes */
section>div:not(#modules) {
  padding: var(--margin) var(--margin) calc(var(--margin)*3);
  margin-top: -1px;
}
.section-navigator {
  width: 100%;
  padding: var(--gutter) var(--margin);
  position: sticky;
  z-index: 2;
  text-transform: uppercase;
  font-size: 1.05em;
  color: var(--white);
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
  gap: var(--gutter);
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
  margin-top: 2rem;
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

/* Hero */
#hero {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image:url(/img/bg-desktop.webp);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: sticky;
  margin-top: var(--headerHeight);
  top: var(--headerHeight);
  z-index: -1;
}
#hero h1 {
  width: 80%;
  margin-bottom: .5em;
}
@media screen and (max-width: 900px) {
  .temporary-container {
    background-image:url(/img/bg-mobile.webp);
  }
}

/* About */
#about::before {
  content: '';
  display: block;
  height: calc(var(--headerHeight) + var(--barHeight) * 1);
  margin-top: calc((var(--headerHeight) + var(--barHeight) * 1)*-1);
  visibility: hidden;
}

/* Living lab */
#living-lab::before {
  content: '';
  display: block;
  height: calc(var(--headerHeight) + var(--barHeight) * 2);
  margin-top: calc((var(--headerHeight) + var(--barHeight) * 2)*-1);
  visibility: hidden;
}

/* Moduli */
.module>div {
  padding: 0 var(--margin) calc(var(--margin)*3);
}
.module::before {
  content: '';
  display: block;
  height: calc(var(--headerHeight) + var(--barHeight) * 3);
  margin-top: calc((var(--headerHeight) + var(--barHeight) * 3)*-1);
  visibility: hidden;
}
.module-navigator {
  width: 100%;
  padding: var(--gutter) var(--margin);
  position: sticky;
  z-index: 1;
  text-transform: uppercase;
  font-size: 1.05em;
  color: var(--forest);
  border-top: solid 1px var(--forest);
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
}
.module-side h4 {
  flex-basis: 25%;
}
.module-side ul {
  flex-basis: 75%;
}
#programma-completo {
  padding: 0 var(--margin);
}
#programma-completo .grid {
  padding: var(--gutter) var(--margin) calc(var(--margin)*1.5);
}
#programma-completo a {
  margin: 0 0 3rem;
}

/* Iscrizioni */
#iscrizioni::before {
  content: '';
  display: block;
  height: calc(var(--headerHeight) + var(--barHeight) * 3);
  margin-top: calc((var(--headerHeight) + var(--barHeight) * 3)*-1);
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
  height: calc(var(--headerHeight) + var(--barHeight) * 4);
  margin-top: calc((var(--headerHeight) + var(--barHeight) * 4)*-1);
  visibility: hidden;
}
#info-e-contatti p {
  max-width: 600px;
}
.partners {
  margin-top: calc(var(--margin)*4);
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
</style>
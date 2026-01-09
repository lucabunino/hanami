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
	<h1 class="text-l">HanaMi Scuola</h1>
	<h2 class="text-ml">Fare, conoscere e abitare <br class="desktop-only">la transizione ecologica</h2>
	<div class="credit">
		<h4>Progetto ideato da</h4>
		<a href="https://soulfoodforestfarms.it/" target="_blank" rel="noopener noreferrer"><img class="partner" src="/logo/soulfood_forestfarms.png" alt=""></a>
	</div>
</section>
<a use:reachedTop data-section="chi-siamo" href="/#chi-siamo" class="section-navigator bg-green" style="top: calc(var(--headerHeight) + var(--barHeight) * 0 - 1px)">Chi siamo</a>
<section id="chi-siamo">
	<div class="bg-green forest">
		<h3 class="text-m">HanaMi è una scuola a cielo aperto dedicata all’agroecologia e ai percorsi della transizione ecologica.</h3>
		<h3 class="text-m">La nostra missione è formare i futuri custodi della terra, capaci di apprendere, praticare e accompagnare azioni che rigenerano i territori da abitare.</h3>
		<div class="flex">
			<div class="flex-item">
				<h4>Quando?</h4>
				<ul>
					<li>Da aprile a giugno</li>
					<li>Da settembre a novembre</li>
				</ul>
			</div>
			<div class="flex-item">
				<h4>Dove?</h4>
				<p><a class="underline hover-white" href="https://soulfoodforestfarms.it/" target="_blank" rel="noopener noreferrer">Agroforesta Urbana</a> – Via dell’Assunta angolo Via Vaiano Valle, Milano</p>
				<p><a class="underline hover-white" href="https://www.viafarini.work/" target="_blank" rel="noopener noreferrer">Farini.work</a> – Via Marco D’Agrate 31, Milano</p>
			</div>
			<div class="flex-item">
				<h4>Per chi?</h4>
				<p>Dedicato ai giovani, aspiranti custodi della terra o interessati alla ricerca sui temi della transizione ecologica.</p>
			</div>
		</div>
	</div>
</section>
<a use:reachedTop data-section="programma" href="/#programma" class="section-navigator bg-forest" style="top: calc(var(--headerHeight) + var(--barHeight) * 1 - 2px)">Programma</a>
<section id="programma">
	<div class="bg-forest green">
		<h3 class="text-m">Il programma di HanaMI 2026 è strutturato in 8 moduli progettati per rispondere a domande fondamentali sulla traiettoria climatica.</h3>
		<h3 class="text-m">Professionisti esperti nel settore della rigenerazione del paesaggio, sia esso urbano, periurbano o rurale, sono sempre più indispensabili e richiesti.</h3>
		<h3 class="text-m">Con oltre 200 ore di lezioni, laboratori ed esercitazioni sul campo, miriamo a offrire un’alternativa formativa in grado di fornire strumenti per risposte immediate e con impatti duraturi sugli ecosistemi.</h3>
		<div class="grid single">
			<div class="grid-item">
				<ul>
					<li>50+ ore di lezioni con docenti di Unimi e Polimi</li>
					<li>50+ ore di lezioni con professionisti ed esperti di agroecologia e architettura rigenerativa</li>
					<li>50+ ore di flipped classroom, documentari e autoformazione</li>
					<li>4 Laboratori del fare su Acqua, Agroforestazione, Cucina e Falegnameria</li>
					<li>2 ettari di terreno da rigenerare con oltre 50 ore di pratica e workshop</li>
				</ul>
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
							{#if module.data}
								<div class="module-side">
									<h4>Date</h4>
									<p>{module.data}</p>
								</div>
							{/if}
							<p class="module-description">{module.descrizione}</p>
							<!-- {#if module.attività}
								<div class="module-side mobile-side">
									<h4>Attività</h4>
									<ul>
										{#each module.attività as attivitàItem}
											<li>{attivitàItem}</li>
										{/each}
									</ul>
								</div>
							{/if} -->
							<!-- {#if module.prezzo}
								<h4 class="module-scopri mb-0">Costo modulo</h4>
								<p>€ {module.prezzo} IVA inclusa</p>
							{/if} -->
							{#if module.link}
								<!-- <h4 class="module-scopri module-link-title mb-0">Vedi calendario modulo</h4> -->
								<a href={module.link} class="btn link" target="_blank" rel="noopener noreferrer">VAI AL CALENDARIO</a>
							{/if}
						</div>
						<div class="grid-item">
							{#if module.docenti}
								<h4 class="mobile-docenti">Docenti</h4>
								<ul>
									{#each module.docenti as docente}
										<li>{docente}</li>
									{/each}
								</ul>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/each}
		<!-- <a href="/#programma-completo" class="module-navigator bg-white forest" style="top: calc(var(--headerHeight) + var(--barHeight) * 2 - 3px)">Programma completo</a>
		<div id="programma-completo" class="module" style="top: calc(var(--headerHeight) + var(--barHeight) * 2 - 1px)">
			<div class="grid big">
				<p class="grid-item">Il programma dettagliato verrà caricato entro la prima settimana di gennaio</p>
				<p class="grid-item">Scarica il PDF con la descrizione completa e il calendario di tutti i moduli di HanaMi</p>
			</div>
			<a href="/moduli/00-programma_completo.pdf" class="btn link all" target="_blank" rel="noopener noreferrer">link</a>
		</div> -->
	</div>
	
</section>
<a use:reachedTop data-section="iscrizioni" href="/#iscrizioni" class="section-navigator bg-green" style="top: calc(var(--headerHeight) + var(--barHeight) * 2 - 3px)">Iscrizioni</a>
<section id="iscrizioni">
	<div class="bg-green forest">
		<h3 class="text-m">Le iscrizioni al Living Lab di HanaMi sono aperte a giovani interessati ai temi della transizione ecologica. Grazie al contributo di Fondazione di Comunità, per questo primo anno di avvio abbiamo potuto mantenere il costo di iscrizione ad HanaMi quanto più accessibile possibile.</h3>
		<div class="grid big">
			<div class="grid-item">
				<h3 class="text-m mobile-title">Procedura di iscrizione</h3>
				<p>Il Corso di HanaMI è stato pensato in modo modulare per facilitare la partecipazione. Compilando il form qui sotto, puoi decidere se partecipare alle singole giornate, ai moduli o all’intero corso.</p>
			</div>
		</div>
		<!-- <div class="grid big">
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
			<div class="grid-item">
				<h3 class="text-m mobile-title">Scadenze</h3>
				<p class="deadline">28 Febbraio 2025</p>
				<p>Deadline per invio della candidatura</p>
			</div>
		</div> -->
		<a href="https://docs.google.com/forms/d/e/1FAIpQLSemYNtG0FuahJiELf_9RSg_0ETZzcr4HZT2RDUNTeSPrA_bsA/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" class="btn form">Vai al form</a>
		<!-- <h4>Vedi il programma completo</h4>
		<a href="https://calendar.google.com/calendar/u/0/r?cid=Yzc5MjcyNDVjZjA3ZjNhMTc1YTM0ZmI1MjNjMTAzNmRjM2RmYjFlNzNiM2E4ODA5YjU2YjI2NzBlMThjMTA5NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t" target="_blank" rel="noopener noreferrer" class="btn mt-1">VAI AL CALENDARIO</a> -->
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
				<p><a class="underline hover-green" href="https://www.instagram.com/hanamiscuola/" target="_blank" rel="noopener noreferrer">@hanamiscuola</a></p>
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
	padding: 1rem 1rem -moz-calc(1rem*3);
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
	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	   -moz-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
}
h3 {
	max-width: -moz-calc(1000px + 12vw);
	max-width: calc(1000px + 12vw);
}
h3:last-of-type {
	margin-bottom: 2rem;
}
h4 {
	text-transform: uppercase;
}
h4:not(:first-child) {
	margin-top: 1.2rem;
}
.flex {
	padding: 1rem 0;
	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	gap: 1.2rem;
	max-width: -moz-calc(1000px + 12vw);
	max-width: calc(1000px + 12vw);
}
.flex .flex-item:nth-child(1) {
	width: 20%;
}
.flex .flex-item:nth-child(2) {
	width: 40%;
}
.flex .flex-item:nth-child(3) {
	width: 40%;
}
.grid {
	padding: 1rem 0;
	display: -ms-grid;
	display: grid;
	-ms-grid-columns: 1fr .5rem 1fr .5rem 1fr .5rem 1fr .5rem 1fr .5rem 1fr .5rem 1fr .5rem 1fr .5rem 1fr .5rem 1fr .5rem 1fr .5rem 1fr .5rem 1fr .5rem 1fr .5rem 1fr .5rem 1fr;
	grid-template-columns: repeat(16, 1fr);
	gap: .5rem;
	row-gap: 1.2rem;
}
.grid.big {
	row-gap: 3rem;
}
.grid .grid-item:nth-child(1) {
	-ms-grid-column: 1;
	-ms-grid-column-span: 4;
	grid-column: 1 / span 4;
}
.grid .grid-item:nth-child(2) {
	-ms-grid-column: 6;
	-ms-grid-column-span: 4;
	grid-column: 6 / span 4;
}
.grid .grid-item:nth-child(3) {
	-ms-grid-column: 11;
	-ms-grid-column-span: 4;
	grid-column: 11 / span 4;
}

.grid.single .grid-item {
	-ms-grid-column: 1;
	-ms-grid-column-span: 6;
	grid-column: 1 / span 6;
}
.grid.small .grid-item:nth-child(1) {
	-ms-grid-column: 1;
	-ms-grid-column-span: 4;
	grid-column: 1 / span 4;
}
.grid.small .grid-item:nth-child(2) {
	-ms-grid-column: 5;
	-ms-grid-column-span: 4;
	grid-column: 5 / span 4;
}
.grid.small .grid-item:nth-child(3) {
	-ms-grid-column: 9;
	-ms-grid-column-span: 4;
	grid-column: 9 / span 4;
}
.grid.small .grid-item:nth-child(4) {
	-ms-grid-column: 13;
	-ms-grid-column-span: 4;
	grid-column: 13 / span 4;
}
.grid.big .grid-item:nth-child(1) {
	-ms-grid-column: 1;
	-ms-grid-column-span: 6;
	grid-column: 1 / span 6;
}
.grid.big .grid-item:nth-child(2) {
	-ms-grid-column: 8;
	-ms-grid-column-span: 6;
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
.btn.link {
	text-transform: none;
}
.btn.link:hover {
	background-color: var(--green);
	color: var(--forest);
}
.grid + .btn {
	margin-top: .2rem;
	margin-bottom: 2rem;
}
@media screen and (max-width: 1200px) {
	.grid .grid-item:nth-child(1) {
		-ms-grid-column: 1;
		-ms-grid-column-span: 5;
		grid-column: 1 / span 5;
	}
	.grid .grid-item:nth-child(2) {
		-ms-grid-column: 6;
		-ms-grid-column-span: 5;
		grid-column: 6 / span 5;
	}
	.grid .grid-item:nth-child(3) {
		-ms-grid-column: 11;
		-ms-grid-column-span: 5;
		grid-column: 11 / span 5;
	}

	.grid.single .grid-item {
		-ms-grid-column: 1;
		-ms-grid-column-span: 7;
		grid-column: 1 / span 7;
	}
	.grid.small .grid-item:nth-child(1) {
		-ms-grid-column: 1;
		-ms-grid-column-span: 4;
		grid-column: 1 / span 4;
	}
	.grid.small .grid-item:nth-child(2) {
		-ms-grid-column: 5;
		-ms-grid-column-span: 4;
		grid-column: 5 / span 4;
	}
	.grid.small .grid-item:nth-child(3) {
		-ms-grid-column: 9;
		-ms-grid-column-span: 4;
		grid-column: 9 / span 4;
	}
	.grid.small .grid-item:nth-child(4) {
		-ms-grid-column: 13;
		-ms-grid-column-span: 4;
		grid-column: 13 / span 4;
	}

	.grid.big .grid-item:nth-child(1) {
		-ms-grid-column: 1;
		-ms-grid-column-span: 7;
		grid-column: 1 / span 7;
	}
	.grid.big .grid-item:nth-child(2) {
		-ms-grid-column: 9;
		-ms-grid-column-span: 7;
		grid-column: 9 / span 7;
	}
}
@media screen and (max-width: 900px) {
	.flex {
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		   -moz-box-orient: vertical;
		   -moz-box-direction: normal;
		    -ms-flex-direction: column;
		        flex-direction: column;
	}
	.flex-item {
		width: 100% !important;
	}
	.btn.form {
		width: 100%;
		text-align: center;
	}
	.grid .grid-item:nth-child(1) {
		-ms-grid-column: 1;
		-ms-grid-column-span: 16;
		grid-column: 1 / span 16;
	}
	.grid .grid-item:nth-child(2) {
		-ms-grid-column: 1;
		-ms-grid-column-span: 16;
		grid-column: 1 / span 16;
	}
	.grid .grid-item:nth-child(3) {
		-ms-grid-column: 1;
		-ms-grid-column-span: 16;
		grid-column: 1 / span 16;
	}

	.grid.single .grid-item {
		-ms-grid-column: 1;
		-ms-grid-column-span: 16;
		grid-column: 1 / span 16;
	}

	.grid.small .grid-item:nth-child(1) {
		-ms-grid-column: 1;
		-ms-grid-column-span: 7;
		grid-column: 1 / span 7;
	}
	.grid.small .grid-item:nth-child(2) {
		-ms-grid-column: 9;
		-ms-grid-column-span: 7;
		grid-column: 9 / span 7;
	}
	.grid.small .grid-item:nth-child(3) {
		-ms-grid-column: 1;
		-ms-grid-column-span: 7;
		grid-column: 1 / span 7;
	}
	.grid.small .grid-item:nth-child(4) {
		-ms-grid-column: 9;
		-ms-grid-column-span: 7;
		grid-column: 9 / span 7;
	}

	.grid.big .grid-item:nth-child(1) {
		-ms-grid-column: 1;
		-ms-grid-column-span: 16;
		grid-column: 1 / span 16;
	}
	.grid.big .grid-item:nth-child(2) {
		-ms-grid-column: 1;
		-ms-grid-column-span: 16;
		grid-column: 1 / span 16;
	}
}
@media screen and (max-width: 600px) {
	.grid.small .grid-item:nth-child(1) {
		-ms-grid-column: 1;
		-ms-grid-column-span: 16;
		grid-column: 1 / span 16;
	}
	.grid.small .grid-item:nth-child(2) {
		-ms-grid-column: 1;
		-ms-grid-column-span: 16;
		grid-column: 1 / span 16;
	}
	.grid.small .grid-item:nth-child(3) {
		-ms-grid-column: 1;
		-ms-grid-column-span: 16;
		grid-column: 1 / span 16;
	}
	.grid.small .grid-item:nth-child(4) {
		-ms-grid-column: 1;
		-ms-grid-column-span: 16;
		grid-column: 1 / span 16;
	}
}

/* Hero */
#hero {
	width: 100%;
	height: -moz-calc(100vh - var(--headerHeight));
	height: calc(100vh - var(--headerHeight));
	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	   -moz-box-orient: vertical;
	   -moz-box-direction: normal;
	    -ms-flex-direction: column;
	        flex-direction: column;
	-webkit-box-pack: center;
	   -moz-box-pack: center;
	    -ms-flex-pack: center;
	        justify-content: center;
	-webkit-box-align: center;
	   -moz-box-align: center;
	    -ms-flex-align: center;
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
	-webkit-transform: translate(-50%, -50%) rotate(90deg);
	   -moz-transform: translate(-50%, -50%) rotate(90deg);
	    -ms-transform: translate(-50%, -50%) rotate(90deg);
	        transform: translate(-50%, -50%) rotate(90deg);
	-webkit-transform-origin: center;
	   -moz-transform-origin: center;
	    -ms-transform-origin: center;
	        transform-origin: center;
	width: -moz-calc(100vh - var(--headerHeight));
	width: calc(100vh - var(--headerHeight));
	height: 100vw;
	padding: 0 !important;
}

.bg-video {
	-o-object-fit: cover;
	   object-fit: cover;
	width: 100%;
	height: 100%;
}

#hero h1 {
	display: block;
	width: 80%;
	margin-bottom: .2em;
	z-index: 1;
}
#hero h2 {
	display: block;
	width: 80%;
	margin-bottom: 3em;
	z-index: 1;
}
#hero .credit {
	color: var(--white);
	position: absolute;
	left: 1rem;
	bottom: 7rem;
	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	   -moz-box-orient: vertical;
	   -moz-box-direction: normal;
	    -ms-flex-direction: column;
	        flex-direction: column;
	gap: .5rem;
	padding: 0;
}
@media screen and (max-width: 900px) {
	.bg-video-container {
		-webkit-transform: translate(-50%, -50%) rotate(0);
		   -moz-transform: translate(-50%, -50%) rotate(0);
		    -ms-transform: translate(-50%, -50%) rotate(0);
		        transform: translate(-50%, -50%) rotate(0);
		width: 100%;
		height: 100%;
	}
}

/* Chi siamo */
#chi-siamo::before {
	content: '';
	display: block;
	height: -moz-calc(var(--headerHeight) + var(--barHeight) * 1 - 1px);
	height: calc(var(--headerHeight) + var(--barHeight) * 1 - 1px);
	margin-top: -moz-calc((var(--headerHeight) + var(--barHeight) * 1)*-1 + 1px);
	margin-top: calc((var(--headerHeight) + var(--barHeight) * 1)*-1 + 1px);
	visibility: hidden;
}
#chi-siamo div:nth-child(2) li+li {
	margin-top: 1em;
}

/* Programma */
#programma::before {
	content: '';
	display: block;
	height: -moz-calc(var(--headerHeight) + var(--barHeight) * 2 - 2px);
	height: calc(var(--headerHeight) + var(--barHeight) * 2 - 2px);
	margin-top: -moz-calc((var(--headerHeight) + var(--barHeight) * 2)*-1 + 2px);
	margin-top: calc((var(--headerHeight) + var(--barHeight) * 2)*-1 + 2px);
	visibility: hidden;
}

/* Moduli */
.module>div {
	padding: 0 1rem -moz-calc(1rem*3);
	padding: 0 1rem calc(1rem*3);
}
.module::before {
	content: '';
	display: block;
	height: -moz-calc(var(--headerHeight) + var(--barHeight) * 3 - 3px);
	height: calc(var(--headerHeight) + var(--barHeight) * 3 - 3px);
	margin-top: -moz-calc((var(--headerHeight) + var(--barHeight) * 3)*-1 + 3px);
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
	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	   -moz-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
}
.module-title {
	padding: .5rem 0;
}
.module h4:not(.mb-0) {
	margin-bottom: 1.8rem;
}
.module-description {
	margin-bottom: 1.8rem;
}
.module-side {
	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
}
.module-side h4 {
	-ms-flex-preferred-size: 25%;
	    flex-basis: 25%;
}
.module-side ul {
	-ms-flex-preferred-size: 75%;
	    flex-basis: 75%;
}
.module-link-title {
	margin-bottom: 1.2rem;
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
		/* margin-bottom: 1.4rem; */
	}
	/* .module-side:first-of-type {
		margin-top: 3rem;
		margin-bottom: 1rem;
	} */
	.module-side h4 {
		-ms-flex-preferred-size: 20%;
		    flex-basis: 20%;
	}
	.module-side ul {
		-ms-flex-preferred-size: 80%;
		    flex-basis: 80%;
	}
	h4.module-scopri {
		margin-top: 2rem;
	}
	.grid.big.mobile-grid {
		row-gap: 2rem;
	}
}

/* Iscrizioni */
#iscrizioni>.bg-green {
	padding-bottom: 12rem;
}
#iscrizioni::before {
	content: '';
	display: block;
	height: -moz-calc(var(--headerHeight) + var(--barHeight) * 3 - 3px);
	height: calc(var(--headerHeight) + var(--barHeight) * 3 - 3px);
	margin-top: -moz-calc((var(--headerHeight) + var(--barHeight) * 3)*-1 + 3px);
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
	-moz-border-radius: 1em;
	     border-radius: 1em;
	padding: .5em;
	top: .15em;
	position: relative;
}
#info-e-contatti::before {
	content: '';
	display: block;
	height: -moz-calc(var(--headerHeight) + var(--barHeight) * 4 - 4px);
	height: calc(var(--headerHeight) + var(--barHeight) * 4 - 4px);
	margin-top: -moz-calc((var(--headerHeight) + var(--barHeight) * 4)*-1 + 4px);
	margin-top: calc((var(--headerHeight) + var(--barHeight) * 4)*-1 + 4px);
	visibility: hidden;
}
#info-e-contatti p {
	max-width: 600px;
}
.partners {
	margin-top: -moz-calc(1rem*4);
	margin-top: calc(1rem*4);
	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	   -moz-box-orient: vertical;
	   -moz-box-direction: normal;
	    -ms-flex-direction: column;
	        flex-direction: column;
	gap: 3rem;
}
.partner-row {
	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	    flex-wrap: wrap;
	-webkit-column-gap: 4rem;
	   -moz-column-gap: 4rem;
	        column-gap: 4rem;
	row-gap: 1.2rem;
}
.partner-title {
	-ms-flex-preferred-size: 100%;
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
<script>
	import { onMount } from "svelte";

  export let app
  // export let page
  // export let block
	export let data

	onMount(async () => {
		console.log('getting started data', data)
		let domain

		setTimeout(() => {
			let splide = new window['Splide'](`.splide`, {
				type: 'loop',
				fixedWidth: '20em',
				autoplay: false
			})
	
			splide.on('autoplay:playing', function (rate) {
				console.log(rate); // 0-1
			})
	
			splide.mount(window['splide'].Extensions)
		}, 1000)
	})

</script>

{#if data.guide}
	<div class="featured">
		<div class="row">
			<div class="col s0 m1"></div>
			<div class="col s12 m10">
				<div class="splide">
					<div class="splide__track">
						<ul class="splide__list">
							{#if data.guide.videos && data.guide.videos.length}
								{#each data.guide.videos as video (video.id)}
									<li class="splide__slide" data-splide-html-video={`${app.uploads}/${video.video}`}>
										<div class="tumbnail" style={`background: center center url(${app.uploads}/${video.image})`}>
											<a href={`https://channel.${app.domain}/watch/${video.slug}`}><h2 class="name">{video.name}</h2></a>
										</div>
									</li>
								{/each}
							{/if}
						</ul>
					</div>
				</div>
				<br />
				<br />
			</div>
			<div class="col s0 m1"></div>
		</div>
	</div>
{/if}

<style>
	.featured {
		background: #333;
    margin: 0;
    padding: 4em 0 2em;
	}

	.splide__slide {
		margin: 1em;
	}

	:global(.splide__pagination) {
		bottom: -2em;
	}

	.splide__slide .tumbnail {
    height: 20em;
    width: 20em;
		background-size: cover !important;
	}

	.splide__slide .tumbnail .name {
		position: absolute;
		z-index: 10;
		font-size: 1em;
		padding: 1em;
		color: #fff;
		background: #000;
	}

	.splide__slide .tumbnail .name:hover {
		text-decoration: underline;
	}
</style>


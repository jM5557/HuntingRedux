---

layout: default

permalink: "/mhp3rd/"

gameName: Monster Hunter Portable 3rd
gameSubname: MHP3rd Redux
gameReleaseName: mhp3rd

largeImg: 'mhp3rd/screens-3.png'
---

<section class = "main-wrapper">
	<div class = "sect text-container">
		<div class = "row-items col-2">
			<section class="install col large">
				
				<div class="game-panel">
					<header>
						{{ page.gameName }} Redux
					</header>

					<div class = "hero__btn_ctr">

						<a href="releases/{{ include.gameReleaseName }}" class="latest-rls">
							Download Latest Release
						</a>

					</div>
				</div>
				
				
				{% include installation.html gameSubname = page.gameSubname gameReleaseName = page.gameReleaseName %}

			</section>

			<section class = 'col small'>
				<header>Showcase Trailer</header>
				<a href = "https://youtube.com" class = "trailer-thumbnail">
					<div class = "play-btn">Watch Now</div>
				</a>

				{% include controller_setup.html %}
				
			</section>
		</div>
	</div>
</section>

<section id = 'gallery' class="mhp3rd">
	{% include gallery.html game = page.latestGame %}
</section>

<script src = "./../assets/frontend/assets/lib/images.js">
</script>


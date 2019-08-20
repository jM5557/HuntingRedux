---

layout: default

permalink: "/mhp3rd/"

gameName: Monster Hunter Portable 3rd
gameSubname: MHP3rd Redux
gameReleaseName: mhp3rd

largeImg: 'mhp3rd/screens-3.png'

requirements:
 - title: PPSSPP [Download Now](https://ppsspp.org)
   desc: HuntingRedux is exclusively compatible with PPSSPP emulation software.
 - title: Monster Hunter Portable 3rd HD Ver. ISO/ROM **English Patched**
   desc: We do NOT provide instructions on how to illegally obtain a copy of the game. We recommend doing some research on how to legally rip your copy of the game.
 - title: 7-zip [Download Now](https://www.7-zip.org/)
   desc: We recommend 7-zip to extract any downloadable zip files that we provide as part of our releases.
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

<div class = "panel-item">
<h1>Requirements</h1>
{% for requirement in page.requirements %}			
<details>
	<summary>
		{{ requirement.title | markdownify }}
	</summary>

	{{ requirement.desc }}
</details>
{% endfor %}
</div>	
				{% include installation.html gameSubname = page.gameSubname gameReleaseName = page.gameReleaseName %}

<div class = "panel-item" markdown = "1">
{% include controller_setup.md %}
</div>

			</section>

			<section class = 'col small'>

				<div class = "panel-item">
					<a href = "https://youtube.com" class = "trailer-thumbnail">
						<p>Showcase Trailer</p>
						<div class = "play-btn"></div>
					</a>
				</div>

				
<section id = 'gallery' class="mhp3rd">
	{% include gallery.html game = page.latestGame %}
</section>
			</section>
		</div>
	</div>
</section>

<script src = "./../assets/frontend/assets/lib/images.js">
</script>


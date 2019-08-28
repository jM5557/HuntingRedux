---

layout: default

permalink: "/mhp3rd/"

gameName: Monster Hunter Portable 3rd
gameSubname: MHP3rd Redux
gameReleaseName: mhp3rd

largeImg: 'mhp3rd/screens-3.png'

requirements:
 - title: PPSSPP
   link: https://ppsspp.org
   desc: HuntingRedux is exclusively compatible with PPSSPP emulation software.
 - title: Monster Hunter Portable 3rd HD Ver. ISO/ROM
   desc: We do **NOT** provide instructions on how to illegally obtain a copy of the game.
 - title: 7-zip
   link: https://www.7-zip.org/
   desc: We recommend 7-zip to extract any downloadable zip files that we provide as part of our releases.

latestTrailer: m6guHcGEqX8
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
<div class = "item">
	<div class = "title">
		<div>
			{{ requirement.title }}
		</div>

		{% if requirement.link %}
			<a href = "{{requirement.link}}" class = "download link">
				Download Now
			</a>
		{% endif %}

	</div>

	<div class = "content">
		{{ requirement.desc | markdownify }}
	</div>
</div>
{% endfor %}

</div>	
				{% include installation.html gameSubname = page.gameSubname gameReleaseName = page.gameReleaseName %}

<div class = "panel-item" markdown = "1">
{% include controller_setup.md %}
</div>

			</section>

			<section class = 'col small'>

				<div class = "panel-item">
					<div class = "trailer-thumbnail">
						<p>Showcase Trailer</p>
						<iframe src="https://www.youtube.com/embed/{{page.latestTrailer}}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
				</div>

				
<section id = 'gallery' class="mhp3rd">
	{% include gallery.html game = page.latestGame %}
</section>
			</section>
		</div>
	</div>
</section>


---

layout: default

permalink: "/mhp3rd/"

gameName: Monster Hunter Portable 3rd
gameSubname: MHP3rd Redux
gameReleaseName: mhp3rd

largeImg: 'mhp3rd/screens-3.png'
---

<section class = "main-wrapper">
	<div class="sect text-container">

		<header>
			{{ page.gameName }} Redux
		</header>

		<div class = "hero__btn_ctr">

			<a href="releases/{{ include.gameReleaseName }}" class="btn latest-rls">
				Download Latest Release
			</a>

			<a href = "https://youtube.com/" class = "btn clear">		
				Watch the Trailer
			</a>

		</div>
	</div>

	<div class = "text-container">
		<div class = "row-items">
			<section class="sect install">
				
				{% include installation.html gameSubname = page.gameSubname gameReleaseName = page.gameReleaseName %}

			</section>

			<section class = 'sect'>

				{% include controller_setup.html %}
				
			</section>
		</div>
	</div>
</section>

<section id = 'gallery' class="mhp3rd">
	{% include gallery.html game = page.gameReleaseName %}
</section>
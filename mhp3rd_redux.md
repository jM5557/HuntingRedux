---

layout: home

permalink: /mhp3rd/

gameName: Monster Hunter Portable 3rd
gameSubname: MHP3rd Redux
gameReleaseName: mhp3rd

topArt: hero-wp-2.jpg

---


<section id = "top-header" class = "mhp3rd__header">
	
	<div class = "hero__container">

		<div class = "hero-top__wrapper">
			
				
			<div class="hero_art_box__heading">
				
				<div class = "inner_heading">
					<h3>{{ page.gameName }}</h3>
					
					<h5>redux - v.1.0.0</h5> 
				</div>

				<div class = "hero__btn_ctr">

					<a href="releases/{{ include.gameReleaseName }}" class=" latest-rls">Download Latest Release</a>

					<a href="https://google.com" class = "btn trailer-link btn">
							Watch the Trailer
						</a>
					
				</div>
			</div>
			
		</div>
		
	</div>

</section>


<div class = "text-container">

	<section class="sect">
		
		{% include installation.html gameSubname = page.gameSubname gameReleaseName = page.gameReleaseName %}

	</section>

	<section class = 'sect'>

		{% include controller_setup.html %}
		
	</section>
</div>

<section id = 'gallery' class="mhp3rd">
	{% include gallery.html game = page.gameReleaseName %}
</section>
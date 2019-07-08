---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home

latestGame: mhp3rd

latestGameShort: MHP3rd

latestGameName: "Monster Hunter Portable 3rd"

latestTrailerID: "wsGVYFBxY88"

previewItems:
 - image: "screens-1.png"
   heading: "An Ecological Marvel."
   subheading: "Hunting Redux remasters past foes, making them more fearsome than ever."
 - image: "screens-2.png"
   heading: "With All The Comforts Of Home."
   subheading: "Visit the most welcoming villages and hostile environments in HD."
 - image: "screens-4.png"
   heading: "A Fresh Take On Familiar Visuals."
   subheading: "The same great gameplay with redefined visuals for a new generation."

---

<section id="top-header">

	
		<div class = "main-center-img">
			<a href = "https://youtube.com/" class = "play-btn">
				
				<p>Watch the Trailer</p>
			</a>
		</div>
	
	<div id="main-center-inner-wrapper">

		<div class="main-center-content-wrapper">

			<h1 class="slogan main">
				{{ page.latestGameShort }} Redux.
			</h1>

			<h1 class="slogan back">
				HD Texture Pack.
			</h1>

			<div>
				<button class="latest-rls">
					Download Latest Release
				</button>
			</div>

			<img alt = "Zinogre Render" src="assets/img/zinogre-render.png" class = "zinogre-render">

		</div>
		
	</div>

</section>

<section id = "content-center">

	{% for previewItem in page.previewItems %}
	<div class = "preview-item-container">

		<div class = "preview-item-side-box">
			<img src="assets/img/{{ page.latestGame }}/{{ previewItem.image }}" alt="screen image">

			<h3>

				{{ previewItem.heading }}

			</h3>

			<p>
				{{ previewItem.subheading }}
			</p>
		</div>
	</div>
	{% endfor %}

</section>

<section id="gallery">
	{% include gallery.html game = page.latestGame %}
</section>

<section id = "home-bottom">
	
	<div class="inner-content">
		
		<div class="box-art">
			<img src="assets/img/{{ page.latestGame }}/hero-wp.jpg" alt="game box art">
		</div>

		<div class="side-box">

			<h3 class = "with-bars">High Quality Hunting.</h3>

			<p>
				<button class="btn">Download Texture Pack</button>
			</p>

			<p>
				<a href="https://ppsspp.org" class="ppsspp_logo">Only on PPSSPP</a>
			</p>

		</div>

	</div>

</section>
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
   subheading: "Past Monsters re-textured to stand more fearsome than ever before!"
   link: "/mhp3rd/monsters"
 - image: "screens-2.png"
   heading: "With All The Comforts Of Home."
   subheading: "HD Yukumo Village is open to all hunters, from farm to faculties!"
   link: "/mhp3rd/village"
 - image: "screens-4.png"
   heading: "The Same Great Hunts."
   subheading: "Vibrant visuals and UI redesign gives new life to the classic Monster Hunting experience!"
   link: "/mhp3rd/ui"

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

			<div class = "game-link">
				<a  href = "{{ previewItem.link }}" 
					alt = "Link to game details"
					class = "link-btn"
				>
					View Details
				</a>
			</div>
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
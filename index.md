---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home

latestGame: mhp3rd
latestTrailerID: "wsGVYFBxY88"

previewItems:
 - image: "screens-1.png"
   heading: "An Ecological Marvel."
   subheading: "Monsters completely re-textured to appear more fearsome than ever before!"
   link: "/mhp3rd/monsters"
 - image: "screens-2.png"
   heading: "With All The Comforts Of Home."
   subheading: "HD Yukumo Village has been fully furnished, from farm to faculties!"
   link: "/mhp3rd/village"
 - image: "screens-4.png"
   heading: "The Same Great Hunts."
   subheading: "HUD and visuals redesigned to give new life to the classic Monster Hunting experience!"
   link: "/mhp3rd/ui"

---

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
					<b class="right-caret"></b>
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

			<div class = "box-item">
				<h2>Requirements</h2>
				<ul>
					<li>PPSSPP Emulator <a class = "download link ppsspp" href = "https://ppsspp.org">Download Now</a></li>
					<li>Monster Hunter Portable 3rd ISO</li>
				</ul>
			</div>
		</div>
	</div>

</section>
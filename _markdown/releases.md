---

layout: default

permalink: "/releases/"

---

<div class="main-wrapper">
	<section class="sect box_content_wrapper releases">

		<header>
			Latest Releases
		</header>
			
		<div class="post__releases box_content text_content_wrapper">
			
			{% for post in site.posts %}
			  <article class = "post__release">

			  	<div class = "post__inner_wrapper">

			  		<div class = "post__top_matter">

			  		<time class = "post__date" datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_long_string }}</time>

				    <h2 class = "post__title">
				        {{ post.title }}
				    </h2>
			  	</div>
					
			    <p class = "post__subtitle">{{ post.subtitle }}</p>
				
				<span class = "post__category">{{ post.game }}</span>
			  	


				<p class = "post__action">
					<a href="{{post.release__link}}" class="btn">Download Now</a>

				    <a href="{{post.url}}" class = "dl_link__btn clear">Read More</a>
				</p>

			  	</div>
				    
			  </article>
			{% endfor %}


		</div>
		
	</section>
</div>

---
layout: default

title: MHP3rd Release 02
subtitle: Yukumo Farm, Desert, Arena & More!

game: MHP3rd Redux

textContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br><br> Tenetur ab, officiis fugit, voluptatibus perspiciatis officia ipsam similique a ad id nisi quos esse nobis. Soluta dolore libero eaque veritatis, harum."

release__link: https://google.com
---

<article class = "sect box__content_wrapper">
	<header>{{ page.title }}</header>

	<div class="post__inner_content box__content text__cont">
        
		<time class = "post__date" datetime="{{ page.date | date: "%Y-%m-%d" }}">{{ page.date | date_to_long_string }}</time>

		<h2 class = "box__subtitle">{{ page.subtitle }}</h2>

		<div class="text_content">

			{{ page.textContent | safeHTML }}

			<div class="btn-ctr">
				<a href="{{ page.release__link }}" class="dl_link__btn"> Download Now </a>

				<a href="https://ppsspp.org" class="dl_link__btn clear"> Download PPSSPP </a>
			</div>
		</div>

	</div>
</article>
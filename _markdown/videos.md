---
permalink: "/videos/"

videos:
 - url: "wsGVYFBxY88"
 - url: "98mSNK2UKqg"
 - url: "X0w1iPWyoRA"
 - url: "47DKoSDeOUQ"
---

<section class = "sect">

    <header>
		Videos
	</header>

    <p class = "page_desc">
        Remastered Monster Hunter intros and Cinematics at up to 4K Resolution. 
            <br/>
        Classic Monster Hunter for a modern generation!
    </p>

    <div class = "video-gallery-wrapper">
        
        {% for video in page.videos %}
        <div class = "large-item">
            <iframe src="https://www.youtube-nocookie.com/embed/{{ video.url }}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        {% endfor %}

    </div>


</section>
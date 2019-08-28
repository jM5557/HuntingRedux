---
permalink: "/videos/"
---

<section class = "sect videos">

    <header>
		Videos
	</header>

    <div class = "page_desc ">
        As part of our project to preserve and revitalize older Monster Hunter titles, we have remastered Monster Hunter introduction cinematics and additional cutscenes at up to 4K resolution. 
            <br/>
            <br/>
        Note that YouTube compresses video quality heavily, so we recommend checking out the full resolution video files hosted on our Google Drive:

        <div class = "link-wrapper">
            <a href = "https://www.youtube.com/channel/UC1Vim6AS0sVYCkmumJN1u_A">
                HuntingRedux on YouTube
            </a>
            <a href = "https://drive.google.com/">
               Videos on Google Drive
            </a>
        </div>
    </div>

    <div class = "video-gallery-wrapper">
        
        <div id = "video-page-root">

            <div class = "videos-list">
            {% for video in site.data.videos.videos %}
                <div class = "video-thumbnail">
                    <img 
                        alt = "youtube thumbnail" 
                        src = "https://img.youtube.com/vi/{{ video.id }}/0.jpg"
                    />
                    <p class = "title">{{ video.title }}</p>
                    <div class = "category-list">
                        {% for category in video.category %}
                            <span class = "category">
                                {{ category }}
                            </span>
                        {% endfor %}
                    </div>
                </div>
            {% endfor %}
            </div>
        </div>

    </div>

</section>
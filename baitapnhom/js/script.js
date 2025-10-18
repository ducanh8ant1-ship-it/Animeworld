document.addEventListener("DOMContentLoaded", () => {

    const popularAnime = [
        {
            title: "Demon Slayer: Rengoku",
            poster: "assets/img/thanh.jpg",
            rating: 9.4,
            badge: "Movie",
            video: "assets/video/anime.mp4"
        },
        {
            title: "Jujutsu Kaisen",
            poster: "assets/img/jujutsu.jpg",
            rating: 8.9,
            badge: "Tập 24",
            video: "assets/video/jujutsukaisen.mp4"
        },
        {
            title: "Attack on Titan",
            poster: "assets/img/Attack-On-Titan-elle-man-1.jpg",
            rating: 9.2,
            badge: "Phần cuối",
            video: "assets/video/anime.mp4"
        },
        {
            title: "Spy x Family",
            poster: "assets/img/Spy x Family.jpg",
            rating: 9.2,
            badge: "Tập 15",
            video: "assets/video/anime.mp4"
        }
    ];

    const loader = document.getElementById("pageLoader");
    const navLinks = document.querySelectorAll(".nav-link");
    const moviesContainer = document.getElementById("moviesContainer");
    const videoModal = document.getElementById("videoModal");
    const videoPlayer = document.getElementById("animeVideoPlayer");
    const closeModalButton = document.querySelector(".close-button");
    const bannerPlayBtn = document.querySelector(".btn-play");


    function renderAnimeCards(animeList) {
        if (!moviesContainer) return;
        moviesContainer.innerHTML = "";
        animeList.forEach(anime => {
            const movieCard = `
                <div class="movie-card" data-video="${anime.video}">
                    <div class="episode-badge">${anime.badge}</div>
                    <div class="rating"><i class="fas fa-star"></i> ${anime.rating}</div>
                    <img src="${anime.poster}" class="movie-poster" alt="${anime.title}">
                    <div class="movie-info">
                        <h3 class="movie-title">${anime.title}</h3>
                    </div>
                </div>
            `;
            moviesContainer.insertAdjacentHTML('beforeend', movieCard);
        });
    }

    function showVideoModal(videoSrc) {
        if (videoSrc) {
            videoPlayer.src = videoSrc;
            videoModal.classList.add("show");
            videoPlayer.play();
        }
    }

    function hideVideoModal() {
        videoModal.classList.remove("show");
        videoPlayer.pause();
        videoPlayer.src = ""; 
    }

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            loader.classList.add("show");

            setTimeout(() => {
                const section = link.dataset.section;
                console.log("Navigating to:", section);
                renderAnimeCards(popularAnime); 
                loader.classList.remove("show");
            }, 1200);
        });
    });


    moviesContainer.addEventListener('click', (e) => {

        const card = e.target.closest('.movie-card');
        if (card) {
            const videoSrc = card.dataset.video;
            showVideoModal(videoSrc);
        }
    });
    

    bannerPlayBtn.addEventListener('click', () => {
        const videoSrc = bannerPlayBtn.dataset.video;
        showVideoModal(videoSrc);
    });

    closeModalButton.addEventListener("click", hideVideoModal);
    videoModal.addEventListener("click", e => {

        if (e.target === videoModal) {
            hideVideoModal();
        }
    });

    renderAnimeCards(popularAnime);
});
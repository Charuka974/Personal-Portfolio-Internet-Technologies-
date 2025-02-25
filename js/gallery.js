
document.addEventListener("DOMContentLoaded", function () {
    let gallery = document.querySelector(".gallery-container");

    // Pause auto-scroll when hovered
    gallery.addEventListener("mouseenter", () => {
        gallery.style.animationPlayState = "paused";
    });
    gallery.addEventListener("mouseleave", () => {
        gallery.style.animationPlayState = "running";
    });

    // Lightbox Popup
    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.querySelector(".lightbox-content");
    let closeBtn = document.querySelector(".close");

    document.querySelectorAll(".gallery-item img").forEach(img => {
        img.addEventListener("click", function () {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});


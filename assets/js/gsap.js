var tl = gsap.timeline();
let mm = gsap.matchMedia();
var cutText = document.querySelectorAll(".splitting-text");
cutText.forEach((element) => {
    element.innerHTML = element.textContent.replace(/./g, "<span>$&</span>");
});

tl.from(".navbar", {
    duration: 1,
    y: -10,
    opacity: 0,
    ease: "power2.out",
});

tl.from("header nav a", {
    duration: 1,
    y: -10,
    opacity: 0,
    ease: "power3.in",
    stagger: {
        each: 0.07,
        from: "center",
    },
});

tl.from(".hero-section .col-lg-6 *", {
    duration: 1,
    y: -10,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.3,
});

tl.from("#hero-banner-section .moving-border", {
    opacity: 0,
    y: -20,
    ease: "power4.out",
    duration: 1.5,
});
// ################## Hero Banner Vide section #################

document.addEventListener("DOMContentLoaded", function () {
    var heroBannerVideo = gsap.timeline({
        scrollTrigger: {
            trigger: "#hero-banner-section",
            start: "center center",
            pin: true,
            scrub: 1,
            // end: "+=160%",
            // markers: true,
        },
    });
    heroBannerVideo.to(
        "#hero-banner-section .moving-border",
        {
            rotate: 0,
            border: 0,
            ease: "power4.out",
        },
        "hero-banner-video"
    );
    heroBannerVideo.to(
        "#hero-banner-section .banner-video-card",
        {
            width: "100%",
            height: "100%",
        },
        "hero-banner-video"
    );
});

document.addEventListener("DOMContentLoaded", function () {
    var aboutContent = gsap.timeline({
        scrollTrigger: {
            trigger: "#about-content",
            scroller: "body",
            markers: false,
            start: "top center",
            // end: "center 70%",
        },
    });
    aboutContent.fromTo(
        "#about-content .js-title",
        {
            y: "100%",
            skewY: 2,
            scale: 0.8,
            rotateX: -60,
        },
        {
            y: 0,
            skewY: 0,
            rotateX: 0,
            scale: 1,
            ease: "expo.out",
            stagger: 0.2,
            duration: 2.5,
            force3D: true,
        }
    );
    // Select ticker element
    // const ticker = document.querySelector(".ticker");
    // const tickerItems = document.querySelectorAll(".item");
    // const tickerWidth = ticker.scrollWidth; // Total width of the ticker content

    // // Duplicate items for seamless loop
    // tickerItems.forEach((item) => {
    //     const clone = item.cloneNode(true);
    //     ticker.appendChild(clone); // Add cloned items to the ticker
    // });
    // // Ticker Animation
    // gsap.to(".ticker", {
    //     xPercent: -100, // Move ticker completely to the left
    //     repeat: -1, // Infinite repeat
    //     ease: "linear",
    //     duration: 30, // Adjust speed
    // });
});

// ################## About section #################

mm.add("(min-width: 768px)", () => {
    // about section content
    var aboutSection = gsap.timeline({
        scrollTrigger: {
            trigger: "#aboutsection",
            start: "30% center",
            scrub: 2, // Smooth scroll effect
            markers: false,
        },
    });

    aboutSection
        .from("#aboutsection .circle", {
            scale: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#aboutsection",
                start: "50% center",
                scrub: 2, // Smooth scroll effect
                // markers: true,
            },
        })
        .from("#aboutsection .container", {
            marginTop: "20vh",
            ease: "power2.out",
        })
        .from("#aboutsection img", {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "power2.out",
        })
        .from("#aboutsection h2", {
            opacity: 0,
            y: 30,
            duration: 1.5,
            ease: "power2.out",
        })
        .from(
            "#aboutsection-right-content",
            {
                opacity: 0,
                x: 100,
                duration: 1,
                ease: "power2.out",
            },
            "-=2"
        )
        .from("#aboutsection h3", {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power2.out",
        });
});
mm.add("(max-width: 768px)", () => {
    // about section content
    var aboutSection = gsap.timeline({
        scrollTrigger: {
            trigger: "#aboutsection",
            start: "center center",
            end: "80% center",
            scrub: 2, // Smooth scroll effect
            markers: false,
        },
    });

    aboutSection
        .from("#aboutsection .circle", {
            scale: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#aboutsection",
                start: "20% center",
                scrub: 2, // Smooth scroll effect
                // markers: true,
            },
        })

        .from("#aboutsection img", {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "power2.out",
        })
        .from("#aboutsection h2", {
            opacity: 0,
            y: 30,
            duration: 2,
            ease: "power2.out",
        })
        .from("#aboutsection h3", {
            opacity: 0,
            y: 30,
            duration: 2,
            ease: "power2.out",
        })

        .from("#aboutsection-right-content", {
            opacity: 0,
            x: 100,
            duration: 2,
            ease: "power2.out",
        });
});
// var aboutSection = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#aboutsection",
//         start: "center center",
//         // end: "top 50%",
//         // pin: true,
//         scrub: 2,
//         // end: "+=160%",
//         // markers: true,
//     },
// });

// tl.from("#aboutsection .circle", {
//     scale: 0,
//     ease: "power2.out",
//     scrollTrigger: {
//         trigger: "#aboutsection",
//         markers: false,
//         start: "50% center",
//         // pin: true,
//         // end: "top 10%",
//         scrub: 2,
//     },
// });

// aboutSection.from("#aboutsection .container", {
//     duration: 2,
//     marginTop: "20vh",
//     ease: "power2.out",
// });

// tl.from("#aboutsection h2", {
//     duration: 2,
//     ease: "power2.out",
//     scrollTrigger: {
//         trigger: "#aboutsection",
//         scroller: "body",
//         markers: false,
//         start: "center center",
//         // end: "top 10%",
//         scrub: 3,
//     },
// });

// tl.from("#aboutsection h3", {
//     duration: 2,

//     ease: "power2.out",
//     scrollTrigger: {
//         trigger: "#aboutsection",
//         scroller: "body",
//         markers: false,
//         start: "center center",
//         // end: "top 10%",
//         scrub: 3,
//     },
// });

// tl.from("#aboutsection img", {
//     duration: 1,
//     ease: "power2.out",
//     scrollTrigger: {
//         trigger: "#aboutsection img",
//         scroller: "body",
//         // markers: true,
//         start: "center center",
//         // end: "top 5%",
//         scrub: 2,
//     },
// });

// tl.from("#aboutsection-right-content", {
//     duration: 1,
//     ease: "power2.out",
//     // opacity: 0,
//     scrollTrigger: {
//         trigger: "#aboutsection-right-content",
//         scroller: "body",
//         // markers: true,
//         start: "center center",
//         // end: "top 5%",
//         scrub: 4,
//     },
// });

// ################## Grid GAllery section #################

document.addEventListener("DOMContentLoaded", function () {
    var mockup = document.querySelector("#grid-gellery-section .mockup");
    var gridgellerysectioncard = document.querySelector(
        "#grid-gellery-section .grid-gellery-section_card"
    );

    var gridgellerysection = gsap.timeline({
        scrollTrigger: {
            trigger: "#grid-gellery-section",
            start: "center center",
            end: "+=3000",
            scrub: 1,
            pin: true,
            // markers: true,
        },
    });

    // ScrollTrigger.config({ ignoreMobileResize: true });
    gridgellerysection.from(gridgellerysectioncard, {
        opacity: 0,
    });

    gridgellerysection.fromTo(
        mockup,
        {
            scale: 5,
        },
        {
            scale: 1,
            duration: 1,
        },
        "mocky"
    );

    gridgellerysection.fromTo(
        gridgellerysectioncard,
        {
            scale: 1,
        },
        {
            scale: 0.2,
            duration: 1,
        },
        "mocky"
    );
});

// ################## About Heading2 section #################

document.addEventListener("DOMContentLoaded", function () {
    var aboutHeading = gsap.timeline({
        scrollTrigger: {
            trigger: "#about-heading2",
            start: "center center",
            // end: "top 50%",
            // pin: true,
            // scrub: 2,
            // end: "+=2000",
            // markers: true,
        },
    });
    aboutHeading.fromTo(
        "#about-heading2 h2",
        {
            y: "100%",
            skewY: 2,
            scale: 0.8,
            rotateX: -60,
        },
        {
            y: 0,
            skewY: 0,
            rotateX: 0,
            scale: 1,
            ease: "expo.out",
            stagger: 0.2,
            duration: 2.5,
            force3D: true,
        }
    );
});

document.addEventListener("DOMContentLoaded", function () {
    let categorySection = gsap.timeline({
        scrollTrigger: {
            trigger: "#category-section",
            markers: false,
            start: "center center",
            end: "+=3000",
            scrub: 1,
            pin: true,
        },
    });

    categorySection
        .to(".category1 .text-animate-track", { opacity: 0 }, "category1")
        .to(".category1 .cover-image", { opacity: 0, scale: 0.7 }, "category1")
        .fromTo(
            ".category1",
            { zIndex: 5, overwrite: true },
            { zIndex: -5, overwrite: true },
            "category1"
        )
        .to(
            ".category1 .category-image-content span",
            { opacity: 0, xPercent: -5 },
            "category1"
        )
        // 2
        .fromTo(
            ".category2 .text-animate-track",
            { opacity: 0 },
            { opacity: 1 },
            "category2"
        )
        .fromTo(
            ".category2 .category-image-content",
            { opacity: 0, xPercent: -5 },
            { opacity: 1, xPercent: 0 },
            "category2"
        )
        .fromTo(
            ".category2",
            { zIndex: -5, overwrite: true },
            { zIndex: 5, overwrite: true },
            "category2"
        )
        .fromTo(
            ".category2 .cover-image",
            {
                opacity: 0,
                filter: "brightness(7)",
                yPercent: 100,
                clipPath: "inset(100% 0% 0% 0%)",
                scale: 0.7,
            },
            {
                opacity: 1,
                filter: "brightness(1)",
                yPercent: 0,
                clipPath: "inset(0% 0% 0% 0%)",
                scale: 1,
            },
            "category2"
        )
        .to(".category2 .text-animate-track", { opacity: 0 }, "category3")
        .to(".category2 .category-image-content", { opacity: 0 }, "category3")
        .to(".category2 .cover-image", { opacity: 0, scale: 0.7 }, "category3")

        // 3

        .fromTo(
            ".category3 .text-animate-track",
            { opacity: 0 },
            { opacity: 1 },
            "category3"
        )
        .fromTo(
            ".category3 .category-image-content",
            { opacity: 0, xPercent: -5 },
            { opacity: 1, xPercent: 0 },
            "category3"
        )
        .fromTo(
            ".category3",
            { zIndex: -5, overwrite: true },
            { zIndex: 5, overwrite: true },
            "category3"
        )
        .fromTo(
            ".category3 .cover-image",
            {
                opacity: 0,
                filter: "brightness(7)",
                yPercent: 100,
                clipPath: "inset(100% 0% 0% 0%)",
                scale: 0.7,
            },
            {
                opacity: 1,
                filter: "brightness(1)",
                yPercent: 0,
                clipPath: "inset(0% 0% 0% 0%)",
                scale: 1,
            },
            "category3"
        );
});

// ################## Portfolio section #################

document.addEventListener("DOMContentLoaded", function () {
    var coverPorfolioImages = gsap.utils.toArray(".cover-porfolio-images-div");
    let portfolio = gsap.timeline({
        scrollTrigger: {
            trigger: "#portfolio-section",
            scroller: "body",
            markers: false,
            start: "center center",
            end: "500% -100%",
            scrub: 2,
            pin: true,
        },
    });
    portfolio
        .from(
            "#top span",
            {
                opacity: 0,
            },
            "top-bottom-opacity"
        )
        .from(
            "#bottom span",
            {
                opacity: 0,
            },
            "top-bottom-opacity"
        )
        .to(
            "#top",
            {
                top: "-50%",
            },
            "top-bottom"
        )
        .to(
            "#bottom",
            {
                bottom: "-50%",
            },
            "top-bottom"
        )

        .to(
            "#top span",
            {
                top: "100%",
            },
            "top-bottom"
        )
        .to(
            "#bottom span",
            {
                bottom: "100%",
            },
            "top-bottom"
        )

        .to("#center .content", {
            marginTop: 0,
        })
        .from(coverPorfolioImages, {
            xPercent: +85 * (coverPorfolioImages.length - 1),
        })
        .to(coverPorfolioImages, {
            xPercent: -85 * (coverPorfolioImages.length - 1),
        });
});

document.querySelectorAll(".heading-animate").forEach((section) => {
    var headingRotate1 = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "center center",
            scroller: "body",
            markers: false,
            anticipatePin: 1,
        },
    });

    headingRotate1.fromTo(
        section.querySelectorAll(".turn-heading"),
        {
            y: "100%",
            skewY: 2,
            scale: 0.8,
            rotateX: -60,
        },
        {
            y: 0,
            skewY: 0,
            rotateX: 0,
            scale: 1,
            ease: "expo.out",
            stagger: 0.2,
            duration: 2.5,
            force3D: true,
        }
    );
});
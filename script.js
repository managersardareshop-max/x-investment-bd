/* =====================================================
   X INVESTMENT BD
   PREMIUM S-STYLE
   JavaScript
===================================================== */


/* ==============================
   TELEGRAM MINI APP
============================== */

const telegram = window.Telegram?.WebApp;

if (telegram) {

    telegram.ready();

    telegram.expand();

    console.log("Telegram Mini App connected.");

}


/* ==============================
   ELEMENTS
============================== */

const enterPlatform =
    document.getElementById("enterPlatform");

const startNow =
    document.getElementById("startNow");

const learnMore =
    document.getElementById("learnMore");

const menuButton =
    document.querySelector(".menu-button");


/* ==============================
   ENTER PLATFORM
============================== */

function openPlatform() {

    /*
       Temporary action.

       Later this button will open
       the main X Investment BD
       dashboard.
    */

    alert(
        "Welcome to X Investment BD.\n\n" +
        "The investment dashboard is being prepared."
    );

}


/* ==============================
   BUTTON EVENTS
============================== */

if (enterPlatform) {

    enterPlatform.addEventListener(
        "click",
        openPlatform
    );

}


if (startNow) {

    startNow.addEventListener(
        "click",
        openPlatform
    );

}


/* ==============================
   LEARN MORE
============================== */

if (learnMore) {

    learnMore.addEventListener(
        "click",
        function () {

            const about =
                document.getElementById("about");

            if (about) {

                about.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


/* ==============================
   MENU BUTTON
============================== */

if (menuButton) {

    menuButton.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });

        }
    );

}


/* ==============================
   SCROLL REVEAL
============================== */

const revealItems =
    document.querySelectorAll(
        ".premium-card, .intro-section, .cta-box"
    );


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealItems.forEach(
    function (item) {

        item.style.opacity = "0";

        item.style.transform =
            "translateY(25px)";

        item.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        revealObserver.observe(item);

    }
);


/* ==============================
   CONSOLE BRANDING
============================== */

console.log(
    "%c X INVESTMENT BD ",
    "background:#d4af37;color:#080808;" +
    "font-size:18px;font-weight:bold;" +
    "padding:8px 15px;border-radius:6px;"
);

console.log(
    "Premium Digital Platform"
);
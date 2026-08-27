/* Détection Android / iOS / ordinateur pour adapter le bouton de contact e-mail :
   sur mobile, une appli mail est presque toujours installée (mailto: fonctionne bien) ;
   sur ordinateur, mailto: échoue souvent sans client installé, on préfère Gmail / Outlook.com */
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  var ua = navigator.userAgent || "";
  var isMobile = /Android|iPhone|iPad|iPod/i.test(ua);

  var mailtoBtn = document.getElementById("email-mailto");
  var gmailBtn = document.getElementById("email-gmail");
  var outlookBtn = document.getElementById("email-outlook");
  var note = document.getElementById("email-note");

  if (isMobile && mailtoBtn && gmailBtn && outlookBtn) {
    gmailBtn.style.display = "none";
    outlookBtn.style.display = "none";
    mailtoBtn.style.display = "flex";
    if (note) {
      note.textContent = "Ce bouton ouvre un nouveau message déjà adressé, dans votre application e-mail.";
    }
  }

  /* Onglets (page Alphabet, et toute autre page qui utilise .tabbar / .tab-panel) */
  var tabButtons = document.querySelectorAll(".tab-btn");
  if (tabButtons.length) {
    tabButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var target = btn.getAttribute("data-tab");

        tabButtons.forEach(function (b) {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");

        document.querySelectorAll(".tab-panel").forEach(function (panel) {
          panel.classList.remove("active");
        });
        var panel = document.getElementById("tab-" + target);
        if (panel) {
          panel.classList.add("active");
        }
      });
    });
  }

  /* Bouton "retour en haut" */
  var backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    });
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});



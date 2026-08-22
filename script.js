document.addEventListener("DOMContentLoaded", function () {

  /* ================================
     MOBILE MENU
     ================================ */

  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      const isOpen = navMenu.classList.contains("active");

      menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
      );

      menuBtn.textContent = isOpen ? "✕" : "☰";
    });

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");

        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-label", "Open menu");
      });
    });
  }


  /* ================================
     QUOTE FORM → WHATSAPP
     ================================ */

  const quoteForm = document.getElementById("quoteForm");

  if (quoteForm) {

    quoteForm.addEventListener("submit", function (event) {

      event.preventDefault();

      const nameElement =
        document.getElementById("customerName");

      const phoneElement =
        document.getElementById("customerPhone");

      const serviceElement =
        document.getElementById("service");

      const locationElement =
        document.getElementById("location");

      const messageElement =
        document.getElementById("message");


      if (
        !nameElement ||
        !phoneElement ||
        !serviceElement ||
        !locationElement ||
        !messageElement
      ) {
        alert("There was a problem with the quote form.");
        return;
      }


      const name = nameElement.value.trim();
      const phone = phoneElement.value.trim();
      const service = serviceElement.value;
      const location = locationElement.value.trim();
      const message = messageElement.value.trim();


      if (!name || !phone || !service || !location || !message) {
        alert("Please complete all fields before sending your request.");
        return;
      }


      const whatsappMessage =
`Hello Home Heart Contractors,

I would like to request a quote.

Name: ${name}

Phone: ${phone}

Service Required: ${service}

Project Location: ${location}

Project Details:
${message}

Sent from the Home Heart Contractors website.`;


      const whatsappURL =
        "https://wa.me/263786303666?text=" +
        encodeURIComponent(whatsappMessage);


      window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
      );

    });
  }


  /* ================================
     SMOOTH SCROLL
     ================================ */

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId = this.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });

});